import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-trash-notes',
  templateUrl: './get-trash-notes.component.html',
  styleUrls: ['./get-trash-notes.component.scss']
})
export class GetTrashNotesComponent implements OnInit {
  GetAllTrashNotes:any
  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.GetTrashNotes()
    console.log(this.GetAllTrashNotes)
  }
  GetTrashNotes(){
    this.noteService.AllTrashNotes().subscribe((result:any)=>{
      this.GetAllTrashNotes = result.data;
      this.GetAllTrashNotes.reverse();
      console.log(this.GetAllTrashNotes);
    },
    error => {
      console.log("error",error);
    })
  }
}