import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { ServicoBaseService } from 'src/app/areas/usuarios/servicos/servico-base/servico-base.service';

@Component({
  selector: 'app-editar-base',
  templateUrl: './editar-base.component.html',
  styleUrls: ['./editar-base.component.css']
})
export class EditarBaseComponent implements OnInit {
 
  constructor(public modalService: BsModalService,  public modalRef: BsModalRef,
     public service: ServicoBaseService, public router: Router,
      private alertService: AlertService) { }

  tituloPrincipal: string = "Editar Paciente"
  isLoading: boolean
  @Input()dados: any;
  
  @Input()medicamento: any;
  @Input()sintoma: any;
  @Input()atividade: any;


  ngOnInit(): void {

  }
  Fechar(): void {
    this.modalRef.hide();
  }
  Atualizar(id, model){
    this.isLoading = true;

    //medicamento
    if(this.medicamento){
      this.service
      .atualizarMedicamento(id, model)
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
      this.alertService.success('Tudo certo!', 'Medicamento atualizado com sucesso')
      this.router.navigate([`/tela-paciente/${this.dados.idCuidador}/${this.dados.idPaciente}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 4000);
        });
    }

    //sintoma
    if(this.sintoma){
      this.service
      .atualizarSintoma(id, model)
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
      this.alertService.success('Tudo certo!', 'Sintoma atualizado com sucesso')
      this.router.navigate([`/tela-paciente/${this.dados.idCuidador}/${this.dados.idPaciente}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 4000);
        });
    }

    //atividade
    if(this.atividade){
      this.service
      .atualizarAtividade(id, model)
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
      this.alertService.success('Tudo certo!', 'Atividade atualizada com sucesso')
      this.router.navigate([`/tela-paciente/${this.dados.idCuidador}/${this.dados.idPaciente}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 4000);
        });
    }
    
  }
 
}
