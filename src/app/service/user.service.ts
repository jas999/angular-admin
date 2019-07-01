import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';
import { UserDetails } from '../models/user-details';

let header = new HttpHeaders();
header = header.append("UserId", "42");
header = header.append("ClientId", "1");

@Injectable({
  providedIn: 'root'
})



export class UserService {

  private userd : UserDetails = new UserDetails();
  private user : User = new User();
  private apiURL :  String  = "http://ec2-13-59-161-93.us-east-2.compute.amazonaws.com:8080/cms-v1/cms/user/all";
  private apiUpdateStatusURL :  String  = "http://ec2-13-59-161-93.us-east-2.compute.amazonaws.com:8080/cms-v1/cms/user/updatestatus";
  constructor(private httpClient: HttpClient) { }
  

  public getCustomers() : Observable<User[]>{

    return this.httpClient.get<User[]>(`${this.apiURL}`, { headers : header});

  }

  
  updateUserStatus(status: boolean) {
    
    this.user.status  = false ;
    this.userd.user = this.user;
    alert(JSON.stringify(this.userd));
    return this.httpClient.post(`${this.apiUpdateStatusURL}`, this.userd , {headers : header});
  }
  
}
