import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandithomeComponent } from './pandithome.component';

describe('PandithomeComponent', () => {
  let component: PandithomeComponent;
  let fixture: ComponentFixture<PandithomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandithomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandithomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
