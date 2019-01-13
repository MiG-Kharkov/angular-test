import {Component, OnInit} from '@angular/core';
import {NewServiceService} from './services/new-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  isChecked = true;
  colors = [
    {id: 3, name: 'red'},
    {id: 2, name: 'green'},
    {id: 1, name: 'blue'}
  ];
  selected = 1;
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
      id: ['', [Validators.pattern('^[0-9]*$'), Validators.required]]
    });
  }

  checkToNotChech() {
    this.outPut = this.loginForm.controls.name.value;
    this.loginForm.controls.name.setValue('test1');
    this.isChecked = !this.isChecked;
  }

  arrayFunction() {
    this.colors.push({id: this.loginForm.controls.id.value, name: this.loginForm.controls.name.value});
  }
}
