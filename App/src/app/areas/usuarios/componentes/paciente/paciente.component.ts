import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { PacienteModel } from '../../modelos/paciente/paciente.model';
import { CuidadorService } from '../../servicos/cuidador/cuidador.service';
import { PacienteService } from '../../servicos/paciente/paciente.service';
import { ServicoBaseService } from '../../servicos/servico-base/servico-base.service';

import { AlertService, ReportComponent } from 'ngx-ui-hero';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EditarBaseComponent } from 'src/app/shared/editar-base/editar-base.component';


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

  isLoading: boolean

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
    public serviceBase: ServicoBaseService, private alertService: AlertService, public modalService: BsModalService) { }


  ngOnInit(): void {
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('id');
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
  }


  listarMedicamento() {
    this.textoDatagrid = "Medicamentos"
    this.medicamento = true;

    this.atividade = false;
    this.sintoma = false;

    //busca medicamento por id
    this.serviceBase.obterMedicamentoPorIdPaciente(this.idPaciente).subscribe(resultado => {
      this.medicamentos = resultado;
    });

    return true;
  }
  listarAtividade() {
    this.textoDatagrid = "Atividades"
    this.atividade = true;
    this.medicamento = false;
    this.sintoma = false;


    //busca medicamento por id
    this.serviceBase.obterAtividadePorIdPaciente(this.idPaciente).subscribe(resultado => {
      this.atividades = resultado;
    });

    return true;
  }
  listarSintoma() {
    this.textoDatagrid = "Sintomas"
    this.sintoma = true;
    this.medicamento = false;
    this.atividade = false;

    //busca medicamento por id
    this.serviceBase.obterSintomaPorIdPaciente(this.idPaciente).subscribe(resultado => {
      this.sintomas = resultado;
    });

    return true;
  }
  cadastrarMedicamento() {
    return this.router.navigateByUrl(`/cadastro-medicamento/${this.idCuidador}/${this.idPaciente}`)
  }
  cadastrarAtividade() {
    return this.router.navigateByUrl(`/cadastro-atividade/${this.idCuidador}/${this.idPaciente}`)

  }
  cadastrarSintoma() {
    return this.router.navigateByUrl(`/cadastro-sintoma/${this.idCuidador}/${this.idPaciente}`)

  }
  editarMedicamento(rowIndex: any) {
    let modalRef = this.modalService.show(EditarBaseComponent, {
      class: "modal-lg",
      keyboard: false,
      initialState: {
        dados: rowIndex,
        medicamento: true
      },
    });
  }
  editarSintoma(rowIndex: any) {
    let modalRef = this.modalService.show(EditarBaseComponent, {
      class: "modal-lg",
      keyboard: false,
      initialState: {
        dados: rowIndex,
        sintoma: true
      },
    });
  }
  editarAtividade(rowIndex: any) {
    let modalRef = this.modalService.show(EditarBaseComponent, {
      class: "modal-lg",
      keyboard: false,
      initialState: {
        dados: rowIndex,
        atividade: true
      },
    });
  }


  excluirMedicamento(index: any) {
    this.alertService.question('Tem certeza que deseja excluir esse medicamento?!', '', () => {
      // your success callback code.
      this.isLoading = true;
      this.medicamento = false;

      this.serviceBase
        .excluirMedicamento(index.id)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe(
          result => {
            console.log("sucesso")

          },
          err => {
            console.log("erro")
          }
        )
      this.alertService.success('Tudo certo!', 'Medicamento excluído com sucesso')
      this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 3100);
        });
    });
    this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
      .then(nav => {
        setTimeout(function () { location.reload(); }, 3100);
      });
  }

  excluirAtividade(index: any) {
    this.alertService.question('Tem certeza que deseja excluir essa atividade?!', '', () => {
      // your success callback code.
      this.isLoading = true;
      this.atividade = false;

      this.serviceBase
        .ExcluirAtividade(index.id)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe(
          result => {
            console.log("sucesso")

          },
          err => {
            console.log("erro")
          }
        )
      this.alertService.success('Tudo certo!', 'Atividade excluída com sucesso')
      this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 3100);
        });
    });
    this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
      .then(nav => {
        setTimeout(function () { location.reload(); }, 3100);
      });
  }
  excluirSintoma(index: any) {
    this.alertService.question('Tem certeza que deseja excluir esse sintoma?!', '', () => {
      // your success callback code.
      this.isLoading = true;
      this.sintoma = false;

      this.serviceBase
        .excluirSintoma(index.id)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe(
          result => {
            console.log("sucesso")

          },
          err => {
            console.log("erro")
          }
        )
      this.alertService.success('Tudo certo!', 'Sintoma excluído com sucesso')
      this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 3100);
        });
    });
    this.router.navigate([`/tela-paciente/${this.idCuidador}/${this.idPaciente}`])
      .then(nav => {
        setTimeout(function () { location.reload(); }, 3100);
      });
  }


  gerenciarAgendamentos() {
    return this.router.navigateByUrl(`/filtrar-agendamento/${this.idCuidador}/${this.idPaciente}`)
  }

  criarAgendamento() {
    return this.router.navigateByUrl(`/criar-agendamento/${this.idCuidador}/${this.idPaciente}`)
  }
  inicio() {
    return this.router.navigateByUrl(`/tela-cuidador/${this.idCuidador}`)
  }
}
