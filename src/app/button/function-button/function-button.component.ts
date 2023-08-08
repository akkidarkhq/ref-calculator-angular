import { Component,Input } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-function-button',
  templateUrl: './function-button.component.html',
  styleUrls: ['./function-button.component.css']
})
export class FunctionButtonComponent extends ButtonComponent {

  @Input() override parentId:string="";
  elementId:string="";

  override ngOnInit(): void {
      super.ngOnInit();
      this.elementId=this.parentId;
  }


    onClickHandler(key:any){
      console.log("fn button component called with value" + key);
       this.onClick.emit(key);
    }
}
