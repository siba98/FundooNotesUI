import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpservice: HttpServiceService) { }
  baseUrl = environment.baseUrl;

  token = localStorage.getItem("token");
header = {
  headers: { Authorization: `Bearer ${this.token}`}
}
  getNotes(){
    return this.httpservice.get(`${this.baseUrl}/api/getNotes?UserId=${localStorage.getItem("userId")}`,true, this.header);
  }
}
