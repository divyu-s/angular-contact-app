import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
    name = new FormControl('')
    phoneNumber = new FormControl('')
  constructor( public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.name.setValue(data.name);
      this.phoneNumber.setValue(data.phone_number);
     }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
