import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatererhomerhomeComponent } from './catererhomerhome.component';

describe('CatererhomerhomeComponent', () => {
  let component: CatererhomerhomeComponent;
  let fixture: ComponentFixture<CatererhomerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatererhomerhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatererhomerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
