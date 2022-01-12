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
// Addnote(data:any){
//   let param = {
//     userId:1,
//     title: data.title,
//     description: data.description,
//   }
//   console.log(param);
//   return this.httpservice.post(`${this.baseUrl}/api/Note/addNote`, param, true, this.header);
// }
  GetNotes(){
    return this.httpservice.get(`${this.baseUrl}/api/getNotes?UserId=${localStorage.getItem("userId")}`,true, this.header);
  }
}
