import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    private _http: HttpClient,
    private _snackBar: MatSnackBar,
  ) {}

  addEmployee(data: any): Observable<any> {
    return this._http.get<any[]>('http://localhost:3000/employees').pipe(
      take(1),
      map((employees) => {
        const maxId = employees.reduce((max, emp) => {
          const idNum = Number(emp.id);
          return isNaN(idNum) ? max : Math.max(max, idNum);
        }, 0);
        const newEmployee = { ...data, id: maxId + 1 };
        return newEmployee;
      }),
      switchMap((newEmployee) =>
        this._http.post('http://localhost:3000/employees', newEmployee),
      ),
    );
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

  openSnackBar(message: string, action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }

  // Login method

  login(username: string, password: string): Observable<boolean> {
    return this._http.get<any[]>('http://localhost:3000/employees').pipe(
      map((users) => {
        const user = users.find(
          (emp) => emp.username === username && emp.password === password,
        );
        return !!users;
      }),
    );
  }
}
