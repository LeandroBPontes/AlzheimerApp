import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.component.html',
  styleUrls: ['./cadastro-medicamento.component.css']
})
export class CadastroMedicamentoComponent implements OnInit {

  constructor() { }
  titulo = "Tela de Cadastro de Medicamento"
  ngOnInit(): void {
  }

}
