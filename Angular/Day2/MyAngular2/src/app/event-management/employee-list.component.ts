import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = [
    { id: '1', name: 'John Doe', salary: '50,000' },
    { id: '2', name: 'Jane Smith', salary: '60,000' }
  ];
}
