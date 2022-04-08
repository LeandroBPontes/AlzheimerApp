import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteModel } from '../../modelos/paciente/paciente.model';
import { CuidadorService } from '../../servicos/cuidador/cuidador.service';
import { PacienteService } from '../../servicos/paciente/paciente.service';
import { ServicoBaseService } from '../../servicos/servico-base/servico-base.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  date = new Date();
  ano = this.date.getFullYear();
  @Input() data: any
  @Input() columns: any
  @Input() showActionsColumn: any
  @Input() initialColumnToSort: any

  idCuidador: any;
  idPaciente: any;

  textoDatagrid: string;
  medicamento = false
  atividade = false
  sintoma = false
  paciente: any;

  cadastroMedicamento = false;
  cadastroAtividade = false;
  cadastroSintoma = false;

  atividades : any;
  medicamentos : any;
  sintomas : any;

  Base = [
    {
      caption: 'Nome',
      data: 'nome',
    },
    {
      caption: 'Horário',
      data: 'horario',
    },
    {
      caption: 'Frequência',
      data: 'frequencia',
    },
   
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
     private service: CuidadorService, public router: Router,
     public serviceBase: ServicoBaseService) { }


  ngOnInit(): void {
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('id');
    //this.obterTodosPorIdCuidador(this.idCuidador)
   // console.log(this.idPaciente)
  }

  obterTodosPorIdCuidador(id){
    this.service.obterIdPacienteParaRota(id).subscribe(resultado => {
      this.idPaciente = resultado[0].id

      if(this.cadastroMedicamento){
       
        //this.cadastroMedicamento = false;
        return this.router.navigateByUrl(`/cadastro-medicamento/${this.idCuidador}/${this.idPaciente}`)
      }
      if(this.cadastroAtividade){
       // this.cadastroMedicamento = false;
        return this.router.navigateByUrl(`/cadastro-atividade/${this.idCuidador}/${this.idPaciente}`) 
      }
      if(this.cadastroSintoma){
        //this.cadastroMedicamento = false;
        return this.router.navigateByUrl(`/cadastro-sintoma/${this.idCuidador}/${this.idPaciente}`)
        
      }
      return false;
      }
    );
   
  }

  listarMedicamento(){
    this.textoDatagrid = "Medicamentos"
    this.medicamento = true;
    this.atividade = false;
    this.sintoma = false;

    this.serviceBase.buscarTodosMedicamentos().then(resultado => {
      this.medicamentos = resultado;
    });

  }
  listarAtividade(){
    this.textoDatagrid = "Atividades"
    this.atividade = true;
    this.medicamento = false;
    this.sintoma = false;

      this.serviceBase.buscarTodasAtividades().then(resultado => {
        this.atividades = resultado;
      });
    
  }
  listarSintoma(){
    this.textoDatagrid = "Sintomas"
    this.sintoma = true;
    this.medicamento = false;
    this.atividade = false;

    this.serviceBase.buscarTodaosSintomas().then(resultado => {
      this.sintomas = resultado;
    });
    
  }
  cadastrarMedicamento(){
    this.cadastroMedicamento = true;
    this.obterTodosPorIdCuidador(this.idCuidador)
  }
  cadastrarAtividade(){
    this.cadastroAtividade = true;
    this.obterTodosPorIdCuidador(this.idCuidador)

  }
  cadastrarSintoma(){
    this.cadastroSintoma = true;
    this.obterTodosPorIdCuidador(this.idCuidador)

  }
}
