import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalManagerComponent } from './external-manager.component';

describe('ExternalManagerComponent', () => {
  let component: ExternalManagerComponent;
  let fixture: ComponentFixture<ExternalManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
