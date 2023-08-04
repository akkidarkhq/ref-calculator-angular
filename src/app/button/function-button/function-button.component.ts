import { Component } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-function-button',
  templateUrl: './function-button.component.html',
  styleUrls: ['./function-button.component.css']
})
export class FunctionButtonComponent extends ButtonComponent {

    override ngOnInit(): void {
      
    }

    onClickHandler(value:any){
      console.log("fn button component called with value",value);
       this.onClick.emit(value);
    }
}
