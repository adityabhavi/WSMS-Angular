import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueMumbaiComponent } from './venue-mumbai.component';

describe('VenueMumbaiComponent', () => {
  let component: VenueMumbaiComponent;
  let fixture: ComponentFixture<VenueMumbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueMumbaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
