import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register4Page } from './register4.page';

describe('Register4Page', () => {
  let component: Register4Page;
  let fixture: ComponentFixture<Register4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
