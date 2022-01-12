import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-note-cards',
  templateUrl: './display-note-cards.component.html',
  styleUrls: ['./display-note-cards.component.scss']
})
export class DisplayNoteCardsComponent implements OnInit {

  @Input() GetNotes:any
  constructor() { }

  ngOnInit(): void {
  }

}
