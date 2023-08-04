import { Component } from '@angular/core';
import CalculatorModel from './calculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  Id:string="akki";

  displayValue:string='';

  label:any;

  private model = new CalculatorModel();

  functionBtn  = this.model.functionBtns;
  operationBtn = this.model.operationBtns;
  numericalBtn = this.model.numericalBtns;

  functionButtonClickHandler(key:object){
    console.log("function btn click handler called from calc",key);
  }

  operationButtonClickHandler(key:object){
    console.log("operation button clicked from calc component",key);
    var abc = key;
  }

  numericalButtonClickHandler(key:any){
    console.log("operation button clicked from calc component",key);
    this.displayValue+=key.value;
  }
  
}
