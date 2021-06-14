import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Contact';
import {MatDialog} from '@angular/material/dialog'
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  contacts: Contact[];
  constructor(public dialog:MatDialog) {
    this.contacts = [
      {
        id : 1,
        name: 'Divyanshu Shula',
        phone_number: '7458938805',
        editing : false
      },
    ];
  }

  ngOnInit(): void {}

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
  deleteContact(contact: Contact) {
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }
  updateContactEd(contact: Contact) {
    let index = this.contacts.indexOf(contact);
    this.contacts[index].editing = !this.contacts[index].editing;
  }
  updateContactInfo(data: any) {
    let index = this.contacts.indexOf(data.contact);
    this.contacts[index].name = data.updatedName;
    this.contacts[index].phone_number = data.updatedNumber;
    this.contacts[index].editing = false;
  }

  openDialog(id:number): void {
    let index = this.contacts.findIndex((item)=>item.id===id);
    let dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '250px',
      disableClose : true,
      data : {index:index,name:this.contacts[index].name,phone_number:this.contacts[index].phone_number}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.contacts[result.index].name=result.name;
      this.contacts[result.index].phone_number=result.phone_number;
    });
  }

}

