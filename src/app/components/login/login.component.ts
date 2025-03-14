import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ComponentsService } from '../components.service';
import { UserLogin } from '../models/models.components';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
      sessionStorage.removeItem('nameCompany')
  }
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ComponentsService: ComponentsService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login attempt:', this.loginForm.value);
        var user: UserLogin = {
          Username: this.loginForm.controls['username'].value,
          Password: this.loginForm.controls['password'].value
        }


      this.ComponentsService.validateUser(user).subscribe(
        (response) => {
          if(response.id!=0){
            console.log('Login successful:', response);
            sessionStorage.setItem('userId', response.id);
            sessionStorage.setItem('company',JSON.stringify(response.company))
            sessionStorage.setItem('nameCompany',response.company[0].name);
            sessionStorage.setItem('Id_GUID',response.company[0].id_GUID);

            this.ComponentsService.updateCompanyName(response.company[0].name);
            // Redirect to admin dashboard or another page
            this.router.navigate(['/admin']);
          }
         
        },
        (error) => {
          console.error('Login failed:', error.error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Usuario o contraseña incorrectos ",
          })
          // Handle login failure (e.g., show an error message)
        }
      );
      // Here you would typically call an authentication service
      // For now, we'll just log the form values and navigate
      
    }
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
