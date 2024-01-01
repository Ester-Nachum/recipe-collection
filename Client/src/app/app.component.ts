import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserLoggedIn = true;

  logout() {
    sessionStorage.clear();
    this.isUserLoggedIn = false;
  }
  ngOnInit(): void {
    this.isUserLoggedIn = sessionStorage.getItem('user').length != 0;
  }
}
