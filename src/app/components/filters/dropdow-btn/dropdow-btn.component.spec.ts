import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowBtnComponent } from './dropdow-btn.component';

describe('DropdowBtnComponent', () => {
  let component: DropdowBtnComponent;
  let fixture: ComponentFixture<DropdowBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
