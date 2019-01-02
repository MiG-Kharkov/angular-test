import {Component, OnInit} from '@angular/core';
import {NewServiceService} from './services/new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-project';
  // ser_count;
  // out_info;
  // names;
  serviceData;

  constructor(
    // private serviceData: NewServiceService
  ) {
    this.serviceData = new NewServiceService();
    // serviceData.update_count();
    // serviceData.update_count();
    // this.ser_count = serviceData.count;
    // this.out_info = serviceData.add_sq(10);
    // this.names = serviceData.names;
  }

  ngOnInit(): void {
    this.serviceData.update_count(13);
  }

  onClic($event) {
    $event.stopPropagation();
    console.log('the button clicked', $event);
  }

  onDivClic() {
    console.log('Div click as well');
  }

  onKeyUp(email) {
    console.log(email);
  }
}
