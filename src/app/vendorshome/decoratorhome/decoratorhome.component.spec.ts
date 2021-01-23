import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorhomeComponent } from './decoratorhome.component';

describe('DecoratorhomeComponent', () => {
  let component: DecoratorhomeComponent;
  let fixture: ComponentFixture<DecoratorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
