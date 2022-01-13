import { Component, OnInit } from '@angular/core';
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
  displayBar=true;

  constructor(private formBuilder: FormBuilder, private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.addNoteForm = this.formBuilder.group({
      title: [''],
      description:[''],
    })
  }
  get f() { return this.addNoteForm.controls;}
  openbar(){
    this.displayBar=false;
  }
  onSubmit(){
    this.submitted = true;
    if(this.addNoteForm.valid){
      let data={
        title: this.addNoteForm.value.title,
        description: this.addNoteForm.value.description,
      }
      this.noteService.Addnote(data).subscribe((response:any)=>{
        console.log(response)
      })
    }
  }
}
