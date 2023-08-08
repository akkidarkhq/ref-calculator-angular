import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberButtonComponent } from './number-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NumberButtonComponent', () => {
  let component: NumberButtonComponent;
  let fixture: ComponentFixture<NumberButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberButtonComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
