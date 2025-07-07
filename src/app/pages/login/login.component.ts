import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  togglePassword: boolean = false;

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  toggleVisibility() {
    this.togglePassword = !this.togglePassword;
  }
}
