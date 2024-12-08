import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    alert('You are logged in!');
  }

  onForgotPassword() {
    alert('Your new password has been mailed to you');
  }
}
