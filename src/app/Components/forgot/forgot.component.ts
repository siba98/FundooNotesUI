import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  show: boolean = false;
  forgotForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private snackBar: MatSnackBar,private router : Router) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  Forgot() {
    try {
      this.userService.Forgot(this.forgotForm.value).subscribe((response: any) => {
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
