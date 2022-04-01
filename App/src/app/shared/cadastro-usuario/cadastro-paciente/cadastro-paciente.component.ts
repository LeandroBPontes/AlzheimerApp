import { Component, OnInit } from '@angular/core';
import { PacienteModel } from 'src/app/areas/usuarios/modelos/paciente/paciente.model';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  constructor(public service: PacienteService) { }
  filtro = new PacienteModel()
  titulo = "Tela de Cadastro de Pacientes"
  ngOnInit(): void {
  }

}
