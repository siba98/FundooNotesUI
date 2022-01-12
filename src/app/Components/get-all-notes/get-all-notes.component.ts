import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
NotesList: any
  constructor(private noteService: NoteServiceService) { }
userId = localStorage.getItem('userId');
  ngOnInit(): void {
    this.GetNotes();
  }

  GetNotes(){
    this.noteService.GetNotes().subscribe((result:any)=>{
      this.NotesList = result.data;
      console.log(this.NotesList)
    })
  }

}
