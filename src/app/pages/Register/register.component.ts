import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './register.component.html',
  
})
export class RegisterComponent {
  firstname:string='';
  lastname:string='';
  email: string = '';
  password: string = '';
  confirmPassword:string='';
  togglePassword: boolean = false;
  toggleConfirmPassword:boolean=false;
  gender: string = '';

  
Register(){

}
  toggleVisibility() {
    this.togglePassword = !this.togglePassword;
  }
  toggleVisibilityConfirmPassword() {
    this.toggleConfirmPassword = !this.toggleConfirmPassword;
  }
}
