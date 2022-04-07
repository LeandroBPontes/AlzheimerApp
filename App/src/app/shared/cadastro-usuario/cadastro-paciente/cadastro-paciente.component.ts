import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteModel } from 'src/app/areas/usuarios/modelos/paciente/paciente.model';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  constructor(public service: PacienteService,  private activatedRoute: ActivatedRoute ) { }
  filtro = new PacienteModel()
  titulo = "Tela de Cadastro de Pacientes"
  
  id:any;

  ngOnInit(): void {
    //recuperando o nome pelo login
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   
  }

}
