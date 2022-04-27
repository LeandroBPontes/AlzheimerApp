import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService, BlockUi } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { AgendamentoService } from '../../../servicos/agendamento/agendamento.service';


@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.css']
})
export class EditarAgendamentoComponent implements OnInit {

  constructor(public modalService: BsModalService,  public modalRef: BsModalRef,
    public service: AgendamentoService, public router: Router,
     private alertService: AlertService) { }

 tituloPrincipal: string = "Editar Agendamento do Paciente"
 tituloSecundario: string = "Editar Agendamento"
 
 isLoading: boolean
 @Input()dados: any;
 
 ngOnInit(): void {

 }
 
 Fechar(): void {
   this.modalRef.hide();
 }

 Atualizar(id, model){
     this.service.atualizar(id, model)
     .pipe(
       finalize(() => {
         
       })
     )
     .subscribe(
       result => {
         console.log("sucesso")
       },
       err => {
         console.log("erro")
       }
     )
     this.alertService.success('Tudo certo!', 'Agendamento atualizado com sucesso')
     setTimeout(function () { location.reload(); }, 3000);
   }
}
