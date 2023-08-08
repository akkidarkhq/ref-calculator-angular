import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NumberButtonComponent } from './button/number-button/number-button.component';
import { FunctionButtonComponent } from './button/function-button/function-button.component';
import { OperationButtonComponent } from './button/operation-button/operation-button.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NumberButtonComponent,
    FunctionButtonComponent,
    OperationButtonComponent,
    CalculatorComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[CalculatorComponent,OperationButtonComponent],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
