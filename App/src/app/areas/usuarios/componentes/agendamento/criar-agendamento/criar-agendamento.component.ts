import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AgendamentoModel } from '../../../modelos/agendamento/agendamento.model';
import { AgendamentoService } from '../../../servicos/agendamento/agendamento.service';

@Component({
  selector: 'app-criar-agendamento',
  templateUrl: './criar-agendamento.component.html',
  styleUrls: ['./criar-agendamento.component.css']
})
export class CriarAgendamentoComponent implements OnInit {

  constructor(
     private activatedRoute: ActivatedRoute,
     private service: AgendamentoService, public router: Router,
    ) { }
    
  filtro = new AgendamentoModel();
  titulo = "Criar Agendamento"
  idPaciente: any;
  idCuidador: any;
  
  ngOnInit(): void {
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
  }

  inserir(){
    this.filtro.idPaciente = this.idPaciente;
    console.log(this.filtro)
    this.service
    .inserir(this.filtro)
    .subscribe(
      catchError(this.handleError),
      finalize(() => alert('Ocorreu um erro na requisição, por favor, tente mais tarde!') )
        )
          var resposta = window.confirm("Cadastro concluído com sucesso!");
          if (resposta)
          return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
          return this.router.navigate([`/criar-agendamento/${this.idCuidador}/${this.idPaciente}`]);
  }

  limpar(){
    
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
