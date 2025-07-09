import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',

})
export class HeaderComponent {
   isMenuOpen = false;

   constructor(private router:Router){}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  continueASAGuest(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    this.router.navigate(['/submitComplaint']) 
  }
}
