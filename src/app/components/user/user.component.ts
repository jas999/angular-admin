import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormGroup, FormControl , ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : FormGroup ;
  public users = [] ;
  usertype : string[] = [ "RESELLER","DEALER","SUB_DEALER"] ;

  
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.user = new FormGroup({
      email : new FormControl(),
      username : new FormControl()
    });
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

  addNewUser(){
    this.userService.addNewUser(JSON.stringify(this.user.value)).subscribe(
      error => console.log(error)
    );
    console.log( );
  }

}
