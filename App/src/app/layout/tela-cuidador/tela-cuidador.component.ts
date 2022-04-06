import { Component, Input, OnInit } from '@angular/core';
import { DataGridColumnModel, EnumAlignment } from 'ngx-ui-hero';


@Component({
  selector: 'app-tela-cuidador',
  templateUrl: './tela-cuidador.component.html',
  styleUrls: ['./tela-cuidador.component.css']
})
export class TelaCuidadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   date = new Date();
   ano = this.date.getFullYear();
   @Input() data: any
   @Input() columns: any
   @Input() showActionsColumn: any
   @Input() initialColumnToSort: any
 

   myComplexDatagridModel: Array<any>;
   myComplexDatagridColumns: Array<DataGridColumnModel> = [
    {
      caption: 'Name',
      data: 'name',
    },
    {
      caption: 'E-mail',
      data: 'email'
    },
    {
      caption: 'Status',
      captionAlignment: EnumAlignment.Center,
      data: 'active',
      render: (row, currentData, index) => {
        return currentData ? "<span class='badge badge-success'>Ativo</span>" : "<span class='badge badge-danger'>Inativo</span>";
      },
      dataAlignment: EnumAlignment.Center,
      sortable: false
    }
  ];
}
