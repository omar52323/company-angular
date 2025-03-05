// components/navigation/navigation.component.ts
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentsService } from '../components.service';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private componentService: ComponentsService){

  }
  companyName: string = 'Company';
  ngOnInit() {
    // Get company name from sessionStorage
    this.componentService.companyName$.subscribe(name => {
      this.companyName = name;
    });
  }
  toggleMenu() {
    // Implement menu toggle logic
  }
}