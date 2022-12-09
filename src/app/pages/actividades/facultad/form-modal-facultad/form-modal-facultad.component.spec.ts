import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalFacultadComponent } from './form-modal-facultad.component';

describe('FormModalFacultadComponent', () => {
  let component: FormModalFacultadComponent;
  let fixture: ComponentFixture<FormModalFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModalFacultadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModalFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
