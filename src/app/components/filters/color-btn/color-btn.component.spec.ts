import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBtnComponent } from './color-btn.component';

describe('ColorBtnComponent', () => {
  let component: ColorBtnComponent;
  let fixture: ComponentFixture<ColorBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
