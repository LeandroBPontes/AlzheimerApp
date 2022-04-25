import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, EnumAlignment, ReportComponent } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { AgendamentoModel } from '../../modelos/agendamento/agendamento.model';
import { AgendamentoService } from '../../servicos/agendamento/agendamento.service';
import { DatePipe } from '@angular/common'

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
     public datepipe: DatePipe) { }

  idAgendamento: any;
  dados = new AgendamentoModel();
  date = new Date();
  ano = this.date.getFullYear();
  print: boolean = false;

  ngOnInit(): void {
    this.idAgendamento = this.activatedRoute.snapshot.paramMap.get('idAgendamento');
    this.obterAgendamentoPorId(this.idAgendamento)
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
          
            console.log("sucesso")
          },
          err => {
            console.log("erro")
          }
      )
  }
}
