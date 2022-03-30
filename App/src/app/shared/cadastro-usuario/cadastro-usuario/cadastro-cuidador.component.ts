import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CuidadorModel } from 'src/app/areas/usuarios/modelos/cuidador/cuidador.model';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';

@Component({
  selector: 'app-cadastro-cuidador',
  templateUrl: './cadastro-cuidador.component.html',
  styleUrls: ['./cadastro-cuidador.component.css']
})
export class CadastroCuidadorComponent implements OnInit {

  constructor(protected service: CuidadorService) { 
  }

  filtro = new CuidadorModel()
  ngOnInit(): void {
    
  }
 
   inserir(){
     if(this.filtro)
     this.filtro.role = "Cuidador"
    
     this.service
      .inserirCuidador(this.filtro)
      .subscribe();
  }
  limpar(){
    this.filtro =  new CuidadorModel()
  }
}
