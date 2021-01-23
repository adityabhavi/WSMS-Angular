import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjDetailsComponent } from './dj-details.component';

describe('DjDetailsComponent', () => {
  let component: DjDetailsComponent;
  let fixture: ComponentFixture<DjDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
