import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ContactFormData, EmailService } from '../../services/email.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgIf
  ],
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = false;

    if (this.contactForm.valid) {
      this.loading = true;

      const formData: ContactFormData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      this.emailService.sendContactForm(formData).subscribe({
        next: (response) => {
          console.log('Formulario enviado correctamente:', response);
          this.success = true;
          this.contactForm.reset();
          this.submitted = false;
          this.loading = false;

          // Reset success message after 5 seconds
          setTimeout(() => {
            this.success = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Error al enviar el formulario:', error);
          this.error = true;
          this.loading = false;
        }
      });
    }
  }

  get f() { return this.contactForm.controls; }
}
