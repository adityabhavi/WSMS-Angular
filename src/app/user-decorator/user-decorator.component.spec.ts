import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDecoratorComponent } from './user-decorator.component';

describe('UserDecoratorComponent', () => {
  let component: UserDecoratorComponent;
  let fixture: ComponentFixture<UserDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
