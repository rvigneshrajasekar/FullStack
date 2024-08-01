import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sum : number;
  constructor(private calc : CalculatorService){
    this.sum = calc.getAddtion(10,20);
  }
}
