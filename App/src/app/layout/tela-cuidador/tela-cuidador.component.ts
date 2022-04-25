import { Component, Input, OnInit } from '@angular/core';
import { AlertService, DataGridColumnModel, EnumAlignment } from 'ngx-ui-hero';
import { CuidadorService } from 'src/app/areas/usuarios/servicos/cuidador/cuidador.service';
import { PacienteService } from 'src/app/areas/usuarios/servicos/paciente/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TelaCuidadorModalComponent } from './tela-cuidador-modal/tela-cuidador-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tela-cuidador',
  templateUrl: './tela-cuidador.component.html',
  styleUrls: ['./tela-cuidador.component.css']
})
export class TelaCuidadorComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(public service: CuidadorService, public servicePaciente: PacienteService, private router: Router,
    private activatedRoute: ActivatedRoute, public modalService: BsModalService, private alertService: AlertService) { }
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
  isLoading: any;


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
      captionAlignment: EnumAlignment.Center,
      render: (row, currentData, index) => {
        if (!currentData)
          return 'Não';
          return 'Sim'
      },
      filterable: true
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
      captionAlignment: EnumAlignment.Center,
      render: (row, currentData, index) => {
        if (!currentData)
          return 'Não';
          return 'Sim'
      },
      filterable: true
    }
  ];

  passaUrlCadastroPaciente() {
    return this.router.navigate([`/cadastro-paciente/${this.id}`]);
  }
  passaUrlPaciente() {
    return this.router.navigate([`/escolha-paciente/${this.id}`]);
  }
  obterTodosPorIdCuidador(id) {
    this.service.obterPacientePorId(id).subscribe(resultado => {
      this.data = resultado;
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
  editarPaciente(rowIndex: any) {
    let modalRef = this.modalService.show(TelaCuidadorModalComponent, {
      class: "modal-lg",
      keyboard: false,
      initialState: {
        dados: rowIndex,
      },
    });

  }
  excluirPaciente(rowIndex) {
    this.alertService.question('Tem certeza que deseja excluir esse paciente?!', '', () => {
      // your success callback code.
      this.isLoading = true;
      this.servicePaciente.excluir(rowIndex.id)
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
      this.alertService.success('Tudo certo!', 'Paciente excluído com sucesso')
      this.router.navigate([`/tela-cuidador/${this.id}`])
        .then(nav => {
          setTimeout(function () { location.reload(); }, 3000);
        });
    });
    this.router.navigate([`/tela-cuidador/${this.id}`])
      .then(nav => {
        setTimeout(function () { location.reload(); }, 3000);
      });
  }
  
  excluirCuidador() {
    this.alertService.question('Tem certeza que deseja excluir sua conta?!', '', () => {
      // your success callback code.
      this.isLoading = true;
      this.service.excluir(this.id)
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
        this.alertService.success('Tudo certo!', 'Sua conta foi excluída com sucesso')
        this.router.navigate([`/`])
          .then(nav => {
            setTimeout(function () { location.reload(); }, 8000);
          });
      });
      return this.router.navigate([`/tela-cuidador/${this.id}`])
    }
    
  editarCuidador() {

  }
}

