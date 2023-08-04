import { Component } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.css']
})

export class OperationButtonComponent extends ButtonComponent {
  
  
  onClickHandler(value:any){
    console.log("operation button clicked",value);
  }

}
