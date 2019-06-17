import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage } from './simple.page';

describe('SimplePage', () => {
  let component: SimplePage;
  let fixture: ComponentFixture<SimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
