import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './areas/usuarios/componentes/paciente/paciente.component';
import { CuidadorComponent } from './areas/usuarios/componentes/cuidador/cuidador.component';
import { AgendamentoComponent } from './areas/usuarios/componentes/agendamento/agendamento.component';
import { ConsultaComponent } from './areas/usuarios/componentes/consulta/consulta.component';
import { ColaboradorComponent } from './areas/admin/componentes/colaborador/colaborador.component';
import { TelaInicialComponent } from './site/tela-inicial/tela-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CadastroUsuarioComponent } from './shared/cadastro-usuario/cadastro-usuario/cadastro-usuario.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    CuidadorComponent,
    AgendamentoComponent,
    ConsultaComponent,
    ColaboradorComponent,
    TelaInicialComponent,
    CadastroUsuarioComponent
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
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
