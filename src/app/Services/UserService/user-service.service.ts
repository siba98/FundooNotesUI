import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpservice: HttpServiceService) { }

  baseUrl = environment.baseUrl;

  Register(data: any) {
    let param = {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
      Password: data.Password,
    }
    return this.httpservice.post(`${this.baseUrl}/api/User/register`, param);
  }

  Login(data: any) {
    let param = {
      Email: data.Email,
      Password: data.Password,
    }
    return this.httpservice.post(`${this.baseUrl}/api/User/login`, param);
  }

  Reset(data: any) {
    let param = {
      Email: data.Email,
      NewPassword: data.NewPassword,
    }
    return this.httpservice.put(`${this.baseUrl}/api/User/resetPassword`, param);
  }

  Forgot(data: any) {
    let param = {
    }
    return this.httpservice.post(`${this.baseUrl}/api/User/forgotPassword?Email=${data.Email}`);
  }
}
