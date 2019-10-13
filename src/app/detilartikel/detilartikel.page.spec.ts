import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilartikelPage } from './detilartikel.page';

describe('DetilartikelPage', () => {
  let component: DetilartikelPage;
  let fixture: ComponentFixture<DetilartikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilartikelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilartikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
