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
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { NgxUiHeroApiModule, ApiSettings } from 'ngx-ui-hero';
import { CadastroDadosPacienteComponent } from './shared/cadastro-dados-paciente/cadastro-dados-paciente.component';
import { CadastroMedicamentoComponent } from './shared/cadastro-dados-paciente/cadastro-medicamento/cadastro-medicamento.component';
import { CadastroAtividadeComponent } from './shared/cadastro-dados-paciente/cadastro-atividade/cadastro-atividade.component';
import { CadastroSintomaComponent } from './shared/cadastro-dados-paciente/cadastro-sintoma/cadastro-sintoma.component';


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
    CadastroSintomaComponent
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
    NgxUiHeroApiModule.forRoot(apiSettings)
  
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
