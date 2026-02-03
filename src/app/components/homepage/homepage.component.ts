import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  features = [
    {
      step: 1,
      title: 'Check Eligibility',
      items: ['Add Travellers', 'Upload Passport', 'Choose Visa type'],
      cta: 'Check Now',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'
    },
    {
      step: 2,
      title: 'Check Documents Requirements',
      items: ['Check visa requirements', 'Choose visa type', 'Fill in details & upload documents'],
      cta: 'Apply Now',
      image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2'
    },
    {
      step: 3,
      title: 'Book Appointment & Complete Biometrics',
      items: ['Select a visa centre or doorstep service', 'Visit the centre to submit biometrics', 'Receive your e-Visa on your registered email'],
      cta: 'Book Now',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3'
    }
  ];
}


