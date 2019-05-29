import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionPage } from './direction.page';

describe('DirectionPage', () => {
  let component: DirectionPage;
  let fixture: ComponentFixture<DirectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
