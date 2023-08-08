import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onButtonClick when clicked', fakeAsync(() => {
    spyOn(component, 'onButtonClick');

	let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();

	tick();

	expect(component.onButtonClick).toHaveBeenCalled();
  }
  ));


  
});
