import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ='';
  password: string ='';
  constructor(private route:Router){}


  login(){
    if(this.email==="admin@admin.com" && this.password==="admin"){
      alert("Login successful")
      this.route.navigate(['/rooms' , 'add']);
    }
     
  }

}
