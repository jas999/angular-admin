import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';

let header = new HttpHeaders();
header = header.append("UserId", "42");
header = header.append("ClientId", "1");

@Injectable({
  providedIn: 'root'
})



export class UserService {

  private apiURL :  String  = "http://ec2-13-59-161-93.us-east-2.compute.amazonaws.com:8080/cms-v1/cms/user/all";

  constructor(private httpClient: HttpClient) { }
  

  public getCustomers() : Observable<User[]>{

    return this.httpClient.get<User[]>(`${this.apiURL}`, { headers : header});

  }
  
}
