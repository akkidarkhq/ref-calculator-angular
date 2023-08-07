import { Component,Input,Attribute,Output } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})

export class NumberButtonComponent extends ButtonComponent {

  // override ngOnInit(): void {
  //     super.ngOnInit();
  // }

  @Input() Ids:string="";
  elementId:string=this.Ids;

  onClickHandler(key:any){
    console.log("number button component clicked",key);
    console.log("nope"+this.Ids)
    this.onClick.emit(key);
  }
}
