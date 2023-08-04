import { Component } from '@angular/core';
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

  onClickHandler(value:any){
    console.log("number button component clicked",value);
    this.onClick.emit(value);
  }
}
