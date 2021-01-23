import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjhomeComponent } from './djhome.component';

describe('DjhomeComponent', () => {
  let component: DjhomeComponent;
  let fixture: ComponentFixture<DjhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
