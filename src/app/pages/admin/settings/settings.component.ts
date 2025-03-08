import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';
import { User } from '../models/models.admin';

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  showPasswordForm = false;
  passwordForm: FormGroup;

  public User: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    cellphone: ''
  };

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.getInfoUser();
  }

  getInfoUser() {
    var user = sessionStorage.getItem('userId') || "";
    this.adminService.getInfoUser(user).subscribe((res: any) => {
      this.User = res;
      console.log(this.User);
    });
  }

  togglePasswordForm() {
    this.showPasswordForm = true;
  }

  cancelPasswordChange() {
    this.showPasswordForm = false;
    this.passwordForm.reset();
  }

  changePassword() {
    if (this.passwordForm.valid) {
      // Create password change request model
      const passwordData: User = {
        id: this.User.id,
        username: this.User.username,
        email: this.User.email,
        password: this.passwordForm.get('newPassword')?.value,
        cellphone: this.User.cellphone
      };

      // Call your service method to change password
      this.adminService.changePassword(passwordData).subscribe(
        (response) => {
          this.snackBar.open('Contraseña actualizada con éxito', 'Cerrar', {
            duration: 3000
          });
          this.showPasswordForm = false;
          this.passwordForm.reset();
        },
        (error) => {
          this.snackBar.open('Error al cambiar la contraseña', 'Cerrar', {
            duration: 3000
          });
        }
      );
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }
}
