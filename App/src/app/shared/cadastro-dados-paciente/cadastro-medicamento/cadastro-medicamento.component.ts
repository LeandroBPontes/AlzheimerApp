import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.component.html',
  styleUrls: ['./cadastro-medicamento.component.css']
})
export class CadastroMedicamentoComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }
  titulo = "Tela de Cadastro de Medicamento"
  idCuidador: any;
  idPaciente: any;
  
  ngOnInit(): void {
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
    this.idPaciente= this.activatedRoute.snapshot.paramMap.get('idPaciente');
  }

}
