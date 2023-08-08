import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { By } from '@angular/platform-browser';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
   
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should bind input text value to Component property', () => {
    const component = fixture.componentInstance;
    const nameInput = fixture.debugElement.query(By.css("#display"));
    nameInput.nativeElement.value = "akki";
    nameInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameInput).toBeTruthy();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      console.log("sendInput : ", nameInput.nativeElement.value);
      expect(component.value).toBe("akki")
    })
  
  });



});
