import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  show: boolean = false;
  resetForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private snackBar: MatSnackBar,private router : Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ShowPassword() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  Reset() {
    try {
      this.userService.Reset(this.resetForm.value).subscribe((response: any) => {
        if (response.status)
        this.router.navigate(['/login'])
        this.snackBar.open(response.message,'',{duration :4000})
      })
    }
    catch (error) {
      console.log(error);
    };
  }

}
