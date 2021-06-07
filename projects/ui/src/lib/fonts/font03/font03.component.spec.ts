import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font03Component } from './font03.component';

describe('Font03Component', () => {
  let component: Font03Component;
  let fixture: ComponentFixture<Font03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
