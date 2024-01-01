import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public UserSer: UserService, private router: Router) { }
  userLogin: User = new User("Name", null, null, null, null);
  use: User = new User(null, null, null, null, null);
  u: User;
  isInvalid: boolean = false;
  login() {
    this.UserSer.login(this.use.Name, this.use.Password).subscribe(
      data => {
        this.userLogin = data;
        this.u = this.userLogin;
        this.u.Code.toString;
        sessionStorage.setItem("user", JSON.stringify(this.u))
        this.routToAllR();
      },
      (err) => {
        debugger
        if (err.status == 400) this.isInvalid = true;
      }
    )
  }

  routToAllR() {
    this.router.navigateByUrl('/all-recipes');

  }

}
