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
import { DataGridColumnModel, NgxUiHeroModule } from 'ngx-ui-hero';
import { TelaCuidadorComponent } from './layout/tela-cuidador/tela-cuidador.component';


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
    TelaCuidadorComponent
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
    NgxUiHeroModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
