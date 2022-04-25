import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-ui-hero';
import { ConsultaModel } from '../../../modelos/consulta/consulta.model';
import { ConsultaService } from '../../../servicos/consulta/consulta.service';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.component.html',
  styleUrls: ['./criar-consulta.component.css']
})
export class CriarConsultaComponent implements OnInit {

  constructor(public service: ConsultaService, private router: Router,
    private activatedRoute: ActivatedRoute, private alertService: AlertService) { }
  
    idAgendamento: any;
    idCuidador: any;
    idPaciente:any;

  ngOnInit(): void {
    
    this.idAgendamento = this.activatedRoute.snapshot.paramMap.get('idAgendamento');
    this.idPaciente = this.activatedRoute.snapshot.paramMap.get('idPaciente');
    this.idCuidador = this.activatedRoute.snapshot.paramMap.get('idCuidador');
  
  }
  filtro = new ConsultaModel();
  titulo = "Criar Consulta"

  inserir(){
    this.filtro.idAgendamento = this.idAgendamento;
    this.service
    .inserir(this.filtro)
    .subscribe(
      result => {
        console.log("sucesso")
      },
      err => {
        console.log("erro")
      }
        )
        this.alertService.success('Consulta realizado com sucesso!', ''); 
        //return this.router.navigate([`/criar-agendamento/${this.idCuidador}/${this.idPaciente}`]);   
  }
  

  limpar(){
    this.filtro = new ConsultaModel();
  }
}
