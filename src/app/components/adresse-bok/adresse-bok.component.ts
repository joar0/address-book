import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactInformation } from 'src/app/interfaces/ContaxtInformation.interface';

@Component({
  selector: 'app-adresse-bok',
  templateUrl: './adresse-bok.component.html',
  styleUrls: ['./adresse-bok.component.scss']
})
export class AdresseBokComponent implements OnInit {
  
  contacts: ContactInformation[] = [{
    name: 'Jack',
    telephone: '92332231',
    email: 'jack@titanic.us'
  },{
    name: 'Rose',
    telephone: '12333329',
    email: 'rose@titanic.us'
  }];

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required])
  });

  editingIndex: number | null = null;
  editButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  submitContactForm(): void {
    let contactInfo: ContactInformation;
    if(!this.isFormFieldsValid()) {
      return;
    }

    contactInfo = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      telephone: this.contactForm.get('telephone')?.value
    };

    if(this.editingIndex !== null) {
      this.contacts[this.editingIndex].name = contactInfo.name;
      this.contacts[this.editingIndex].telephone = contactInfo.telephone;
      this.contacts[this.editingIndex].email = contactInfo.email;
      this.editingIndex = null;
    } else {
      this.contacts.push(contactInfo)
    }

    this.contactForm.reset();
    console.log(this.contactForm.get('name')?.errors)
    this.editButton = false;
  }

  onEditButtonClicked(index: number): void {
    this.editingIndex = index;
    this.editButton = true;
    const contact: ContactInformation = this.contacts[this.editingIndex];
    this.contactForm.get('name')?.setValue(contact.name);
    this.contactForm.get('telephone')?.setValue(contact.telephone);
    this.contactForm.get('email')?.setValue(contact.email);
  }

  onDeleteButtonClicked(index: number): void {
      this.contacts.splice(index, 1);
  }

  isFormFieldsValid(): boolean {
    if(this.contactForm.get('name')?.hasError('required')) {
      return false;
    }

    if(this.contactForm.get('email')?.hasError('required') || 
      this.contactForm.get('email')?.hasError('pattern')) {
      return false;
    }

    if(this.contactForm.get('telephone')?.hasError('required')) {
      return false;
    }

    return true;
  }
}
