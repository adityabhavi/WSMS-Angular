import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoghrapherDetailsComponent } from './photoghrapher-details.component';

describe('PhotoghrapherDetailsComponent', () => {
  let component: PhotoghrapherDetailsComponent;
  let fixture: ComponentFixture<PhotoghrapherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoghrapherDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoghrapherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
