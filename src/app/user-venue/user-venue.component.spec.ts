import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVenueComponent } from './user-venue.component';

describe('UserVenueComponent', () => {
  let component: UserVenueComponent;
  let fixture: ComponentFixture<UserVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
