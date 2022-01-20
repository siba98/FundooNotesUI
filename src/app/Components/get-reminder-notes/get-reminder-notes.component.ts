import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-reminder-notes',
  templateUrl: './get-reminder-notes.component.html',
  styleUrls: ['./get-reminder-notes.component.scss']
})
export class GetReminderNotesComponent implements OnInit {

  GetAllReminderNotes:any
  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.GetReminderNotes()
    console.log(this.GetAllReminderNotes)
  }
  GetReminderNotes(){
    this.noteService.AllReminderNotes().subscribe((result:any)=>{
      this.GetAllReminderNotes = result.data;
      this.GetAllReminderNotes.reverse();
      console.log(this.GetAllReminderNotes);
    },
    error => {
      console.log("error",error);
    })
  }

}
