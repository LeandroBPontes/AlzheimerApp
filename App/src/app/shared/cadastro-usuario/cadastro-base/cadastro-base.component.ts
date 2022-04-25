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

  constructor(public router: Router, private alertService: AlertService) { }
  ngOnInit(): void {

  }
  
  @Input() filtro: any;
  @Input() service: any;
  @Input() titulo: string;
  @Input() id: number;
  @Input() cuidadorAtributo: boolean = false;
  @Input() pacienteAtributo: boolean = false;
  resposta: any;

  
 
  limpar() {
    this.filtro = {}
  }

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
        result => {
          console.log("sucesso")
        },
        err => {
          console.log("erro")
        }
      )
        if(this.cuidadorAtributo){
          this.alertService.question('Cadastro realizado com sucesso!', 'Deseja ir para a tela de Login?', () => {
          return this.router.navigate(['/tela-login']);
          })
          
        }
        if(!this.cuidadorAtributo){
          return this.router.navigate([`/tela-cuidador/${this.id}`]);
        }
      
  }
}
