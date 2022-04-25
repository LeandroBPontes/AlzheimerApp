import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, EnumAlignment, ReportComponent } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { AgendamentoModel } from '../../modelos/agendamento/agendamento.model';
import { AgendamentoService } from '../../servicos/agendamento/agendamento.service';
import { DatePipe } from '@angular/common'
import { PacienteModel } from '../../modelos/paciente/paciente.model';
import { PacienteService } from '../../servicos/paciente/paciente.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  constructor( public router: Router,
    private activatedRoute: ActivatedRoute,
     private service: AgendamentoService,
     private alertService: AlertService,
     public datepipe: DatePipe, private pacienteService: PacienteService) { }

  idAgendamento: any;
  idPaciente: any;
  dados = new AgendamentoModel();
  dadosPaciente = new PacienteModel();
  date = new Date();
  ano = this.date.getFullYear();
  print: boolean = false;

  ngOnInit(): void {
    this.idAgendamento = this.activatedRoute.snapshot.paramMap.get('idAgendamento');
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.obterAgendamentoPorId(this.idAgendamento)
    this.obterPaciente(this.idPaciente)
  }

  @ViewChild('report') report: ReportComponent;

  Print(): void {
    this.print = true;
    this.report.Print();
  }
  Voltar(){

  }

  obterAgendamentoPorId(id) {
      this.service.buscarPorId(this.idAgendamento)
        .pipe(
          finalize(() => {
          })
        )
        .subscribe(
          result => {
            this.dados = result;
            if(this.dados.dataAgendamento != null){
              this.dados.dataAgendamento = this.datepipe.transform(this.dados.dataAgendamento, 'dd/MM/yyyy');
            }
            if(this.dados.feitoPeloPlano == true){
              
              this.dados.feitoPeloPlanoDescricao = 'Sim'

            }else{
              this.dados.feitoPeloPlanoDescricao = 'Não'
            }
          
            console.log("sucesso")
          },
          err => {
            console.log("erro")
          }
      )
  }
  obterPaciente(id){
    this.pacienteService.obterPorId(this.idPaciente)
    .pipe(
      finalize(() => {
      })
    )
    .subscribe(
      result => {
        this.dadosPaciente = result;
        console.log("sucesso")
      },
      err => {
        console.log("erro")
      }
  )
  }
}
