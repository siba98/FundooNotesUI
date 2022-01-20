import { ThrowStmt } from '@angular/compiler';
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
    headers: { Authorization: `Bearer ${this.token}` }
  }
  Addnote(data: any) {
    let param = {
      userId: Number(localStorage.getItem("userId")),
      title: data.title,
      description: data.description,
    }
    console.log(param);
    return this.httpservice.post(`${this.baseUrl}/api/Note/addNote`, param, true, this.header);
  }
  Updatenote(data: any) {
    let param = {
      UserId: Number(localStorage.getItem('userId')),
      NoteId: data.noteId,
      Title: data.title,
      Description: data.description
    }
    console.log(param);
    return this.httpservice.put(`${this.baseUrl}/api/Note/editNote`, param, true, this.header);
  }
  NotesList() {
    return this.httpservice.get(`${this.baseUrl}/api/Note/getNotes?UserId=${localStorage.getItem("userId")}`, true, this.header);
  }
  ArchiveNote(data:any) {
    return this.httpservice.put(`${this.baseUrl}/api/Note/archiveOrUnArchiveNotes/${data}`,null, true, this.header);
  }
  TrashNote(data:any){
    return this.httpservice.put(`${this.baseUrl}/api/Note/trashNotes/${data}`,null, true, this.header);
  }
  PinNote(data:any){
    return this.httpservice.put(`${this.baseUrl}/api/Note/pinOrUnPinnedNotes/${data}`,null, true, this.header);
  }
  AllTrashNotes() {
    return this.httpservice.get(`${this.baseUrl}/api/Note/getTrash?UserId=${localStorage.getItem("userId")}`, true, this.header);
  }
  AllArchivedNotes() {
    return this.httpservice.get(`${this.baseUrl}/api/Note/getArchive?UserId=${localStorage.getItem("userId")}`, true, this.header);
  }
  AllReminderNotes() {
    return this.httpservice.get(`${this.baseUrl}/api/Note/getReminders?UserId=${localStorage.getItem("userId")}`, true, this.header);
  }
}
