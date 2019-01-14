import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public matcher = new LoginErrorStateMatcher();

  constructor(
    private loginDialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder
  ) {}

  public ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        '', [
          Validators.required,
          Validators.email,
        ]
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

}
