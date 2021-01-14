import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanditComponent } from './user-pandit.component';

describe('UserPanditComponent', () => {
  let component: UserPanditComponent;
  let fixture: ComponentFixture<UserPanditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPanditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
