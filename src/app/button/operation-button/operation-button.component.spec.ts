import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationButtonComponent } from './operation-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OperationButtonComponent', () => {
  let component: OperationButtonComponent;
  let fixture: ComponentFixture<OperationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationButtonComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
