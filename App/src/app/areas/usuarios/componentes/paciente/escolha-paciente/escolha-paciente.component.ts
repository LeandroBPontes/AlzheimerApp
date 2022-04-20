import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataGridColumnModel } from 'ngx-ui-hero';
import { PacienteModel } from '../../../modelos/paciente/paciente.model';
import { CuidadorService } from '../../../servicos/cuidador/cuidador.service';
import { PacienteService } from '../../../servicos/paciente/paciente.service';

@Component({
  selector: 'app-escolha-paciente',
  templateUrl: './escolha-paciente.component.html',
  styleUrls: ['./escolha-paciente.component.css']
})
export class EscolhaPacienteComponent implements OnInit {

  constructor(public service: CuidadorService, public servicePaciente: PacienteService, private router: Router,
    private activatedRoute: ActivatedRoute) { }
  
    id: any;
    idPaciente: any;
    data:any;
    nome:any;


  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.paramMap.get('idCuidador');
    this.obterTodosPorIdCuidador(this.id)
  }
  dropdownGridColumns: Array<DataGridColumnModel> = [
    {
      caption: 'Nome',
      data: 'nome',
    },
    {
      caption: 'Idade',
      data: 'idade'
    }
  ];
  
  obterTodosPorIdCuidador(id){
    this.service.obterPacientePorId(id).subscribe(resultado => {
      this.data = resultado;
    });
  }

  limpar(){

  }
  gerenciar(idPaciente){
    return this.router.navigate([`/tela-paciente/${this.id}/${idPaciente}`]);
  }

}
