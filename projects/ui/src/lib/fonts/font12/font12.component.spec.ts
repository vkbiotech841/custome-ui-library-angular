import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font12Component } from './font12.component';

describe('Font12Component', () => {
  let component: Font12Component;
  let fixture: ComponentFixture<Font12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
