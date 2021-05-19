import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font01Component } from './font01.component';

describe('Font01Component', () => {
  let component: Font01Component;
  let fixture: ComponentFixture<Font01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
