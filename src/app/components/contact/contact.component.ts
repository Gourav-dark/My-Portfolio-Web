import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private fb=inject(FormBuilder);
  private contactService=inject(ContactService);
  contactForm=this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone:['',[Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]],
    message:['']
  });
  get name() {
    return this.contactForm.controls['name'];
  }
  get email() {
    return this.contactForm.controls['email'];
  }
  get phone(){
    return this.contactForm.controls['phone'];
  }
  get message(){
    return this.contactForm.controls['message'];
  }
  contactFuction(){
    console.log(this.contactForm);
    const postData={...this.contactForm.value };
  }
}
