import {Component, OnInit} from '@angular/core';
import {NewServiceService} from '../services/new-service.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  out_inside_new_component = new NewServiceService();

  constructor() {
  }

  ngOnInit() {
    this.out_inside_new_component.update_count();
  }

}
