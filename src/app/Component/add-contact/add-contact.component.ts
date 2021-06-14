import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/Contact';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactForm = this.fb.group({
        name : ['',Validators.required],
        phone_number : ['',Validators.required]
  });
  @Input() contacts : Contact[]
  @Output() addContact : EventEmitter<Contact> = new EventEmitter();
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  findId(contacts:Contact[]){
    let id = 1;
    for(let i=0;i<contacts.length;i++){
      if(contacts[i].id>id){
        id=contacts[i].id;
      }
    }
    return id+1;
  }

  onSubmit(){
     let contact = {
       id : this.findId(this.contacts),
       name : this.contactForm.value.name,
       phone_number : this.contactForm.value.phone_number,
       editing : false
     }
      this.addContact.emit(contact);
      this.contactForm.patchValue({
           name : "",
           phone_number : ""
      });
      
  }

}
