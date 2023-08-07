export default class CalculatorModel{
    functionBtns:{value:string,type:string}[]=[{type:'FUNCTION',value:"AC"},{type:'FUNCTION',value:"DEL"},{type:'FUNCTION',value:"UNDO"},{type:'FUNCTION',value:"REDO"}];

    numericalBtns:{value:string,type:string}[]=[{type:'NUMERICAL',value:'7'},{type:'NUMERICAL',value:'8'},{type:'NUMERICAL',value:'9'},{type:'NUMERICAL',value:'4'},{type:'NUMERICAL',value:'5'},{type:'NUMERICAL',value:'6'},{type:'NUMERICAL',value:'1'},{type:'NUMERICAL',value:'2'},{type:'NUMERICAL',value:'3'},{type:'NUMERICAL',value:'0'},{type:'NUMERICAL',value:'.'}]

    operationBtns:{value:string,type:string,label:string}[]=[{type:'OPERATOR',value:'ADDITION',label:'+'},{type:'OPERATOR',value:'SUBTRACT',label:'-'},
    
    {type:'OPERATOR',value:'MULTIPLY',label:'x'},{type:'OPERATOR',value:'DIVIDE',label:'÷'},
    {type:'OPERATOR',value:'EQUALS',label:'='}];
}