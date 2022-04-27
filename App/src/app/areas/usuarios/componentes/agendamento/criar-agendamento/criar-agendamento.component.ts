import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-ui-hero';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AgendamentoModel } from '../../../modelos/agendamento/agendamento.model';
import { AgendamentoService } from '../../../servicos/agendamento/agendamento.service';

@Component({
  selector: 'app-criar-agendamento',
  templateUrl: './criar-agendamento.component.html',
  styleUrls: ['./criar-agendamento.component.css']
})
export class CriarAgendamentoComponent implements OnInit {

  constructor(
     private activatedRoute: ActivatedRoute,
     private service: AgendamentoService, public router: Router,private alertService: AlertService
    ) { }
    
  filtro = new AgendamentoModel();
  titulo = "Criar Agendamento"
  idPaciente: any;
  idCuidador: any;
  criaAgendamento = false;
  
  ngOnInit(): void {
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    
  }

  inserir(){
    this.filtro.idPaciente = this.idPaciente;
    this.service
    .inserir(this.filtro)
    .subscribe(
      result => {
        console.log("sucesso")
      },
      err => {
        console.log("erro")
      }
        )
        this.alertService.question('Cadastro realizado com sucesso!', 'Deseja criar um novo agendamento?', () => {
          return this.router.navigate([`/criar-agendamento/${this.idCuidador}/${this.idPaciente}`]);
        })
        return this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`]);
         
  }
  

  limpar(){
    
  }

 

}
