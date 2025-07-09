import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/Category/category.service';
import { ComplaintService } from '../../services/Complaint/complaint.service';
import { ContactServeiceService } from '../../services/Contact/contact-serveice.service';

@Component({
  selector: 'app-submit-complint',
imports: [CommonModule, FormsModule],
templateUrl: './submit-complint.component.html',
  styleUrl: './submit-complint.component.css' ,
    providers: [CategoryService , ComplaintService,ContactServeiceService],
  
})
export class SubmitComplintComponent {
   isToken :boolean = false
 complaint = {
    categoryBinding: '',
    name: '',
    description: '',
    nationalId: '',
    email: '',
    location: ''
  }
 user = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    isAnynoums: ''
  };


//   {
//   "description": "magna sunt ut",
//   "email": "amrxx@gmail.com",
//   "location": "sed exer",
//   "name": "quis eu irure",
//   "nationalid": "sit est esse ea tempor",
//   "categoryBinding": "/categories(b63e31ca-1058-f011-bec2-6045bd893716)"
// }

  selectedCategoryId: string = '';
  categories: any[] = [];
 
  constructor(private categoryService: CategoryService ,private complaintService: ComplaintService,private contactServeiceService:ContactServeiceService) {}

ngOnInit(): void {
  const token = localStorage.getItem('token'); 
  console.log(token);
  
  if(token)
  {
    this.isToken = true;
    this.contactServeiceService.getUserByToken().subscribe({
      next: (res) => {
        console.log('User Ingo:', res); 
        this.user.email = res.email,
        this.user.firstname = res.firstname,
      this.user.gender = res.gender,
      this.user.lastname = res.lastname,
      this.user.isAnynoums = res.isAnynoums
    },
    error: (err) => {
      console.error('Error fetching User Ingo:', err);
    }
  });
}

  this.categoryService.getAllCategories().subscribe({
    next: (res) => {
   console.log('API response:', res.data); 
     this.categories = res.data;
    },
    error: (err) => {
      console.error('Error fetching categories:', err);
    }
  });
}

  get isPlaceholderSelected(): boolean {
  return !this.complaint.categoryBinding; 
}



  // categories = ['Water', 'Electricity', 'Sanitation', 'Roads']; // Example values

    submitComplaint(form: any) {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

       this. complaint = {
      // description:
      // email: this.complaint.email,
      // location: this.complaint.location,
      // name: this.complaint.title,
      // nationalid: this.complaint.nationalId,
      // categoryBinding: 

      
    categoryBinding: `/categories(${this.selectedCategoryId})`,
    name: this.complaint.name,
    description:  this.complaint.description,
    nationalId:this.complaint.nationalId,
    email: this.complaint.email,
    location:this.complaint.location,
    };

    console.log(' Complaint submitted:', this.complaint);
    // alert('Complaint submitted successfully!');

     this.complaintService.submitComplaint(this.complaint).subscribe({
      next: (res) => {
        console.log('Complaint submitted successfully', res);
        if(res.status== "success"){
          //success
        }
        else{
          //fail
        }
      },
      error: (err) => {
        console.error('Failed to submit complaint:', err);
      }
    });


 

    form.resetForm();
  }


 onCategoryChange() {
  console.log('Selected categoryId:', this.selectedCategoryId);
}

}
