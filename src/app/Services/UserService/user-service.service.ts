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
      FirstName: data.firstname,
      LastName: data.lastname,
      Email: data.email,
      Password: data.password,
    }
    return this.httpservice.post(`${this.baseUrl}/api/User/register`, param);
  }
}
