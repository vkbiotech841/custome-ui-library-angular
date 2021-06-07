import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font10Component } from './font10.component';

describe('Font10Component', () => {
  let component: Font10Component;
  let fixture: ComponentFixture<Font10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
