import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

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
          console.log("Login Successful", response);
      })
    }
    catch (error) {
      console.log(error);
    };
  }
}
