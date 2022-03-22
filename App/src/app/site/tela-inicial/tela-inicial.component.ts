import { Component, OnInit,TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent{

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
