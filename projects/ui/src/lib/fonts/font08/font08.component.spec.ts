import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Font08Component } from './font08.component';

describe('Font08Component', () => {
  let component: Font08Component;
  let fixture: ComponentFixture<Font08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Font08Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Font08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
