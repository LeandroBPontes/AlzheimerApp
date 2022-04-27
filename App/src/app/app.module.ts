import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './areas/usuarios/componentes/paciente/paciente.component';
import { CuidadorComponent } from './areas/usuarios/componentes/cuidador/cuidador.component';
import { AgendamentoComponent } from './areas/usuarios/componentes/agendamento/agendamento.component';
import { ConsultaComponent } from './areas/usuarios/componentes/consulta/consulta.component';
import { TelaInicialComponent } from './site/tela-inicial/tela-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MenuComponent } from './layout/menu/menu/menu.component';
import { CadastroCuidadorComponent } from './shared/cadastro-usuario/cadastro-cuidador/cadastro-cuidador.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroPacienteComponent } from './shared/cadastro-usuario/cadastro-paciente/cadastro-paciente.component';
import { CadastroBaseComponent } from './shared/cadastro-usuario/cadastro-base/cadastro-base.component';
import { DataGridColumnModel, DataGridConfig, EnumAutoFitMode, EnumDataGridMode, NgxUiHeroDataGridModule, NgxUiHeroModule } from 'ngx-ui-hero';
import { TelaCuidadorComponent } from './layout/tela-cuidador/tela-cuidador.component';
import { TelaLoginComponent } from './layout/tela-login/tela-login.component';
import { AlertService } from 'ngx-ui-hero';
import { NgxUiHeroApiModule, ApiSettings} from 'ngx-ui-hero';
import { CadastroDadosPacienteComponent } from './shared/cadastro-dados-paciente/cadastro-dados-paciente.component';
import { CadastroMedicamentoComponent } from './shared/cadastro-dados-paciente/cadastro-medicamento/cadastro-medicamento.component';
import { CadastroAtividadeComponent } from './shared/cadastro-dados-paciente/cadastro-atividade/cadastro-atividade.component';
import { CadastroSintomaComponent } from './shared/cadastro-dados-paciente/cadastro-sintoma/cadastro-sintoma.component';
import {
  ChartsConfig
} from 'ngx-ui-hero';
import { TelaCuidadorModalComponent } from './layout/tela-cuidador/tela-cuidador-modal/tela-cuidador-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CriarAgendamentoComponent } from './areas/usuarios/componentes/agendamento/criar-agendamento/criar-agendamento.component';
import { NgxUiHeroInputFormsModule, InputFormsConfig } from 'ngx-ui-hero';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { FiltroAgendamentoComponent } from './areas/usuarios/componentes/agendamento/filtro-agendamento/filtro-agendamento.component';
import { DatePipe } from '@angular/common';
import { EscolhaPacienteComponent } from './areas/usuarios/componentes/paciente/escolha-paciente/escolha-paciente.component';
import { EditarBaseComponent } from './shared/editar-base/editar-base.component';
import { TelaSobreComponent } from './layout/tela-sobre/tela-sobre.component';
import { CriarConsultaComponent } from './areas/usuarios/componentes/consulta/criar-consulta/criar-consulta.component';
import { EscolhaAgendamentoComponent } from './areas/usuarios/componentes/agendamento/escolha-agendamento/escolha-agendamento.component';
import { FiltrasConsultasComponent } from './areas/usuarios/componentes/consulta/filtras-consultas/filtras-consultas.component';
import { EditarAgendamentoComponent } from './areas/usuarios/componentes/agendamento/editar-agendamento/editar-agendamento.component';
import { EditarConsultaComponent } from './areas/usuarios/componentes/consulta/editar-consulta/editar-consulta.component';
defineLocale('pt-br', ptBrLocale);

