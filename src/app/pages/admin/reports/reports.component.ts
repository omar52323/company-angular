import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

interface Sale {
  date: Date;
  product: string;
  amount: number;
}

interface Branch {
  name: string;
  totalSales: number;
  sales: Sale[];
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  startDate: Date | null = null;
  endDate: Date | null = null;
  displayedColumns: string[] = ['date', 'product', 'amount'];
  
  branches: Branch[] = [
    {
      name: 'Branch 1',
      totalSales: 15000,
      sales: [
        { date: new Date('2024-01-01'), product: 'Product A', amount: 500 },
        { date: new Date('2024-01-02'), product: 'Product B', amount: 750 },
        // Add more sample data as needed
      ]
    },
    {
      name: 'Branch 2',
      totalSales: 12000,
      sales: [
        { date: new Date('2024-01-01'), product: 'Product C', amount: 300 },
        { date: new Date('2024-01-02'), product: 'Product D', amount: 450 },
        // Add more sample data as needed
      ]
    }
  ];

  constructor() {}

  ngOnInit() {
    // Initialize with current month's data
    const today = new Date();
    this.startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    this.endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  }

  filterSales() {
    if (this.startDate && this.endDate) {
      console.log('Filtering sales between:', this.startDate, 'and', this.endDate);
      // Here you would typically call a service to fetch filtered data
      // For now, we'll just log the date range
    }
  }
}
