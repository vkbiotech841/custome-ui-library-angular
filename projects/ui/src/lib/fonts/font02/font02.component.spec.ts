import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font02Component } from './font02.component';

describe('Font02Component', () => {
  let component: Font02Component;
  let fixture: ComponentFixture<Font02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
