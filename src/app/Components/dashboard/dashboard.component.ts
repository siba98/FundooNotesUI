import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  notes:any=[];
  constructor(private noteService: NoteServiceService) { }
  ngOnInit(): void {
  }
  // getNotes(){
  //   return this.noteService.getNotes(localStorage.getItem("UserId")).subscribe((response:any)=>{
  //     this.notes=response.data;
  //   })
  // }
}
