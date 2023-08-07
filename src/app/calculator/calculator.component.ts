import { Component,Input,Attribute } from '@angular/core';
import CalculatorModel from './calculator.model';
import { BackendService } from '../Services/backendServices/backend.service';
import { Stack } from './stacks';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers:[BackendService,Stack]
})

export class CalculatorComponent {


 

  Id:string="akki";
  
  value:string = '';
  displayValue:string='';
  
  expressionStack:any=[];
  label:any;

  constructor(@Attribute('id') public parentId :string,private _backendService:BackendService,private _stack:Stack){
    
  }
  
  private model = new CalculatorModel();

  functionBtn  = this.model.functionBtns;
  operationBtn = this.model.operationBtns;
  numericalBtn = this.model.numericalBtns;

  functionButtonClickHandler(key:any){
    console.log(this.parentId)
    console.log(key.value+" in calc comp fnbtn")
      if(key.value=='AC'){
            this.setValue('');
            this.setDisplay('0')
            console.log(this.expressionStack,this);
        }
      else if(key.value=='DEL') {
       console.log(this.expressionStack,"after pop")
       let exp = this.getDisplay()+"";
        this.setValue(exp.slice(0,exp.length-1));
      }else if(key.value=='UNDO'){
        console.log("undo called")
        this.setValue(this._stack.undoStack());
      }else if(key.value=='REDO'){
        this.setValue(this._stack.redoStack());
      }
  }

  operationButtonClickHandler(key:any){
    console.log(key.value+" in op btn click handelr")
    this.pushNumber();
   
      this.setValue('');
      if (key.value == 'EQUALS') {
          this.calculate();
          this.expressionStack=[];
      }
      else if (key.value=='ADDITION')  {
        console.log("add caled")
        this.value+='+';
        this.expressionStack.push({type:"OPERATOR",value:"ADDITION"});
        this.setValue('');
      }else if (key.value=='SUBTRACT'){
        this.value+='-';
        this.expressionStack.push({type:"OPERATOR",value:"SUBTRACT"});
        this.setValue('');
      }else if(key.value=='MULTIPLY') {
        this.value+='x';
        this.expressionStack.push({type:"OPERATOR",value:"MULTIPLY"});
        this.setValue('');
      }else if(key.value=='DIVIDE') {
        this.value+='&divide';
        this.expressionStack.push({type:"OPERATOR",value:"DIVIDE"});
        this.setValue('');
    }
  }

  numericalButtonClickHandler(key:any){
    console.log("numericalButtonClickHandler")
    this.value = this.getValue();
    this.value += key.value; 
    this.setValue(this.value);
    console.log(this.expressionStack,"expressionStack")
  }

  calculate(){
    this._backendService.postData(this.expressionStack).subscribe((response:any)=>{
       console.log(response);
      const res = response;
       if(typeof response=== 'number'){
         console.log(typeof response);
         this.setValue(res);
         this._stack.setStack(res);
       }else if(typeof response == 'object'){
         console.log(typeof response);
         this.setDisplay("Access Denied")
       }
       // this.setValue(response);
       // this._stack.setStack(response);
       // this.checkResponse(response);
     })
     this._stack.getStack();
    };
    pushNumber(){
      this.expressionStack.push({type:"NUMBER",value:this.getValue()})
    }

    setValue(val:string){
      this.value = val;
      this.setDisplay(this.value);
      console.log(this.value+ "from setter")
    }
  
    getValue(){
      this.value = this.getDisplay()
      console.log(this.value+" from getter");
      return this.value;
    }
  
    setDisplay(value:string){ 
      this.displayValue = value;
    }
  
    getDisplay(){
     return this.displayValue;
    }
  
    checkResponse(res:any){
    const text = res;
    const msg = text[0].message; 
    console.log(msg == 'Please Login')
    if(msg == 'Please Login'){
      this.setDisplay(msg)
    }else{
      return;
    }    
    }
  
}
