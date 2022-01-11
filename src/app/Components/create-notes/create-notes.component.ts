import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  displayBar=true;

  constructor() { }

  ngOnInit(): void {
  }
  openbar(){this.displayBar=false};
}
