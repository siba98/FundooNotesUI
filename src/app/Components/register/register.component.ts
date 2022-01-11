import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  show: boolean = false;
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private router : Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ShowPassword() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  Register() {
    try {
      this.userService.Register(this.registerForm.value).subscribe((response: any) => {
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
