import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, finalize } from 'rxjs/operators';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';


@Component({
  selector: 'app-tela-cuidador-modal',
  templateUrl: './tela-cuidador-modal.component.html',
  styleUrls: ['./tela-cuidador-modal.component.css']
})
export class TelaCuidadorModalComponent implements OnInit {

  constructor(public modalService: BsModalService,  public modalRef: BsModalRef,
     public service: PacienteService, public router: Router) { }
  @Input()dados: any;
  tituloPrincipal: string = "Editar Paciente"
  ngOnInit(): void {

  }
  Fechar(): void {
    this.modalRef.hide();
  }
  Atualizar(id, model){
    this.service
      .atualizar(id, model)
      .subscribe()
        var resposta = window.confirm("Paciente atualizado com sucesso!");
        if (resposta)
        return this.router.navigate([`/tela-cuidador/${this.dados.idCuidador}`]);
        return this.router.navigate([`/tela-cuidador/${this.dados.idCuidador}`]);
        
      }

}
