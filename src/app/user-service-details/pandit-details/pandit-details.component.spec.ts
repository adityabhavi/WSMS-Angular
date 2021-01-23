import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditDetailsComponent } from './pandit-details.component';

describe('PanditDetailsComponent', () => {
  let component: PanditDetailsComponent;
  let fixture: ComponentFixture<PanditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanditDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
