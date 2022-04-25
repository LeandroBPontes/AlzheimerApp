import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaAgendamentoComponent } from './escolha-agendamento.component';

describe('EscolhaAgendamentoComponent', () => {
  let component: EscolhaAgendamentoComponent;
  let fixture: ComponentFixture<EscolhaAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
