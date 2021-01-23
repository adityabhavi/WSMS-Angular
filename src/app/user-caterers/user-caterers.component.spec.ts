import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCaterersComponent } from './user-caterers.component';

describe('UserCaterersComponent', () => {
  let component: UserCaterersComponent;
  let fixture: ComponentFixture<UserCaterersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCaterersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCaterersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
