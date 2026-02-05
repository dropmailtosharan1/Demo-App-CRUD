import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviBarComponent } from './employee-data/navi-bar/navi-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet, NaviBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Demo-App';
}