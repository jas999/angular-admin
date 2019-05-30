import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UrlSerializer, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clickmessage = '';

  userObj = new User();

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  login(){
    this.clickmessage = "Login Clicked.";
    this.router.navigateByUrl("/home")   ; 
   // alert(JSON.stringify(this.userObj));

   

  }

  log(x){
    console.log(x);
  }

  
  

}
