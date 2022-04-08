import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-atividade',
  templateUrl: './cadastro-atividade.component.html',
  styleUrls: ['./cadastro-atividade.component.css']
})
export class CadastroAtividadeComponent implements OnInit {
  titulo = "Tela de Cadastro de Atividade"

  constructor() { }

  ngOnInit(): void {
  }

}
