import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-stay-in-touch',
  templateUrl: './stay-in-touch.component.html',
  styleUrls: ['./stay-in-touch.component.scss']
})
export class StayInTouchComponent implements OnInit {
  contactForm!: FormGroup;

  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    emailjs.init('HopAu3ctR1DKDrAVf');

    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    emailjs.send('service_fux8f6t', 'template_vs87kqr', this.contactForm.value)
      .then(() => {
        this.message = 'Message sent successfully!';
        this.messageType = 'success';
        this.contactForm.reset();

        setTimeout(() => {
          this.message = '';
          this.messageType = '';
        }, 4000);
      })
      .catch(err => {
        this.message = 'Failed to send message. Please try again.';
        this.messageType = 'error';
        console.error(err);
      });
  }
}
