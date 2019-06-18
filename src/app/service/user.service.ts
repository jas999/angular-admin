import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL :  String  = "http://ec2-13-59-161-93.us-east-2.compute.amazonaws.com:8080/cms-v1/cms/user/all";

  constructor(private http: HttpClient) { }

  public getCustomers(){

    return this.http.get<Object[]>(`${this.apiURL}/customers`);

  }
  
}
