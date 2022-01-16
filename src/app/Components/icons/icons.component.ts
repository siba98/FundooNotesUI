import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any
  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
    // console.log(this.noteObject)
  }
  

  ArchiveNote() {
    try {
      console.log(this.noteObject)
      console.log("Note Archived");
      let noteId = this.noteObject.noteId;
      this.noteService.ArchiveNote(noteId).subscribe((response: any) => {
        console.log(response);
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  TrashNote() {
    try {
      let noteId = this.noteObject.noteId;
      console.log(noteId);
      this.noteService.TrashNote(noteId).subscribe((response: any) => {
        console.log(response);
      });
    }
    catch (error) {
      console.log(error);
    }
  }
}
