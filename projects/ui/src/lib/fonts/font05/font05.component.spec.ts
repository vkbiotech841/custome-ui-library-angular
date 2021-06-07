import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font05Component } from './font05.component';

describe('Font05Component', () => {
  let component: Font05Component;
  let fixture: ComponentFixture<Font05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
