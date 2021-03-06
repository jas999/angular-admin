import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';
import { UserDetails } from '../models/user-details';

let header = new HttpHeaders();
header = header.append("UserId", "1");
header = header.append("ClientId", "1");
header = header.append("Content-Type","application/json");

@Injectable({
  providedIn: 'root'
})



export class UserService {
  

  private userd : UserDetails = new UserDetails();
  private user : User = new User();
  private apiURL :  String  = "http://localhost:8080/cms/user/all";
  private apiUpdateStatusURL :  String  = "http://localhost:8080/cms/user/updatestatus";
  private apiAddNewUser :  String  = "http://localhost:8080/cms/user/add";
  constructor(private httpClient: HttpClient) { }
  
  addNewUser(userJSON: string) : Observable<User> {
    return this.httpClient.post<User>(`${this.apiAddNewUser}`, userJSON , {headers : header});
  }

  public getCustomers() : Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiURL}`, { headers : header});
  }

  
  public updateUserStatus(status: boolean) : Observable<User> {
    let obj = {
      id : "114",
      status : status
    }
    return this.httpClient.post<User>(`${this.apiUpdateStatusURL}`, JSON.stringify(obj) , {headers : header});
  }
  
}
