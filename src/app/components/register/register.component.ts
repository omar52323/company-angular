import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private componentService: ComponentsService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration form submitted:', this.registerForm.value);

        var user ={
          "username": this.registerForm.value.username,
          "cellphone": this.registerForm.value.phone,
          "email": this.registerForm.value.email,
          "password": this.registerForm.value.password,
        }

      this.componentService.createUser(user).subscribe(
        (response) => {
          console.log('User created successfully:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
      
    }
  }

  // Helper method to get form controls (useful for template)
  get f() {
    return this.registerForm.controls;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
