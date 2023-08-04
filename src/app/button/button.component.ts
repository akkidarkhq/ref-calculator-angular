import { Component, EventEmitter, Input,Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() label:any="";
  @Output() onClick:EventEmitter<void> = new EventEmitter();

  constructor(){}

  onButtonClick(value:any){
    this.onClick.emit(value);
  }

  ngOnInit():void{
    
  }
}
