import { Component } from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  employee = { id: '', name: '', salary: '' };

  saveEmployee() {
    console.log('Save:', this.employee);
    // Implement save logic
  }

  updateEmployee() {
    console.log('Update:', this.employee);
    // Implement update logic
  }

  deleteEmployee() {
    console.log('Delete:', this.employee);
    // Implement delete logic
  }
}
