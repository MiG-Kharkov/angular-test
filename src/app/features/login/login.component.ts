import { Component, Inject, OnInit } from '@angular/core';
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loginDialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
  ) {
  }

  public ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(this.data.minPasswordLength)
        ]
      ]
    });
  }

  public closeLoginDialog() {
    // some custom error-prone code
    if (this.loginForm.controls.email.hasError('required')) {
      return;
    }
    this.loginDialogRef.close(this.loginForm.controls.email.value);
  }
}
