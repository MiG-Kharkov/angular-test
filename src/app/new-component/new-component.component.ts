import {Component, OnInit} from '@angular/core';
import {NewServiceService} from '../services/new-service.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private out_inside_new_component: NewServiceService) {
  }

  ngOnInit() {
    this.out_inside_new_component.update_count();
  }

}
