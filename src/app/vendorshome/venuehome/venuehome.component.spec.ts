import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuehomeComponent } from './venuehome.component';

describe('VenuehomeComponent', () => {
  let component: VenuehomeComponent;
  let fixture: ComponentFixture<VenuehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
