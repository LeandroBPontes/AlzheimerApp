import { Component, OnInit } from '@angular/core';
import { CuidadorModel } from 'src/app/areas/usuarios/modelos/cuidador/cuidador.model';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';
import { AlertService, BlockUi } from 'ngx-ui-hero';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(public service: CuidadorService, private alertService: AlertService, public router: Router) {


  }

  blockUi = new BlockUi();
  titulo = "Login"
  filtro = new CuidadorModel()
  nome: string;
  senha: string
  emissor: any;

  ngOnInit(): void {
  }

  logar() {
    this.blockUi.start('Validando Login...');
    this.service
      .login(this.filtro)
      .pipe(
        finalize(() => {
          this.blockUi.stop();
        })
      )
      .subscribe(result => {
        this.emissor = result;
        if (!result) {
          this.alertService.question('Cuidador não cadastrado!', 'Deseja cadastrar?', () => {
            return this.router.navigate(['/cadastro-usuario']);
          });
          return this.router.navigate(['/tela-login']);

        } else {
          //passando o id como parametro na rota
          return this.router.navigateByUrl(`/tela-cuidador/${this.emissor[0].id}`)
        }

      }, err => {
        console.log("erro")
        return this.router.navigate(['/tela-login']);

      }
      );

  }

  redirect(): any {

    return this.router.navigate(['/cadastro-usuario']);
  }

  limpar() {
    this.filtro = new CuidadorModel()
  }

}
