import { Component, OnInit } from '@angular/core';
import { AgendamentoModel } from '../../../modelos/agendamento/agendamento.model';

@Component({
  selector: 'app-filtro-agendamento',
  templateUrl: './filtro-agendamento.component.html',
  styleUrls: ['./filtro-agendamento.component.css']
})
export class FiltroAgendamentoComponent implements OnInit {

  constructor() { }
  pacientes = [
    {
      caption: 'Nome',
      data: 'nome',
    },
    {
      caption: 'Idade',
      data: 'idade',
    },
    {
      caption: 'Sexo',
      data: 'sexo',
    },
    {
      caption: 'Possui Filho',
      data: 'possuiFilho',
    },
    {
      caption: 'Estado Civil',
      data: 'estadoCivil',
    },
    {
      caption: 'Identificador',
      data: 'role',
    },
    {
      caption: 'Possui Plano',
      data: 'possuiPlano',
    }
  ];
  filtro = new AgendamentoModel();
  data: any;
  ngOnInit(): void {
  }

  filtrar(){

  }
  limpar(){

  }

}
