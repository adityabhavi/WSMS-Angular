import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDJComponent } from './user-dj.component';

describe('UserDJComponent', () => {
  let component: UserDJComponent;
  let fixture: ComponentFixture<UserDJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
