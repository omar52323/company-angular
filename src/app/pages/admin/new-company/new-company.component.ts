import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import  Company  from '../admin.service';
@Component({
  selector: 'app-new-company',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './new-company.component.html',
  styleUrl: './new-company.component.scss'
})
export class NewCompanyComponent {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AdminService: AdminService
  ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      adminName: ['', Validators.required],
      url: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.companyForm.valid) {
      console.log(this.companyForm.value);
      var company : Company={
        Name:this.companyForm.controls['name'].value,
        Description: this.companyForm.controls['description'].value,
        Direccion_Prinicipal: this.companyForm.controls['address'].value,
        Nombre_Administrador: this.companyForm.controls['adminName'].value,
        OwnerId: sessionStorage.getItem('userId') || "",
      }

      this.AdminService.registerCompany(company).subscribe((res:any)=>{
        console.log(res);
      });
      // Here you would typically call a service to save the data
      // After saving, navigate back to the companies list
      this.router.navigate(['/admin/companies']);
    }
  }

  onCancel() {
    this.router.navigate(['/admin/companies']);
  }
}
