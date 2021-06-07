import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font09Component } from './font09.component';

describe('Font09Component', () => {
  let component: Font09Component;
  let fixture: ComponentFixture<Font09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
