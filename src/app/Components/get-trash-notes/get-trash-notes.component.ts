import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-trash-notes',
  templateUrl: './get-trash-notes.component.html',
  styleUrls: ['./get-trash-notes.component.scss']
})
export class GetTrashNotesComponent implements OnInit {
  GetAllTrashNotes:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.GetAllTrashNotes)
  }

}
