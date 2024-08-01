import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sum : number;
  sub : number;
  constructor(private calc: CalculatorService){
    this.sum = calc.getAddtion(10,20);
    this.sub=calc.getSubtraction(20,10);
  }
}
