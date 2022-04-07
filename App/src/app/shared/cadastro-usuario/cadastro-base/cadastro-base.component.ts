import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-ui-hero';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, filter, finalize, map, retry, take } from 'rxjs/operators';


@Component({
  selector: 'app-cadastro-base',
  templateUrl: './cadastro-base.component.html',
  styleUrls: ['./cadastro-base.component.css']
})
export class CadastroBaseComponent implements OnInit {

  constructor(public router: Router) { }
  ngOnInit(): void {

  }
  
  @Input() filtro: any;
  @Input() service: any;
  @Input() titulo: string;
  @Input() id: number;
  @Input() cuidadorAtributo: boolean = false;
  @Input() pacienteAtributo: boolean = false;
  resposta: any;

  inserir(): any {

    if (this.cuidadorAtributo) {
      this.filtro.role = "Cuidador"
    } else {
      //this.filtro.idCuidador = service.buscarPorId(idCuidador)
      this.filtro.role = "Paciente"
      this.filtro.idCuidador = this.id;
    }
    this.service
      .inserir(this.filtro)
      .subscribe(
        catchError(this.handleError),
        finalize(() => alert('Ocorreu um erro na requisição, por favor, tente mais tarde!') )
          )
          if(this.cuidadorAtributo){
            var resposta = window.confirm("Deseja ir para a tela de Login?");
            if (resposta)
            return this.router.navigate(['/tela-login']);
          }else{
            return this.router.navigate([`/tela-cuidador/${this.id}`]);
          }
         
        
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
    throwError(() => new Error('Something bad happened; please try again later.'));
    return this.router.navigate(['/cadastro-usuario'])
  }



}
