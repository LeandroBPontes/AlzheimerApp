import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'ngx-ui-hero';


import { Observable, throwError, timer } from 'rxjs';
import { catchError, filter, finalize, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-base',
  templateUrl: './cadastro-base.component.html',
  styleUrls: ['./cadastro-base.component.css']
})
export class CadastroBaseComponent implements OnInit {

  constructor(private alertService: AlertService) { }
  
  @Input() filtro: any;
  @Input() service: any;
  @Input() titulo: string;
  @Input() cuidadorAtributo: boolean = false;
  @Input() pacienteAtributo: boolean = false;
  resposta: any;

  ngOnInit(): void {
  }
  inserir(idCuidador?: number) {

    if (this.cuidadorAtributo) {
      this.filtro.role = "Cuidador"
    } else {
      //this.filtro.idCuidador = service.buscarPorId(idCuidador)
      this.filtro.role = "Paciente"
    }
    // this.service
    //   .inserir(this.filtro)
    //   .subscribe(
    //     catchError(this.handleError),
    //     finalize(() => alert('Ocorreu um erro na requisição, por favor, tente mais tarde!'))
    //       )
    return this.alertService
   .success('Yeahhh', 'Cadastro realizado com sucesso! =)')
        
  }
  limpar() {
    this.filtro = {}
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
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }



}
