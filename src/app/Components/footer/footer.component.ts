import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.component.html',
 
})
export class FooterComponent {
 quickLinks = [
    { title: "Home", href: "/" },
    { title: "Submit Complaint", href: "/submitComplaints" },
 
  ];

  popularCategories = [
    { title: "Electricity", href: "/SubmitComplaint" },
    { title: "Water", href: "/SubmitComplaint" },
    { title: "Gas", href: "/SubmitComplaint" },
    { title: "Waste Management", href: "/SubmitComplaint"},
  ];

  contactInfo = [
    { text: "Phone: +123 456 7890", href: "tel:+1234567890" },
    { text: "Email: support@learnify.com", href: "mailto:support@learnify.com" },
    { text: "Address:\n1901 Thornridge Cir.\nShiloh, Hawaii 81063", href: "#" },
  ];

}
