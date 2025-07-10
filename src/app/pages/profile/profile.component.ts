import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent,CommonModule, FormsModule,FooterComponent],
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
    firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  gender: string = '';

  selectedImage: string | ArrayBuffer | null = null;

onFileSelected(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

deleteImage(): void {
  this.selectedImage = null;
}

}
