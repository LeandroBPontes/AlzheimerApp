import { Component, Input, OnInit } from '@angular/core';
import { DataGridColumnModel, EnumAlignment } from 'ngx-ui-hero';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';


@Component({
  selector: 'app-tela-cuidador',
  templateUrl: './tela-cuidador.component.html',
  styleUrls: ['./tela-cuidador.component.css']
})
export class TelaCuidadorComponent implements OnInit {

  constructor(public service: CuidadorService, public servicePaciente: PacienteService) { }

  ngOnInit(): void {
    this.obterTodos()
  }
  date = new Date();
  ano = this.date.getFullYear();
  @Input() data: any
  @Input() columns: any
  @Input() showActionsColumn: any
  @Input() initialColumnToSort: any


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
    },
    {
      caption: 'Cuidador',
      data: 'idCuidador',
    }
  ];

  async obterTodos(): Promise<void> {
    await this.servicePaciente.buscarTodos().then(async resultado => {
      this.data = resultado;
      console.log(resultado)
    });
  }
  async obterCuidador(): Promise<void> {
    await this.servicePaciente.buscarTodos().then(async resultado => {
      this.data = resultado;
      console.log(resultado)
    });
  }
}
