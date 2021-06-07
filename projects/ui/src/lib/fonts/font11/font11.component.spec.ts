import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font11Component } from './font11.component';

describe('Font11Component', () => {
  let component: Font11Component;
  let fixture: ComponentFixture<Font11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