export const dataGridSettings: DataGridConfig = {
  emptyResultsMessage: 'No results found at this moment.',
  infoMessage: 'Showing records from {recordsFrom} to {recordsTo} of {totalRecords} records found.',
  actionsColumnCaption: '#',
  mode: EnumDataGridMode.OnClient,
  autoFitMode: EnumAutoFitMode.ByContent,
  allowColumnResize: true,
  paging: {
    firstText: 'First',
    previousText: 'Previous',
    nextText: 'Next',
    lastText: 'Last',
    boundaryLinks: true,
    directionLinks: true,
    rotate: true,
    maxSize: 10,
    itemsPerPage: 10,
  },
  styles: {
    animated: true,
    striped: true,
    bordered: true,
    hoverEffect: true,
    responsive: true
  },
  exporting: {
    allowExports: false,
    exportButtonLabel: 'Export',
    exportedFileName: 'Export',
    exportedExcelSheetName: 'Sheet'
  },
  filtering: {
    allowColumnFilters: true,
    filterPlaceholder: 'Filter...',
    filterPlacement: 'top'
  },
  reordering: {
    allowColumnReorder: true
  }
};
export const apiSettings: ApiSettings = {
  apiBaseUrl: 'http://yourdomain.com',
  apiAlias: 'api',
  localStoragePrefix: 'myDemoAppPrefix_',
  jwtLocalStorageSuffix: 'access_token',
  responseDataPropertyName: 'data'
};
export const inputFormsConfig: InputFormsConfig = {
  currency: {
    currencyCode: 'USD',
    align: 'right',
    allowNegative: true,
    allowZero: true,
    decimal: '.',
    thousands: ',',
    precision: 2,
    prefix: '',
    suffix: ''
  },
  validationMessages: {
    invalid: '{label} is invalid',
    required: '{label} is required',
    pattern: '{label} is invalid',
    maxlength: 'The filled-in value is greater than the maximum allowed',
    minlength: 'The filled-in value is less than the minimum allowed'
  },
  date: {
    format: 'dd/MM/yyyy',
    theme: 'theme-dark-blue',
    placement: 'bottom',
    locale: 'pt-br'
  },
  upload: {
    placeholder: 'Select a file to upload...',
    dropZonePlaceholder: 'Drag & drop a file to import.',
    autoUpload: true,
    showDropZone: true,
    showQueue: true,
    withCredentials: false,
    chunk: false,
    chunkSize: 1048576,
    chunkRetries: 3,
    chunkRequestsCountInParallel: 50,
    maxFileSize: 4,
    selectButtonIcon: 'fa fa-folder',
    selectButtonLabel: 'Select',
    removeButtonIcon: 'fa fa-trash',
    removeButtonLabel: 'Remove',
    fileTypeErrorMessage: 'The file type [{extension}] is not allowed.',
    fileSizeErrorMessage: 'This file exceeds the max file size allowed of {maxFileSize}MB.',
    maxFileSizeLabel: 'Max file size:',
    allowedExtensionsLabel: 'Allowed extensions:'
  },
  multiSelect: {
    placeholder: 'Select...',
    searchPlaceholder: 'Search...',
    displayTextProperty: 'text',
    valueProperty: 'value',
    emptyMessage: 'No results found.',
    selectAllButtonLabel: 'Select all',
    clearSelectionButtonLabel: 'Clear selection',
    maxCountOfLabelsToShow: 3
  },
  monthYear: {
    placeholder: 'Select...',
    language: 'en',
    format: 'MMM/yyyy'
  },
  dropDown: {
    placeholder: 'Select...',
    searchPlaceholder: 'Search...',
    emptyResultsMessage: 'No results found at this moment.',
    displayTextProperty: 'text',
    valueProperty: 'value',
    clearSelectionButtonLabel: 'Clear',
  }
};
@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    CuidadorComponent,
    AgendamentoComponent,
    ConsultaComponent,
    TelaInicialComponent,
    CadastroCuidadorComponent,
    MenuComponent,
    CadastroPacienteComponent,
    CadastroBaseComponent,
    TelaCuidadorComponent,
    TelaLoginComponent,
    CadastroDadosPacienteComponent,
    CadastroMedicamentoComponent,
    CadastroAtividadeComponent,
    CadastroSintomaComponent,
    TelaCuidadorModalComponent,
    CriarAgendamentoComponent,
    FiltroAgendamentoComponent,
    EscolhaPacienteComponent,
    EditarBaseComponent,
    TelaSobreComponent,
    CriarConsultaComponent,
    EscolhaAgendamentoComponent,
    FiltrasConsultasComponent,
    EditarAgendamentoComponent,
    EditarConsultaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDividerModule,
    MatFormFieldModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxUiHeroModule,
    NgxUiHeroDataGridModule.forRoot(dataGridSettings),
    NgxUiHeroApiModule.forRoot(apiSettings),
    NgxUiHeroInputFormsModule.forRoot(inputFormsConfig)
  ],
  providers: [AlertService, DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
