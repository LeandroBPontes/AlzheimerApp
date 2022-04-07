import { Component, Input, OnInit } from '@angular/core';
import { DataGridColumnModel, EnumAlignment } from 'ngx-ui-hero';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tela-cuidador',
  templateUrl: './tela-cuidador.component.html',
  styleUrls: ['./tela-cuidador.component.css']
})
export class TelaCuidadorComponent implements OnInit {

  constructor(public service: CuidadorService, public servicePaciente: PacienteService, private router: Router,
    private activatedRoute: ActivatedRoute) { }
  nome: any;
  id: any;


  ngOnInit(): void {
    //recuperando o nome pelo login
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.obterCuidador(this.id);
    this.obterTodosPorIdCuidador(this.id)
  }
  date = new Date();
  ano = this.date.getFullYear();
  @Input() data: any
  @Input() columns: any
  @Input() showActionsColumn: any
  @Input() initialColumnToSort: any


  pacientes = [
    {
      caption: 'Nome',
      data: 'nome',
    },
    {
      caption: 'Idade',
      data: 'idade',
    },
    {
      caption: 'Sexo',
      data: 'sexo',
    },
    {
      caption: 'Possui Filho',
      data: 'possuiFilho',
    },
    {
      caption: 'Estado Civil',
      data: 'estadoCivil',
    },
    {
      caption: 'Identificador',
      data: 'role',
    },
    {
      caption: 'Possui Plano',
      data: 'possuiPlano',
    }
  ];
  
  passaUrlPaciente(){
    return this.router.navigate([`/cadastro-paciente/${this.id}`]);
  }
  obterTodosPorIdCuidador(id){
    this.service.obterPacientePorId(id).subscribe(resultado => {
      this.data= resultado;
    });
  }
  obterCuidador(id) {
    this.service.buscarPorId(id).subscribe(resultado => {
      this.nome = resultado.nome;
    }
    );
  }
  sair() {
    return this.router.navigate(['/tela-login']);
  }
}
