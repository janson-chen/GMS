import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationDataEditorComponent } from './data-editor.component';

describe('DataEditorComponent', () => {
  let component: PopulationDataEditorComponent;
  let fixture: ComponentFixture<PopulationDataEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationDataEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationDataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
