import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users = [] ;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getCustomers().subscribe(data => this.users = data);
  }

  updateUserStatus(status : boolean){
  
    if(status){
      status = false;
    }else{
      status = true ;
    }   
    this.userService.updateUserStatus(status).subscribe(error => console.log(error)    );
  }

}
