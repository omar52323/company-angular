import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';  // Add this import
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-brand',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,  // Add this to imports array
  ],
  templateUrl: './new-brand.component.html',
  styleUrl: './new-brand.component.scss'
})
export class NewBrandComponent {
  brandForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.brandForm = this.fb.group({
      nombre: ['', Validators.required],
      totalVentas: ['', Validators.required],
      direccion: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.brandForm.valid) {
      console.log(this.brandForm.value);
      // Here you would typically call a service to save the data
      // After saving, navigate back to the branch list
      this.router.navigate(['/admin/products']);
    }
  }

  onCancel() {
    this.router.navigate(['/admin/products']);
  }
}
