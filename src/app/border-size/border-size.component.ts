import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ColorData} from '../color-data';

@Component({
  selector: 'app-border-size',
  templateUrl: './border-size.component.html',
  styleUrls: ['./border-size.component.css']
})
export class BorderSizeComponent implements OnInit {
  private colors: ColorData[];
  constructor(private dialogRef: MatDialogRef<BorderSizeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this.data);
    this.colors = this.data.colors;
    console.log(this.colors[0].id);
  }

  closeCustomFunction() {
    console.log('close...');
    this.dialogRef.close('test');
  }
}
