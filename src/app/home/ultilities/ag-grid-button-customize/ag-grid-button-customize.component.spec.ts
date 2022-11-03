import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridButtonCustomizeComponent } from './ag-grid-button-customize.component';

describe('AgGridButtonCustomizeComponent', () => {
  let component: AgGridButtonCustomizeComponent;
  let fixture: ComponentFixture<AgGridButtonCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridButtonCustomizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridButtonCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
