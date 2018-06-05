import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskChecklistComponent } from './risk-checklist.component';

describe('RiskChecklistComponent', () => {
  let component: RiskChecklistComponent;
  let fixture: ComponentFixture<RiskChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
