import {LoginComponent} from './features/login/login.component';
import {Component, OnInit} from '@angular/core';
import {NewServiceService} from './services/new-service.service';
import {FormBuilder} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {BorderSizeComponent} from './border-size/border-size.component';
import {ColorData} from './color-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  loginDialogRef: MatDialogRef<LoginComponent>;

  email = 'test@email.com';

  isChecked = true;
  colors: ColorData[] = [
    {id: 3, name: 'red'},
    {id: 2, name: 'green'},
    {id: 1, name: 'blue'}
  ];
  selected = 1;
  public outPut;
  public divFontSize = 3;
  private dialogRef: MatDialogRef<BorderSizeComponent>;

  constructor(
    private serviceData: NewServiceService,
    public fb: FormBuilder,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.serviceData.update_count(5);
  }

  checkToNotChech() {
    this.isChecked = !this.isChecked;
  }

  openDialog() {
    this.dialogRef = this.dialog.open(BorderSizeComponent, {data: {colors: this.colors}});

    this.dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result === 'Increase') {
          this.divFontSize += 1;
        } else {
          this.divFontSize -= 1;
        }
      }
    );
  }

  public showLoginDialog() {
    this.loginDialogRef = this.dialog.open(LoginComponent, {
      height: '300px',
      width: '400px',
      data: {minPasswordLength: 2},
    });

    this.loginDialogRef.afterClosed().subscribe(result => {
      console.log(`Result: ${result}`);
    });

  }
}
