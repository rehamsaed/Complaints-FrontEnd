import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private url = 'https://localhost:7059/api/Complaint';

  constructor(private http: HttpClient) {}

  submitComplaint(complaintData: any) {
    const token = localStorage.getItem('token'); // أو الاسم اللي خزنت به التوكن
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  });
  console.log(" hi ,,, im token")
  console.log(token)
    return this.http.post<any>(`${this.url}/SubmitComplaint`, complaintData, { headers });
  }
}
