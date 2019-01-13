import {Component, OnInit} from '@angular/core';
import {NewServiceService} from './services/new-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  isChecked = true;
  colors = [
    {id: 1, name: 'red'},
    {id: 2, name: 'green'},
    {id: 3, name: 'blue'}
  ];
  selected = 2;
  public outPut;
  public loginForm: FormGroup;

  constructor(
    public serviceData: NewServiceService,
    public fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.serviceData.update_count(5);
    this.loginForm = this.fb.group({
      name: ['test', Validators.maxLength(6)],
      email: [''],
      password: ['']
    });
  }

  checkToNotChech() {
    this.outPut = this.loginForm.controls.name.value;
    this.loginForm.controls.name.setValue('test1');
    this.isChecked = !this.isChecked;
  }

  arrayFunction() {
    const test = this.colors.filter(a => a.id > 1);
    console.log(test);
    this.colors = test;
  }
}
