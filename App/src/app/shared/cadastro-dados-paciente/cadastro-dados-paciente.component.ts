import { Component, Input, OnInit } from '@angular/core';
import { BaseModel } from 'src/app/areas/usuarios/modelos/base/base.model';
import { ServicoBaseService } from 'src/app/areas/usuarios/servicos/servico-base/servico-base.service';

@Component({
  selector: 'app-cadastro-dados-paciente',
  templateUrl: './cadastro-dados-paciente.component.html',
  styleUrls: ['./cadastro-dados-paciente.component.css']
})
export class CadastroDadosPacienteComponent implements OnInit {
  filtro = new BaseModel();
  
  @Input() titulo: string;
  idPaciente: number;
  idCuidador: number;
  @Input() medicamentoAtributo: boolean = false;
  @Input() sintomaAtributo: boolean = false;
  @Input() atividadeAtributo: boolean = false;
  constructor(public service: ServicoBaseService) { }

  ngOnInit(): void {
  }
  limpar(){

  }
  inserir(){

  }

}
