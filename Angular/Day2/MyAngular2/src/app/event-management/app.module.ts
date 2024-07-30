import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { EventFormComponent } from './event-form.component';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
