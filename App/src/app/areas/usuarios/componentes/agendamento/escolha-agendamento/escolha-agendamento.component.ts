import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataGridColumnModel, EnumAlignment } from 'ngx-ui-hero';
import { AgendamentoService } from '../../../servicos/agendamento/agendamento.service';

@Component({
  selector: 'app-escolha-agendamento',
  templateUrl: './escolha-agendamento.component.html',
  styleUrls: ['./escolha-agendamento.component.css']
})
export class EscolhaAgendamentoComponent implements OnInit {

  constructor(public service: AgendamentoService, private router: Router,
    private activatedRoute: ActivatedRoute) { }
  
    id: any;
    idPaciente: any;
    idAgendamento: any;
    idCuidador: any;
    data:any;
    nome:any;


  ngOnInit(): void {
    
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
    this.obterTodosPorIdPaciente(this.idPaciente)
  }
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
  
  obterTodosPorIdPaciente(id){
    this.service.buscarPorIdPaciente(id).subscribe(resultado => {
      this.data = resultado;
    });
  }
 
gerenciar(){
     return this.router.navigate([`/criar-consulta/${this.idAgendamento}/${this.idPaciente}/${this.idCuidador}`]);
  }

}

