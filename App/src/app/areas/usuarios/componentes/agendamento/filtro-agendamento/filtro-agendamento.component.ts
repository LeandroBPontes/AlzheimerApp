import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertService, BlockUi, EnumAlignment } from 'ngx-ui-hero';
import { finalize } from 'rxjs/operators';
import { AgendamentoModel } from '../../../modelos/agendamento/agendamento.model';
import { AgendamentoService } from '../../../servicos/agendamento/agendamento.service';
import { ConsultaService } from '../../../servicos/consulta/consulta.service';
import { AgendamentoComponent } from '../agendamento.component';
import { EditarAgendamentoComponent } from '../editar-agendamento/editar-agendamento.component';

@Component({
  selector: 'app-filtro-agendamento',
  templateUrl: './filtro-agendamento.component.html',
  styleUrls: ['./filtro-agendamento.component.css']
})
export class FiltroAgendamentoComponent implements OnInit {

  idPaciente: any;
  idCuidador: any;
  ngOnInit(): void {
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
  }
 

  constructor(public activatedRoute: ActivatedRoute, private router: Router,
    private service: AgendamentoService,
    public date: DatePipe, public modalService: BsModalService,
    private alertService: AlertService, private consultaService: ConsultaService) { }

  agendamentosFiltrados: any;
  blockUi = new BlockUi();
  blockUiConsultas = new BlockUi();

  agendamentos = [
    {
      caption: 'Endereço',
      data: 'endereco',
    },
    {
      caption: 'Especialidade',
      data: 'especialidade',
    },
    {
      caption: 'Feito Pelo Plano',
      data: 'feitoPeloPlano',
      captionAlignment: EnumAlignment.Center,
      render: (row, currentData, index) => {
        if (!currentData)
          return 'Não';
        return 'Sim'
      },
      filterable: true
    },
    {
      caption: 'Data',
      data: 'dataAgendamento',
      captionAlignment: EnumAlignment.Center,
      render: (row, currentData, index) => {
        if (!currentData)
          return null;
        return (new Date(currentData)).toLocaleDateString();
      },
      filterable: true
    },
    {
      caption: 'Imprimir',
      captionAlignment: EnumAlignment.Center,
      render: (row, currentData, index) => {
        return "<button type='button'class='btn btn-danger btn-sm'><i class='fa fa-file-pdf-o'></i></button>"
      },
      onClick: (rowIndex) => {
        return this.router.navigateByUrl(`/exporta-agendamento/${rowIndex.model.id}/${this.idPaciente}/${this.idCuidador}`)
      },
      dataAlignment: EnumAlignment.Center,
      sortable: false,

    },

  ];

  filtro = new AgendamentoModel();
  data: any;


  filtrar(): any {
    this.blockUi.start('Filtrando...');
    this.filtro.idPaciente = this.idPaciente;
    this.service.filtrarAgendamentoPorData(
      this.filtro)
      .subscribe(resultado => {
        this.agendamentosFiltrados = resultado;
      }
      ); this.blockUi.stop();
  }

  limpar() {
    this.filtro = new AgendamentoModel();
  }

  excluirConsulta(id) {
    this.blockUi.start('Excluindo Consultas...');
    this.consultaService
      .excluirConsulta(id)
      .subscribe(
        result => {
          console.log("sucesso")
          this.blockUi.stop();
        },
        err => {
          console.log("erro")
        }
      )
  }

  excluirAgendamento(index: any) {
    this.alertService.question('Tem certeza que deseja excluir?','Você perderá também as consultas referentes a esse agendamento', () => {
      // excluir primeiro as consultas com dependencia do agendamento
      this.excluirConsulta(index.id);

      this.blockUi.start('Excluindo Agendamentos')
      //excluindo agendamentos
      this.service
        .excluirAgendamento(index.id)
        .subscribe(
          result => {
            console.log("sucesso")
            this.blockUi.stop();
            this.alertService.success('Tudo certo!', 'Agendamento excluído com sucesso')
            this.router.navigate([`/filtrar-agendamento/${this.idCuidador}/${this.idPaciente}`])
              .then(nav => {
                setTimeout(function () { location.reload(); }, 3100);
              });
          },
          err => {
            console.log("erro")
          }
        )

    });
  }

  editarAgendamento(rowIndex: any) {
    let modalRef = this.modalService.show(EditarAgendamentoComponent, {
      class: "modal-lg",
      keyboard: false,
      initialState: {
        dados: rowIndex,
      },
    });
  }

}
