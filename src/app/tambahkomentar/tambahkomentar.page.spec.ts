import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahkomentarPage } from './tambahkomentar.page';

describe('TambahkomentarPage', () => {
  let component: TambahkomentarPage;
  let fixture: ComponentFixture<TambahkomentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahkomentarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahkomentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
