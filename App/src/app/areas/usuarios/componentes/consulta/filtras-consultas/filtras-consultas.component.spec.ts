import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrasConsultasComponent } from './filtras-consultas.component';

describe('FiltrasConsultasComponent', () => {
  let component: FiltrasConsultasComponent;
  let fixture: ComponentFixture<FiltrasConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrasConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrasConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
