import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionGeoPage } from './direction-geo.page';

describe('DirectionGeoPage', () => {
  let component: DirectionGeoPage;
  let fixture: ComponentFixture<DirectionGeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionGeoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionGeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
