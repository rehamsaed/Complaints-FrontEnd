import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  providers: [LoginService],

})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userName:string ='';
  togglePassword: boolean = false;

  showEmptyFieldsAlert: boolean = false;
  loginSuccess: boolean = false;
  loginFailed: boolean = false;

  constructor(private loginService: LoginService) {}

  login() {
    if (!this.email.trim() || !this.password.trim()) {
     this.loginSuccess = false;
      this.loginFailed = false;
      this.showEmptyFieldsAlert = true;
      
    
       this.email = '';
      this.password = '';
    return;
    }

 

    this.loginService.login({ email: this.email, password: this.password }).subscribe({
    next: (res:any) => {
       this.userName = res.name;
       setTimeout(() => this.loginSuccess = false, 1000);
      console.log(res);

      this.loginSuccess = true;
      this.loginFailed = false;
      this.showEmptyFieldsAlert = false;

     

     localStorage.setItem('token', res.token);
    localStorage.setItem('name', res.name);

    console.log('Token:', res.token);
    console.log('Name:', res.name);
    },
    error: (err) => {
     setTimeout(() => this.loginFailed = false, 1000);

      this.loginFailed = true;
      this.loginSuccess = false;
      this.showEmptyFieldsAlert = false;


      
       this.email = '';
      this.password = '';
    }
  });
  }

  toggleVisibility() {
    this.togglePassword = !this.togglePassword;
  }
}

