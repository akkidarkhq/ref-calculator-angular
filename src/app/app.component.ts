import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./button/function-button/function-button.component.css']
})
export class AppComponent {
  title = 'calculator';
  label = "click me";
  
  onClickHandler(){
    console.log('clicked button');
  }
}
