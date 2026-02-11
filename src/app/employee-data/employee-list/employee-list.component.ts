import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  empForm!: FormGroup;
  
  // ✅ FIXED: Make both injections OPTIONAL for standalone usage
  private _fb = inject(FormBuilder);
  private _empService = inject(EmployeeService);
  private _dialogRef = inject(MatDialogRef<EmployeeListComponent>, { optional: true });
  public data = inject(MAT_DIALOG_DATA, { optional: true });

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  constructor() {
    this.empForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      education: ['', Validators.required],
      company: ['', Validators.required],
      experience: ['', Validators.required],
      package: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // ✅ Safe data patching (data might be undefined outside dialog)
    if (this.data) {
      this.empForm.patchValue(this.data);
    }
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data?.id) {
        // Update existing employee
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._empService.openSnackBar('Employee detail updated!');
              this._dialogRef?.close(true); // Safe: only closes if dialog exists
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        // Add new employee
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._empService.openSnackBar('Employee added successfully');
            this._dialogRef?.close(true); // Safe: only closes if dialog exists
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
