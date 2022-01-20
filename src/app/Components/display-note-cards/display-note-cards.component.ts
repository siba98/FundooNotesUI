import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note-cards',
  templateUrl: './display-note-cards.component.html',
  styleUrls: ['./display-note-cards.component.scss']
})
export class DisplayNoteCardsComponent implements OnInit {
  title:any
  description:any
  @Input() NotesList:any
  constructor(public dialogBox: MatDialog, private noteService: NoteServiceService) { }

  ngOnInit(): void {
    console.log(this.NotesList)
  }

  showDialogBox(noteDetails:any): void {
    const dialogRef = this.dialogBox.open(UpdateNoteComponent, {
      width: '600px',
      data:noteDetails,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
      this.description = result;
    });
  }

  PinNote(noteDetails:any) {
    try {
      let noteId = noteDetails.noteId;
      console.log(noteId);
      this.noteService.PinNote(noteId).subscribe((response: any) => {
        console.log(response);
      });
    }
    catch (error) {
      console.log(error);
    }
  }
}
