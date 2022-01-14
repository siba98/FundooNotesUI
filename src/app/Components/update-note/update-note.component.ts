import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  updateNoteForm!: FormGroup;
  submitted = false;
  title:any;
  description:any;
  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.updateNoteForm = this.formBuilder.group({
      title: this.data.title,
      description: this.data.description,
    })
  }

  get f() { return this.updateNoteForm.controls;}

  onSubmit(){
    this.submitted = true;
    if(this.updateNoteForm.valid){
      let data={
        title: this.updateNoteForm.value.title,
        description: this.updateNoteForm.value.description,
      }
      this.noteService.Updatenote(data).subscribe((response:any)=>{
        console.log(response);
      }, error => {
        console.log(error);
      })
    }
    this.dialogRef.close()
  }
  // closeDialog(){this.dialogRef.close()}
}
