import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNotesComponent } from '../create-notes/create-notes.component';

@Component({
  selector: 'app-display-note-cards',
  templateUrl: './display-note-cards.component.html',
  styleUrls: ['./display-note-cards.component.scss']
})
export class DisplayNoteCardsComponent implements OnInit {

  @Input() NotesList !:any
  constructor(private dialogBox: MatDialog) { }

  ngOnInit(): void {
    console.log(this.NotesList)
  }

  showDialogBox(data:any): void{
    const dialog = this.dialogBox.open(CreateNotesComponent, data);
    dialog.afterClosed().subscribe(result => {
      console.log(`dialogbox: ${result}`);
    });

    dialog.afterClosed().subscribe(result => {
      console.log("dialogbox closed");
    });
  }
}
