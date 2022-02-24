import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './areas/usuarios/componentes/paciente/paciente.component';
import { CuidadorComponent } from './areas/usuarios/componentes/cuidador/cuidador.component';
import { AgendamentoComponent } from './areas/usuarios/componentes/agendamento/agendamento.component';
import { ConsultaComponent } from './areas/usuarios/componentes/consulta/consulta.component';
import { ColaboradorComponent } from './areas/admin/componentes/colaborador/colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    CuidadorComponent,
    AgendamentoComponent,
    ConsultaComponent,
    ColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
