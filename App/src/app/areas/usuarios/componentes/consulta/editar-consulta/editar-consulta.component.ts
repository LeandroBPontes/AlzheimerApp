import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { ConsultaService } from '../../../servicos/consulta/consulta.service';

@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.css']
})
export class EditarConsultaComponent implements OnInit {

  constructor(public modalService: BsModalService,  public modalRef: BsModalRef,
    public service: ConsultaService, public router: Router,
     private alertService: AlertService) { }

 tituloPrincipal: string = "Editar Consulta do Paciente"
 tituloSecundario: string = "Editar Consulta"
 
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
     this.alertService.success('Tudo certo!', 'Consulta atualizada com sucesso')
     setTimeout(function () { location.reload(); }, 3000);
   }
}

