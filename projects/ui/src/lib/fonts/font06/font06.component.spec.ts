import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font06Component } from './font06.component';

describe('Font06Component', () => {
  let component: Font06Component;
  let fixture: ComponentFixture<Font06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
