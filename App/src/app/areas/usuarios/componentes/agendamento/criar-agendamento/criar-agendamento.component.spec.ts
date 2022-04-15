import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAgendamentoComponent } from './criar-agendamento.component';

describe('CriarAgendamentoComponent', () => {
  let component: CriarAgendamentoComponent;
  let fixture: ComponentFixture<CriarAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
