import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDadosPacienteComponent } from './cadastro-dados-paciente.component';

describe('CadastroDadosPacienteComponent', () => {
  let component: CadastroDadosPacienteComponent;
  let fixture: ComponentFixture<CadastroDadosPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDadosPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDadosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
