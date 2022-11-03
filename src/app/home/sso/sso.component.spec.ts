import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSOComponent } from './sso.component';

describe('SSOComponent', () => {
  let component: SSOComponent;
  let fixture: ComponentFixture<SSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
