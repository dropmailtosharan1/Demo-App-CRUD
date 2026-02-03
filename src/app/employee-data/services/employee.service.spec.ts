import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('assigns a sequential numeric id when adding an employee', () => {
    service.addEmployee({ firstName: 'New' }).subscribe();

    const reqGet = httpMock.expectOne('http://localhost:3000/employees');
    expect(reqGet.request.method).toBe('GET');

    // existing employees have string ids; the service should compute max numeric id and add +1
    reqGet.flush([
      { id: '3' },
      { id: '7' },
      { id: '5' },
    ]);

    const reqPost = httpMock.expectOne('http://localhost:3000/employees');
    expect(reqPost.request.method).toBe('POST');
    expect(reqPost.request.body.id).toBe(8); // max(3,7,5) + 1 = 8

    reqPost.flush({});
  });
});
