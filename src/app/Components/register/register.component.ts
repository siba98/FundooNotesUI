import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { FormBuilder, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  show: boolean = false;
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    }, {
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
        if (response.Status)
          console.log("Registration Successful", response);
      })
    }
    catch (error) {
      console.log(error);
    };

  }
}
