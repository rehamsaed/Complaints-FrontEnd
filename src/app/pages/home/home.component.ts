import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
