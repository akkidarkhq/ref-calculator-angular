import { Component,Input } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.css']
})

export class OperationButtonComponent extends ButtonComponent {
  
  @Input() override parentId:string="";
  elementId:string="";

  override ngOnInit(): void {
      super.ngOnInit();
      this.elementId=this.parentId;
  }

  
  onClickHandler(key:any){
    console.log("operation button clicked",key);
    this.onClick.emit(key);
  }

}
