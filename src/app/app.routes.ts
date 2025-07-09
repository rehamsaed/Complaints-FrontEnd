import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/Register/register.component';
import { SubmitComplintComponent } from './pages/submit-complint/submit-complint.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'submitComplaint', component: SubmitComplintComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

//   { path: '', redirectTo: 'login', pathMatch: 'full' },
 
//   { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
