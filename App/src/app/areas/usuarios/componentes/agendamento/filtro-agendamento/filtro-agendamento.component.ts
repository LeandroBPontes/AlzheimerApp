import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUi, EnumAlignment } from 'ngx-ui-hero';
import { AgendamentoModel } from '../../../modelos/agendamento/agendamento.model';
import { AgendamentoService } from '../../../servicos/agendamento/agendamento.service';

@Component({
  selector: 'app-filtro-agendamento',
  templateUrl: './filtro-agendamento.component.html',
  styleUrls: ['./filtro-agendamento.component.css']
})
export class FiltroAgendamentoComponent implements OnInit {

  idPaciente: any;
  idCuidador: any;
  ngOnInit(): void {
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
  }
  blockUi = new BlockUi();
  
    //this.setDob = datePipe.transform(userdate, 'dd/MM/yyyy');

  constructor(public activatedRoute: ActivatedRoute, private router: Router,
    private service: AgendamentoService, public date: DatePipe) { }
    
    agendamentosFiltrados:any;
  agendamentos = [
    {
      caption: 'Endereço',
      data: 'endereco',
    },
    {
      caption: 'Especialidade',
      data: 'especialidade',
    },
    {
      caption: 'Feito Pelo Plano',
      data: 'feitoPeloPlano',
      captionAlignment: EnumAlignment.Center,
      render: (row, currentData, index) => {
        if (!currentData)
          return 'Não';
          return 'Sim'
      },
      filterable: true
    },
    {
      caption: 'Data',
      data: 'dataAgendamento',
      captionAlignment: EnumAlignment.Center,
      render: (row, currentData, index) => {
        if (!currentData)
          return null;
        return (new Date(currentData)).toLocaleDateString();
      },
      filterable: true
    },
  ];

  filtro = new AgendamentoModel();
  data: any;
  

  filtrar():any{
    this.blockUi.start('Entrando...');
      this.service.filtrarAgendamentoPorData(
      this.filtro)
      .subscribe(resultado => {
      this.agendamentosFiltrados = resultado;
      }
      ); this.blockUi.stop();
    }

  
  limpar(){

  }

}
