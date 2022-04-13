import { Component, OnInit} from '@angular/core';
import { CuidadorModel } from 'src/app/areas/usuarios/modelos/cuidador/cuidador.model';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';
import { AlertService, BlockUi } from 'ngx-ui-hero';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(public service: CuidadorService, private alertService: AlertService, public router: Router) { 
  

  }
  
  blockUi = new BlockUi();
  titulo = "Tela de Login"
  filtro = new CuidadorModel()
  nome: string;
  senha: string
  emissor:any;

  ngOnInit(): void {
  }

  logar() {
    // this.blockUi.start('Entrando...');
    this.service
      .login(this.filtro)
      .subscribe(result => {
        this.emissor = result;
        if (!result) {
          this.blockUi.stop();
          var resposta = window.confirm("Usuário não cadastrado. Deseja Cadastrar?");
          if (resposta) {
           
            return this.redirect()
          } else {
            // this.blockUi.stop();
            return this.router.navigate(['/tela-login']);
          }

        } else {
            //passando o id como parametro na rota
            return this.router.navigateByUrl(`/tela-cuidador/${this.emissor[0].id}`)
            }
        
      }
    )
  }

  redirect(): any {
   
    return this.router.navigate(['/cadastro-usuario']);
  }

  limpar() {
    this.filtro = new CuidadorModel()
  }

}
