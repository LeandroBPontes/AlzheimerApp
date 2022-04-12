import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-sintoma',
  templateUrl: './cadastro-sintoma.component.html',
  styleUrls: ['./cadastro-sintoma.component.css']
})
export class CadastroSintomaComponent implements OnInit {
  
  titulo = "Tela de Cadastro de Sintoma"
  constructor( private activatedRoute: ActivatedRoute) { }
 
  idCuidador: any;
  idPaciente: any;
  
  ngOnInit(): void {
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
    this.idPaciente= this.activatedRoute.snapshot.paramMap.get('idPaciente');
  }


}
