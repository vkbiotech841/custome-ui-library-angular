import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font07Component } from './font07.component';

describe('Font07Component', () => {
  let component: Font07Component;
  let fixture: ComponentFixture<Font07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font07Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
