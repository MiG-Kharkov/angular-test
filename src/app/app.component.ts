import { Component, OnInit } from '@angular/core';
import { NewServiceService } from './services/new-service.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from './features/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  loginDialogRef: MatDialogRef<LoginComponent>;

  email = 'test@email.com';
  isChecked = true;

  constructor(
    private serviceData: NewServiceService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.serviceData.update_count(5);
  }

  onClic($event) {
    $event.stopPropagation();
    console.log('the button clicked', $event);
  }

  onDivClic() {
    console.log('Div click as well');
  }

  onKeyUp() {
    console.log(this.email);
  }

  checkToNotChech() {
    this.isChecked = !this.isChecked;
  }

  public showLoginDialog() {
    this.loginDialogRef = this.dialog.open(LoginComponent, {
      height: '300px',
      width: '400px',
    });

    this.loginDialogRef.afterClosed().subscribe(result => {
      console.log(`Result: ${result}`);
    });

  }
}
