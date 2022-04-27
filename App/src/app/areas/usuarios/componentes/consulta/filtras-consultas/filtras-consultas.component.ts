import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertService, BlockUi, EnumAlignment } from 'ngx-ui-hero';
import { ConsultaModel } from '../../../modelos/consulta/consulta.model';
import { AgendamentoService } from '../../../servicos/agendamento/agendamento.service';
import { ConsultaService } from '../../../servicos/consulta/consulta.service';
import { EditarConsultaComponent } from '../editar-consulta/editar-consulta.component';

@Component({
  selector: 'app-filtras-consultas',
  templateUrl: './filtras-consultas.component.html',
  styleUrls: ['./filtras-consultas.component.css']
})
export class FiltrasConsultasComponent implements OnInit {

  idPaciente: any;
  idCuidador: any;
  ngOnInit(): void {

    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
    
  }
  blockUi = new BlockUi();
  
  constructor(public activatedRoute: ActivatedRoute, private router: Router,
    private service: ConsultaService, public date: DatePipe,
     public modalService: BsModalService, private alertService: AlertService) { }
    
    consultasFiltrados:any;
  consultas = [
    {
      caption: 'Informações',
      data: 'resumo',
    },
    {
      caption: 'Data',
      data: 'dataConsulta',
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
      onClick: (rowIndex) =>{
        return this.router.navigateByUrl(`/exporta-consulta/${rowIndex.model.id}/${rowIndex.model.idAgendamento}/${this.idPaciente}/${this.idCuidador}`)
      },
      dataAlignment: EnumAlignment.Center,
      sortable: false,
     
    },
    
  ];

  filtro = new ConsultaModel();
  data: any;
  
  filtrar():any{
    this.blockUi.start('Filtrando...');
    this.filtro.idPaciente = this.idPaciente;
      this.service.filtrarConsultaPorData(
      this.filtro)
      .subscribe(resultado => {
      this.consultasFiltrados = resultado;

      }
      ); this.blockUi.stop();
    }

  limpar(){
    this.filtro = new ConsultaModel();
  }

  excluirConsulta(index: any) {
    this.alertService.question('Tem certeza que deseja excluir?', '', () => {
      this.blockUi.start('Excluindo Consulta')
      this.service
        .excluir(index.id)
        .subscribe(
          result => {
            console.log("sucesso")
            this.blockUi.stop();
            this.alertService.success('Tudo certo!', 'Consulta excluída com sucesso')
            setTimeout(function () { location.reload(); }, 3100);
          },
          err => {
            console.log("erro")
          }
        )

    });
  }

  editarConsulta(rowIndex: any) {
    let modalRef = this.modalService.show(EditarConsultaComponent, {
      class: "modal-lg",
      keyboard: false,
      initialState: {
        dados: rowIndex,
      },
    });
  }

}
