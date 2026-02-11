import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup
  error = '';

   constructor(
    private fb: FormBuilder,
    private authService: EmployeeService,
    private router: Router,
  ) {
    this.signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  }


  onSubmit() {
    if (this.signupForm.invalid) return;

    this.authService.register(this.signupForm.value).subscribe({
      next: () => {
        alert('Registration Successful ✅');
        this.router.navigate(['/login']);
      },
      error: () => {
        this.error = 'User already exists';
      },
    });
  }
}
