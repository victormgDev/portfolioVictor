// Importación de módulos y servicios necesarios
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormData, EmailService } from '../../services/email.service';  // Importación del servicio de email
import { NgClass, NgIf } from '@angular/common';  // Importación de directivas necesarias para el template

@Component({
  // Decorador @Component que define el selector, la plantilla y los estilos del componente
  selector: 'app-contact',  // Define el nombre del componente en el HTML
  templateUrl: './contact.component.html',  // Define la ruta del archivo de plantilla HTML
  imports: [
    NgClass,  // Directiva para gestionar clases dinámicamente
    ReactiveFormsModule,  // Importación del módulo para trabajar con formularios reactivos
    NgIf  // Directiva para gestionar condiciones de visualización
  ],
  styleUrl: './contact.component.css'  // Ruta del archivo de estilos CSS
})
export class ContactComponent {
  // Propiedades del componente
  contactForm: FormGroup;  // Objeto de tipo FormGroup que representa el formulario reactivo
  submitted = false;  // Bandera para verificar si el formulario ha sido enviado
  success = false;  // Bandera para manejar el estado de éxito del formulario
  error = false;  // Bandera para manejar el estado de error
  loading = false;  // Bandera para mostrar el estado de carga mientras se envía el formulario

  // Constructor que inyecta el servicio FormBuilder y EmailService
  constructor(
    private fb: FormBuilder,  // Inyecta FormBuilder para crear el formulario reactivo
    private emailService: EmailService  // Inyecta el servicio de email para enviar el formulario
  ) {
    // Inicialización del formulario reactivo con sus controles y validadores
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  // Nombre del usuario, requerido y con mínimo de 3 caracteres
      email: ['', [Validators.required, Validators.email]],  // Email, requerido y con formato de correo electrónico
      subject: ['', Validators.required],  // Asunto, requerido
      message: ['', [Validators.required, Validators.minLength(10)]]  // Mensaje, requerido y con mínimo de 10 caracteres
    });
  }

  // Método que se ejecuta cuando el formulario es enviado
  onSubmit() {
    this.submitted = true;  // Marca el formulario como enviado
    this.error = false;  // Resetea la bandera de error

    // Si el formulario es válido, se procede a enviarlo
    if (this.contactForm.valid) {
      this.loading = true;  // Marca el formulario como cargando

      // Se prepara el objeto con los datos del formulario para enviarlo al servicio de email
      const formData: ContactFormData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      // Llamada al servicio para enviar el formulario
      this.emailService.sendContactForm(formData).subscribe({
        next: (response) => {  // Si la respuesta es exitosa
          console.log('Formulario enviado correctamente:', response);  // Muestra el mensaje de éxito en la consola
          this.success = true;  // Marca el estado como exitoso
          this.contactForm.reset();  // Resetea el formulario
          this.submitted = false;  // Resetea la bandera de envío
          this.loading = false;  // Resetea la bandera de carga

          // Resetea el mensaje de éxito después de 5 segundos
          setTimeout(() => {
            this.success = false;  // Desactiva el mensaje de éxito
          }, 5000);
        },
        error: (error) => {  // Si ocurre un error en el envío
          console.error('Error al enviar el formulario:', error);  // Muestra el error en la consola
          this.error = true;  // Marca el estado como error
          this.loading = false;  // Resetea la bandera de carga
        }
      });
    }
  }

  // Getter para acceder a los controles del formulario de manera más sencilla
  get f() { return this.contactForm.controls; }
}
