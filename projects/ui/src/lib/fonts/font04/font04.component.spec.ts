import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font04Component } from './font04.component';

describe('Font04Component', () => {
  let component: Font04Component;
  let fixture: ComponentFixture<Font04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
