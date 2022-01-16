import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  addNoteForm!: FormGroup;
  submitted = false;
  displayBar = true;
  title: any
  description: any

  constructor(private formBuilder: FormBuilder, private noteService: NoteServiceService) { }

  @Output() AddnoteAutorefresh = new EventEmitter<any>();
  ngOnInit(): void {
    this.addNoteForm = this.formBuilder.group({
      title: null,
      description: null,
    })
  }

  onSubmit() {
    try {
      this.openbar()
      this.noteService.Addnote(this.addNoteForm.value).subscribe((response: any) => {
        if (response.status) {
          console.log(response.message);
        }
      })
    }
    catch (error) {
      console.log(error);
    };
  }
  openbar() {
    this.displayBar ? this.displayBar = false : this.displayBar = true
  };
}

