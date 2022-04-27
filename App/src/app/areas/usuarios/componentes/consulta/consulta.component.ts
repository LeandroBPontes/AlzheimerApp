import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, ReportComponent } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { AgendamentoModel } from '../../modelos/agendamento/agendamento.model';
import { ConsultaModel } from '../../modelos/consulta/consulta.model';
import { PacienteModel } from '../../modelos/paciente/paciente.model';
import { AgendamentoService } from '../../servicos/agendamento/agendamento.service';
import { ConsultaService } from '../../servicos/consulta/consulta.service';
import { PacienteService } from '../../servicos/paciente/paciente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ConsultaService,
    private alertService: AlertService,
    public datepipe: DatePipe,
    private pacienteService: PacienteService,
    private agendamentoService: AgendamentoService,
  ) { }

  idConsulta: any;
  idAgendamento: any;
  idPaciente: any;
  idCuidador: any;
  dados = new ConsultaModel();
  dadosPaciente = new PacienteModel();
  dadosAgendamento = new AgendamentoModel();
  date = new Date();
  ano = this.date.getFullYear();


  ngOnInit(): void {
    this.idConsulta = this.activatedRoute.snapshot.paramMap.get('idConsulta');
    this.idAgendamento = this.activatedRoute.snapshot.paramMap.get('idAgendamento');
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');

    this.obterConsultaPorId(this.idConsulta)
    this.obterAgendamentoPorId(this.idAgendamento)
    this.obterPaciente(this.idPaciente)
  }

  @ViewChild('report') report: ReportComponent;

  Print(): void {
    this.report.Print();
  }
  Voltar() {
    this.router.navigate([`/filtrar-consulta/${this.idPaciente}/${this.idCuidador}`])
  }

  obterConsultaPorId(id) {
    this.service.buscarPorId(this.idConsulta)
      .pipe(
        finalize(() => {
        })
      )
      .subscribe(
        result => {
          this.dados = result;
          if (this.dados.dataConsulta != null) {
            this.dados.dataConsulta = this.datepipe.transform(this.dados.dataConsulta, 'dd/MM/yyyy');
          }
          console.log("sucesso")
        },
        err => {
          console.log("erro")
        }
      )
  }
  obterAgendamentoPorId(id) {
    this.agendamentoService.buscarPorId(this.idAgendamento)
      .pipe(
        finalize(() => {
        })
      )
      .subscribe(
        result => {
          this.dadosAgendamento = result;
          if (this.dadosAgendamento.dataAgendamento != null) {
            this.dadosAgendamento.dataAgendamento = this.datepipe.transform(this.dadosAgendamento.dataAgendamento, 'dd/MM/yyyy');
          }
          if (this.dadosAgendamento.feitoPeloPlano == true) {

            this.dadosAgendamento.feitoPeloPlanoDescricao = 'Sim'

          } else {
            this.dadosAgendamento.feitoPeloPlanoDescricao = 'Não'
          }

          console.log("sucesso")
        },
        err => {
          console.log("erro")
        }
      )
  }
  obterPaciente(id) {
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

