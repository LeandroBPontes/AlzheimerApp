import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CuidadorModel } from 'src/app/areas/usuarios/modelos/cuidador/cuidador.model';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';

@Component({
  selector: 'app-cadastro-cuidador',
  templateUrl: './cadastro-cuidador.component.html',
  styleUrls: ['./cadastro-cuidador.component.css']
})
export class CadastroCuidadorComponent implements OnInit {

  constructor(public service: CuidadorService) { 
  }

  filtro = new CuidadorModel()
  titulo = "Tela de Cadastro de Cuidadores"
  
  ngOnInit(): void {
    
  }

}
