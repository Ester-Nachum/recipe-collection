import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  re: User = new User(null, null, null, null, null);
  myForm: FormGroup = new FormGroup({
    "Code": new FormControl(null, Validators.compose([Validators.required])),
    "Name": new FormControl(null, Validators.compose([Validators.required])),
    "Pass": new FormControl(null, Validators.compose([Validators.required])),
    "Mail": new FormControl(null, Validators.compose([Validators.email])),
  });
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(public reUser: UserService, public router: ActivatedRoute, public router2: Router) {
    this.router.params.subscribe((p) => { this.re.Name = p.Name })
  }

  Register() {
    if ((this.re.Code == null || this.re.Password == null) && (this.re.Code == null && this.re.Password == null)) {
      Swal.fire({ icon: 'error', title: 'Opss...', text: 'the name or password is messing' })
    }
    else {
      this.reUser.Register(this.re).subscribe(u => {
        this.re = u, sessionStorage.setItem("user", JSON.stringify(this.re));
        this.router2.navigate(['/all-recipes']);
      },
        err => {
          if (err.status == 404)
            Swal.fire({ icon: 'info', title: 'Opss...', text: 'One or more of the details you entered are invalid' });
          if (err.status == 409)
            Swal.fire({ icon: 'info', title: 'Opss...', text: 'there is a user with this name' });
        });
    }
  }

  ngOnInit(): void {

  }

}
