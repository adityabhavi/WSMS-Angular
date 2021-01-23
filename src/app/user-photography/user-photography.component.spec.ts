import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotographyComponent } from './user-photography.component';

describe('UserPhotographyComponent', () => {
  let component: UserPhotographyComponent;
  let fixture: ComponentFixture<UserPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPhotographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
