import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    },
    {
      caption: 'Data',
      data: 'dataAgendamento | date',
    }
  ];

  filtro = new AgendamentoModel();
  data: any;
  

  filtrar():any{
    if(this.filtro.dataAgendamentoInicial != null){
      this.filtro.dataAgendamentoInicial = this.date.transform(this.filtro.dataAgendamentoInicial, 'dd-MM-yyyy');
    }

    if(this.filtro.dataAgendamentoFinal != null){
      this.filtro.dataAgendamentoFinal = this.date.transform(this.filtro.dataAgendamentoFinal, 'dd-MM-yyyy');
    }
    
      this.service.filtrarAgendamentoPorData(
      this.filtro.dataAgendamentoInicial, this.filtro.dataAgendamentoFinal)
      .then(resultado => {
      this.agendamentosFiltrados = resultado;
      }
      );
    }

  
  limpar(){

  }

}
