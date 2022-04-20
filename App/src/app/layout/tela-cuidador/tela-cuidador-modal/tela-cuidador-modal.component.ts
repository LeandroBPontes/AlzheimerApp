import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'ngx-ui-hero';
import { catchError, finalize } from 'rxjs/operators';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';


@Component({
  selector: 'app-tela-cuidador-modal',
  templateUrl: './tela-cuidador-modal.component.html',
  styleUrls: ['./tela-cuidador-modal.component.css']
})
export class TelaCuidadorModalComponent implements OnInit {

  constructor(public modalService: BsModalService,  public modalRef: BsModalRef,
     public service: PacienteService, public router: Router, private alertService: AlertService) { }
  @Input()dados: any;
  tituloPrincipal: string = "Editar Paciente"
  isLoading: boolean
  ngOnInit(): void {

  }
  Fechar(): void {
    this.modalRef.hide();
  }
  Atualizar(id, model){
    this.isLoading = true;
    this.service
      .atualizar(id, model)
      .pipe(
        finalize(() => {
          this.isLoading = false;
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
      this.alertService.success('Tudo certo!', 'Paciente atualizado com sucesso')
      this.router.navigate([`/tela-cuidador/${this.dados.idCuidador}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 3000);
        });
  }

}
