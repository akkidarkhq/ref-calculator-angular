import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./button/function-button/function-button.component.css']
})
export class AppComponent {
  title = 'calculator';
  label = "click me";
  appId:string = "calc1";

  onClickHandler(){
    console.log('clicked button');
  }
}
