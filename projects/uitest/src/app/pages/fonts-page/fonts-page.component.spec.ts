import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsPageComponent } from './fonts-page.component';

describe('FontsPageComponent', () => {
  let component: FontsPageComponent;
  let fixture: ComponentFixture<FontsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
