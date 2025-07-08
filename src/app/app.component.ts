import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/Register/register.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'my-angular-tailwind-app';
}
