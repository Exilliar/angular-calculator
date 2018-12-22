import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickNumber(number)// sends the number that was clicked to the server
  {
    console.log(number);
    return number;
  }
  clickSymbol(symbol)// sends the symbl that was clicked to the server
  {
    console.log(symbol);
    return symbol;
  }

}
