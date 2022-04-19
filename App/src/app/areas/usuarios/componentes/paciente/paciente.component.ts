import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { PacienteModel } from '../../modelos/paciente/paciente.model';
import { CuidadorService } from '../../servicos/cuidador/cuidador.service';
import { PacienteService } from '../../servicos/paciente/paciente.service';
import { ServicoBaseService } from '../../servicos/servico-base/servico-base.service';

import { ReportComponent } from 'ngx-ui-hero';


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

  @ViewChild('report') report: ReportComponent;

  Print(): void {
    this.report.Print();
  }


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
  cadastroAgendamento = false;

  gerenciarAgendamento = false;

  listaMedicamento = false;

  atividades: any;
  medicamentos: any;
  sintomas: any;

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
  }

  obterTodosPorIdCuidador(id) {
    this.idPaciente = this.service.obterIdPacienteParaRota(id).subscribe(resultado => {
      this.idPaciente = resultado[0].id

      if (this.cadastroMedicamento) {

        return this.router.navigateByUrl(`/cadastro-medicamento/${this.idCuidador}/${this.idPaciente}`)
      }
      if (this.cadastroAtividade) {

        return this.router.navigateByUrl(`/cadastro-atividade/${this.idCuidador}/${this.idPaciente}`)
      }
      if (this.cadastroSintoma) {

        return this.router.navigateByUrl(`/cadastro-sintoma/${this.idCuidador}/${this.idPaciente}`)
      }

      if (this.cadastroAgendamento) {

        return this.router.navigateByUrl(`/criar-agendamento/${this.idCuidador}/${this.idPaciente}`)
      }

      if (this.gerenciarAgendamento) {

        return this.router.navigateByUrl(`/filtrar-agendamento/${this.idCuidador}/${this.idPaciente}`)
      }

      return this.idPaciente;
    }
    );

  }
  listarMedicamento() {
    this.textoDatagrid = "Medicamentos"
    this.medicamento = true;

    this.atividade = false;
    this.sintoma = false;

    // //busca id do paciente
    this.service.obterIdPacienteParaRota(this.idCuidador).subscribe(resultado => {
      this.idPaciente = resultado[0].id;
      
       //busca medicamento por id
       this.serviceBase.obterMedicamentoPorIdPaciente(this.idPaciente).subscribe(resultado => {
        this.medicamentos = resultado;
      });
    
    });
    return true;
  }
  listarAtividade() {
    this.textoDatagrid = "Atividades"
    this.atividade = true;
    this.medicamento = false;
    this.sintoma = false;

    // //busca id do paciente
    this.service.obterIdPacienteParaRota(this.idCuidador).subscribe(resultado => {
      this.idPaciente = resultado[0].id;
      
       //busca medicamento por id
       this.serviceBase.obterAtividadePorIdPaciente(this.idPaciente).subscribe(resultado => {
        this.atividades = resultado;
      });
    
    });
    return true;
  }
  listarSintoma() {
    this.textoDatagrid = "Sintomas"
    this.sintoma = true;
    this.medicamento = false;
    this.atividade = false;

      // //busca id do paciente
    this.service.obterIdPacienteParaRota(this.idCuidador).subscribe(resultado => {
      this.idPaciente = resultado[0].id;
      
       //busca medicamento por id
       this.serviceBase.obterSintomaPorIdPaciente(this.idPaciente).subscribe(resultado => {
        this.sintomas = resultado;
      });
    
    });
    return true;
  }
  cadastrarMedicamento() {
    this.cadastroMedicamento = true;
    this.obterTodosPorIdCuidador(this.idCuidador)
  }
  cadastrarAtividade() {
    this.cadastroAtividade = true;
    this.obterTodosPorIdCuidador(this.idCuidador)

  }
  cadastrarSintoma() {
    this.cadastroSintoma = true;
    this.obterTodosPorIdCuidador(this.idCuidador)

  }


  excluirMedicamento(index: any) {
    var resposta = window.confirm("Tem certeza que deseja excluir esse medicamento?");
    if (resposta) {
      this.medicamento = false;

      this.serviceBase
        .excluirMedicamento(index.id)
        .subscribe()
      var resposta = window.confirm("Medicamento Excluído com Sucesso!");
      if (resposta)
        return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
    }

    return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
  }
  excluirAtividade(index: any) {
    var resposta = window.confirm("Tem certeza que deseja excluir essa atividade?");
    if (resposta) {
      this.atividade = false;
      this.serviceBase
        .ExcluirAtividade(index.id)
        .subscribe()
      var resposta = window.confirm("Atividade Excluída com Sucesso!");
      if (resposta)
        return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
    }

    return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
  }
  excluirSintoma(index: any) {
    var resposta = window.confirm("Tem certeza que deseja excluir esse sintoma?");
    if (resposta) {
      this.sintoma = false;
      this.serviceBase
        .excluirSintoma(index.id)
        .subscribe()
      var resposta = window.confirm("Sintoma Excluído com Sucesso!");
      if (resposta)
        return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
    }

    return this.router.navigate([`/tela-paciente/${this.idCuidador}`]);
  }


  gerenciarAgendamentos() {
    this.gerenciarAgendamento = true;
    this.obterTodosPorIdCuidador(this.idCuidador)
  }

  criarAgendamento() {
    this.cadastroAgendamento = true;
    this.obterTodosPorIdCuidador(this.idCuidador)
  }
  inicio(){
    return this.router.navigateByUrl(`/tela-cuidador/${this.idCuidador}`)
  }
}
