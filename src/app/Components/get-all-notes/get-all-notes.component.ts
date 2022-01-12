import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
  }

}
