import {Component, OnInit} from '@angular/core';
import {NewServiceService} from './services/new-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'my-project';

  email = 'test@email.com';
  isChecked = true;
  colors = [
    {id: 1, name: 'red'},
    {id: 2, name: 'green'},
    {id: 3, name: 'blue'}
  ];
  color = 2;

  constructor(
    private serviceData: NewServiceService
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
}
