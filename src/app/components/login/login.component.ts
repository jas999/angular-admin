import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UrlSerializer, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  clickmessage = '';

  userObj = new User();

  constructor(private router: Router, private loginService : LoginService) { 

  }

  ngOnInit() {
  }

  login(){
 //   this.clickmessage = "Login Clicked.";
    this.router.navigateByUrl("/home")   ; 
   // alert(JSON.stringify(this.userObj));

   //this.loginService.callHTTPService();

  }

  log(x){
    console.log(x);
  }

  
  

}
