import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseModel } from 'src/app/areas/usuarios/modelos/base/base.model';

@Component({
  selector: 'app-cadastro-atividade',
  templateUrl: './cadastro-atividade.component.html',
  styleUrls: ['./cadastro-atividade.component.css']
})
export class CadastroAtividadeComponent implements OnInit {
  titulo = "Tela de Cadastro de Atividade"
  idCuidador: any;
  idPaciente: any;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
    this.idPaciente= this.activatedRoute.snapshot.paramMap.get('idPaciente');
  }

}
