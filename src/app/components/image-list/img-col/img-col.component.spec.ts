import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgColComponent } from './img-col.component';

describe('ImgColComponent', () => {
  let component: ImgColComponent;
  let fixture: ComponentFixture<ImgColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
