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
  displayBar=true;
  title:any
  description:any

  constructor(private formBuilder: FormBuilder, private noteService: NoteServiceService) { }

  @Output() AddnoteAutorefresh = new EventEmitter<any>();
  ngOnInit(): void {
    this.addNoteForm = this.formBuilder.group({
      title: null,
      description:null,
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
        console.log(response);
        this.AddnoteAutorefresh.emit(response)
      }, error => {
        console.log(error);
      })
    }
  }
}
