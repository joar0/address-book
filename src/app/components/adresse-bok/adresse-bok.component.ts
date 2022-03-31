import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactInformation } from 'src/app/interfaces/ContaxtInformation.interface';

@Component({
  selector: 'app-adresse-bok',
  templateUrl: './adresse-bok.component.html',
  styleUrls: ['./adresse-bok.component.scss']
})
export class AdresseBokComponent implements OnInit {
  
  contacts: ContactInformation[] = [{
    name: 'temp',
    telephone: 'temp',
    email: 'temp'
  },{
    name: 'temp',
    telephone: 'temp',
    email: 'temp'
  }];

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl('')
  });

  editingIndex: number | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  submitContactForm(): void {
    const contactInfo: ContactInformation = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      telephone: this.contactForm.get('telephone')?.value
    };

    if(this.editingIndex !== null) {
      this.contacts[this.editingIndex].name = contactInfo.name;
      this.contacts[this.editingIndex].telephone = contactInfo.telephone
      this.contacts[this.editingIndex].email = contactInfo.email;
      this.editingIndex = null;
    } else {
      this.contacts.push(contactInfo)
    }

    this.contactForm.reset();
  }

  onEditButtonClicked(index: number): void {
    this.editingIndex = index;
    
    const contact: ContactInformation = this.contacts[this.editingIndex];
    this.contactForm.get('name')?.setValue(contact.name);
    this.contactForm.get('telephone')?.setValue(contact.telephone);
    this.contactForm.get('email')?.setValue(contact.email);
  }

  onDeleteButtonClicked(index: number): void {
      this.contacts.splice(index, 1);
  }

}
