import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpassworddComponent } from './resetpasswordd.component';

describe('ResetpassworddComponent', () => {
  let component: ResetpassworddComponent;
  let fixture: ComponentFixture<ResetpassworddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpassworddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpassworddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
