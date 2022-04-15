import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAgendamentoComponent } from './filtro-agendamento.component';

describe('FiltroAgendamentoComponent', () => {
  let component: FiltroAgendamentoComponent;
  let fixture: ComponentFixture<FiltroAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
