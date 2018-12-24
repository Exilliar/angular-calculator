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
    // console.log(number);
    this.addToCalc(number);
    return number;
  }
  clickSymbol(symbol)// sends the symbl that was clicked to the server
  {
    // console.log(symbol);
    this.addToCalc(symbol);
    return symbol;
  }

  addToCalc(toAdd)
  {
    let calculation = (<HTMLInputElement>document.getElementById("outputResult")).value;
    if(toAdd != "=")
    {
      calculation += toAdd;
    }
    else
    {
      calculation = "";
    }
    (<HTMLInputElement>document.getElementById("outputResult")).value = calculation;
    // console.log(calculation);
  }
}