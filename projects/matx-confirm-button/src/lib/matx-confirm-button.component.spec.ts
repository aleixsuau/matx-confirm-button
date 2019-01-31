import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatxConfirmButtonComponent } from './matx-confirm-button.component';

describe('MatxConfirmButtonComponent', () => {
  let component: MatxConfirmButtonComponent;
  let fixture: ComponentFixture<MatxConfirmButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatxConfirmButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatxConfirmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
