import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(public service: ServicoBaseService, public router: Router) { }

  ngOnInit(): void {
  }
  limpar(){

  }
  inserirAtividade(filtro: any){
    this.filtro.idPaciente = this.idPaciente;
    this.service
    .inserirAtividade(this.filtro)
    .subscribe(
      catchError(this.handleError),
      finalize(() => alert('Ocorreu um erro na requisição, por favor, tente mais tarde!') )
        )
          var resposta = window.confirm("Cadastro concluído com sucesso!");
          if (resposta)
          return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
          return this.router.navigate([`/cadastro-atividade`]);; 
    }

    inserirSintoma(filtro: any){
      this.filtro.idPaciente = this.idPaciente;
      this.service
      .inserirSintoma(this.filtro)
      .subscribe(
        catchError(this.handleError),
        finalize(() => alert('Ocorreu um erro na requisição, por favor, tente mais tarde!') )
          )
            var resposta = window.confirm("Cadastro concluído com sucesso!");
            if (resposta)
            return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
            return this.router.navigate([`/cadastro-atividade`]);; 
      }

      inserirMedicamento(filtro: any){
        this.filtro.idPaciente = this.idPaciente;
        this.service
        .inserirMedicamento(this.filtro)
        .subscribe(
          catchError(this.handleError),
          finalize(() => alert('Ocorreu um erro na requisição, por favor, tente mais tarde!') )
            )
              var resposta = window.confirm("Cadastro concluído com sucesso!");
              if (resposta)
              return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
              return this.router.navigate([`/cadastro-atividade`]);; 
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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    throwError(() => new Error('Something bad happened; please try again later.'));
    return this.router.navigate(['/cadastro-usuario'])
  }


}
