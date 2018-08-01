import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsManagerComponent } from './logs-manager.component';

describe('LogsManagerComponent', () => {
  let component: LogsManagerComponent;
  let fixture: ComponentFixture<LogsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
