import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  show: boolean = false;
  forgotForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  Forgot() {
    try {
      this.userService.Forgot(this.forgotForm.value).subscribe((response: any) => {
        if (response.status)
          console.log("Link sent for reseting the password", response);
      })
    }
    catch (error) {
      console.log(error);
    };
  }
}
