import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidColComponent } from './vid-col.component';

describe('VidColComponent', () => {
  let component: VidColComponent;
  let fixture: ComponentFixture<VidColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
