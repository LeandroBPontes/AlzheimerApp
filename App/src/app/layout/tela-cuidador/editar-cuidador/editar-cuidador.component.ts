import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';

@Component({
  selector: 'app-editar-cuidador',
  templateUrl: './editar-cuidador.component.html',
  styleUrls: ['./editar-cuidador.component.css']
})
export class EditarCuidadorComponent implements OnInit {

  constructor(public modalService: BsModalService,  public modalRef: BsModalRef,
    public service: CuidadorService, public router: Router, private alertService: AlertService) { }
  
    @Input()cuidador: any;
  tituloPrincipal: string = "Editar Conta"
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
      this.alertService.success('Tudo certo!', 'Conta atualizada com sucesso')
      this.router.navigate([`/tela-cuidador/${this.cuidador.id}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 1000);
        });
  }

}