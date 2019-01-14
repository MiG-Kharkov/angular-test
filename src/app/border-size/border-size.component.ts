import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-border-size',
  templateUrl: './border-size.component.html',
  styleUrls: ['./border-size.component.css']
})
export class BorderSizeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BorderSizeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  closeCustomFunction() {
    console.log('close...');
    this.dialogRef.close('test');
  }
}
