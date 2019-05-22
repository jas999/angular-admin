import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clickmessage = '';

  userObj = new User();

  constructor() { 
  }

  ngOnInit() {
  }

  login(){
    this.clickmessage = "Login Clicked.";
    
    alert(this.userObj.email);

  }

  
  

}
