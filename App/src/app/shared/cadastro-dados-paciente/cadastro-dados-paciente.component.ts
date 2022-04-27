import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-ui-hero';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { BaseModel } from 'src/app/areas/usuarios/modelos/base/base.model';
import { ServicoBaseService } from 'src/app/areas/usuarios/servicos/servico-base/servico-base.service';

@Component({
  selector: 'app-cadastro-dados-paciente',
  templateUrl: './cadastro-dados-paciente.component.html',
  styleUrls: ['./cadastro-dados-paciente.component.css']
})
export class CadastroDadosPacienteComponent implements OnInit {
   filtro= new BaseModel();
  
  @Input() titulo: string;
  @Input() medicamentoAtributo: boolean = false;
  @Input() sintomaAtributo: boolean = false;
  @Input() atividadeAtributo: boolean = false;
  @Input() idCuidador: any;
  @Input() idPaciente: any;
  isLoading: boolean;
  
  constructor(public service: ServicoBaseService, public router: Router,private alertService: AlertService) { }

  ngOnInit(): void {
  }
  limpar(){
    this.filtro = new BaseModel();
  }
  inserirAtividade(filtro: any){
    this.filtro.idPaciente = this.idPaciente;
    this.service
    .inserirAtividade(this.filtro)
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
  this.alertService.success('Tudo certo!', 'Atividade criada com sucesso')
  this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
    .then(nav => {
      setTimeout(function () { location.reload(); }, 3000);
    });
}

    inserirSintoma(filtro: any){
      this.filtro.idPaciente = this.idPaciente;
      this.service
      .inserirSintoma(this.filtro)
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
    this.alertService.success('Tudo certo!', 'Sintoma criado com sucesso')
    this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
      .then(nav => {
        setTimeout(function () { location.reload(); }, 3000);
      });
  }

      inserirMedicamento(filtro: any){
        this.filtro.idPaciente = this.idPaciente;
        this.service
        .inserirMedicamento(this.filtro)
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
      this.alertService.success('Tudo certo!', 'Medicamento criado com sucesso')
      this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 3000);
        });
    }


  inserir(): any {
    if (this.medicamentoAtributo) {
     this.inserirMedicamento(this.filtro);
    }
    if (this.atividadeAtributo) {
      this.inserirAtividade(this.filtro);
    }
    if (this.sintomaAtributo) {
     this.inserirSintoma(this.filtro);
    } 
  }

  


}
