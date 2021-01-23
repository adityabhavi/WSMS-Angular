import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorDetailsComponent } from './decorator-details.component';

describe('DecoratorDetailsComponent', () => {
  let component: DecoratorDetailsComponent;
  let fixture: ComponentFixture<DecoratorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
