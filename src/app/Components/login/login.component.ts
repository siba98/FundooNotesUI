import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private router : Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  Login() {
    try {
      this.userService.Login(this.loginForm.value).subscribe((response: any) => {
        if (response.status)
        // console.log("login success", response);
        localStorage.setItem("token",response.Token)
        this.router.navigate(['/dashboard'])
        this.snackBar.open(response.message,'',{duration :4000})
      })
    }
    catch (error) {
      console.log(error);
    };
  }
}
