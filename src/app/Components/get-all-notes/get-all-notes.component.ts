import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { NoteServiceService } from '../../Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  GetAllNotesList: any
  constructor(private noteService: NoteServiceService, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.GetNotes();
  }

  EventMessageRecieve(message:any){
    console.log(message);
    this.GetNotes();
  }

  GetNotes(){
    this.noteService.NotesList().subscribe((result:any)=>{
      this.GetAllNotesList = result.data;
      this.GetAllNotesList.reverse();
      console.log(this.GetAllNotesList);
    },
    error => {
      console.log("error",error);
    })
  }
}
