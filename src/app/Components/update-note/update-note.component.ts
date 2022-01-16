import { Component, OnInit, Inject,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  updateNoteForm!: FormGroup;
  submitted = false;
  noteId!: any;
  title!: any;
  description!: any;

  @Output() AddnoteAutorefresh = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private noteService: NoteServiceService) {
    this.title = data.title;
    this.noteId = data.noteId;
    console.log(data)
    this.description = data.description;
  }
  ngOnInit(): void {
    this.updateNoteForm = this.formBuilder.group({
      noteId: this.noteId,
      title: this.title,
      description: this.description,
    })
  }

  onSubmit() {
    // try{
    //   console.log(this.updateNoteForm);
    //   this.noteService.Updatenote(this.updateNoteForm.value).subscribe((response: any) => {
    //     if(response.status){
    //       console.log(response.message);
    //     }
    //   })
    // }
    // catch(error){
    //   console.log(error);
    // }
    this.submitted = true;
    if (this.updateNoteForm.valid) {
      let data = {
        noteId: this.updateNoteForm.value.noteId,
        title: this.updateNoteForm.value.title,
        description: this.updateNoteForm.value.description,
      }
      this.noteService.Updatenote(data).subscribe((response: any) => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }
    this.dialogRef.close()
  }
}
