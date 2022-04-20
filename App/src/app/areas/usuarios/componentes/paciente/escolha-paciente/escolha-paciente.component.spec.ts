import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaPacienteComponent } from './escolha-paciente.component';

describe('EscolhaPacienteComponent', () => {
  let component: EscolhaPacienteComponent;
  let fixture: ComponentFixture<EscolhaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
