import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePage } from './autocomplete.page';

describe('AutocompletePage', () => {
  let component: AutocompletePage;
  let fixture: ComponentFixture<AutocompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
