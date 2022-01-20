import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-archive-notes',
  templateUrl: './get-archive-notes.component.html',
  styleUrls: ['./get-archive-notes.component.scss']
})
export class GetArchiveNotesComponent implements OnInit {
  GetAllArchivedNotes:any
  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.GetArchivedNotes()
    console.log(this.GetAllArchivedNotes)
  }
  GetArchivedNotes(){
    this.noteService.AllArchivedNotes().subscribe((result:any)=>{
      this.GetAllArchivedNotes = result.data;
      this.GetAllArchivedNotes.reverse();
      console.log(this.GetAllArchivedNotes);
    },
    error => {
      console.log("error",error);
    })
  }

}
