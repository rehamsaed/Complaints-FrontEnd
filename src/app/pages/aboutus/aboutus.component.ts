import { Component } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { HeaderComponent } from '../../Components/header/header.component';

@Component({
  selector: 'app-aboutus',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
