import { Component,Input,Attribute,Output } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})

export class NumberButtonComponent extends ButtonComponent {

  @Input() override parentId:string="";
  elementId:string="";

  override ngOnInit(): void {
      super.ngOnInit();
      this.elementId=this.parentId;
  }



  onClickHandler(key:any){
    console.log("number button component clicked",key);
    console.log("nope"+this.elementId)
    this.onClick.emit(key);
  }
}
