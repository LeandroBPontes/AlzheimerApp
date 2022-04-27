import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './areas/usuarios/componentes/agendamento/agendamento.component';
import { CriarAgendamentoComponent } from './areas/usuarios/componentes/agendamento/criar-agendamento/criar-agendamento.component';
import { EscolhaAgendamentoComponent } from './areas/usuarios/componentes/agendamento/escolha-agendamento/escolha-agendamento.component';
import { FiltroAgendamentoComponent } from './areas/usuarios/componentes/agendamento/filtro-agendamento/filtro-agendamento.component';
import { ConsultaComponent } from './areas/usuarios/componentes/consulta/consulta.component';
import { CriarConsultaComponent } from './areas/usuarios/componentes/consulta/criar-consulta/criar-consulta.component';
import { FiltrasConsultasComponent } from './areas/usuarios/componentes/consulta/filtras-consultas/filtras-consultas.component';
import { EscolhaPacienteComponent } from './areas/usuarios/componentes/paciente/escolha-paciente/escolha-paciente.component';
import { PacienteComponent } from './areas/usuarios/componentes/paciente/paciente.component';
import { TelaCuidadorComponent } from './layout/tela-cuidador/tela-cuidador.component';
import { TelaLoginComponent } from './layout/tela-login/tela-login.component';
import { TelaSobreComponent } from './layout/tela-sobre/tela-sobre.component';
import { CadastroAtividadeComponent } from './shared/cadastro-dados-paciente/cadastro-atividade/cadastro-atividade.component';
import { CadastroDadosPacienteComponent } from './shared/cadastro-dados-paciente/cadastro-dados-paciente.component';
import { CadastroMedicamentoComponent } from './shared/cadastro-dados-paciente/cadastro-medicamento/cadastro-medicamento.component';
import { CadastroSintomaComponent } from './shared/cadastro-dados-paciente/cadastro-sintoma/cadastro-sintoma.component';
import { CadastroCuidadorComponent } from './shared/cadastro-usuario/cadastro-cuidador/cadastro-cuidador.component';
import { CadastroPacienteComponent } from './shared/cadastro-usuario/cadastro-paciente/cadastro-paciente.component';
import { TelaInicialComponent } from './site/tela-inicial/tela-inicial.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/tela-inicial', 
    pathMatch: 'full' 
  },
  { 
    path: 'tela-inicial',
    component: TelaInicialComponent 
  },
  { 
    path: 'cadastro-usuario',
    component: CadastroCuidadorComponent 
  },
  { 
    path: 'cadastro-paciente/:id',
    component: CadastroPacienteComponent 
  },
  { 
    path: 'tela-cuidador/:id',
    component: TelaCuidadorComponent 
  },
  { 
    path: 'tela-paciente/:id/:idPaciente',
    component: PacienteComponent 
  },
  { 
    path: 'tela-login',
    component: TelaLoginComponent 
  },
  { 
    path: 'cadastro-medicamento/:idCuidador/:idPaciente',
    component: CadastroMedicamentoComponent 
  },
  { 
    path: 'cadastro-atividade/:idCuidador/:idPaciente',
    component: CadastroAtividadeComponent 
  },
  { 
    path: 'cadastro-sintoma/:idCuidador/:idPaciente',
    component: CadastroSintomaComponent 
  },
  { 
    path: 'criar-agendamento/:idCuidador/:idPaciente',
    component: CriarAgendamentoComponent
  },
  { 
    path: 'filtrar-agendamento/:idCuidador/:idPaciente',
    component: FiltroAgendamentoComponent
  },
  { 
    path: 'escolha-paciente/:idCuidador',
    component: EscolhaPacienteComponent
  },
  { 
    path: 'exporta-agendamento/:idAgendamento/:idPaciente/:idCuidador',
    component:AgendamentoComponent
  },
  { 
    path: 'exporta-consulta/:idConsulta/:idAgendamento/:idPaciente/:idCuidador',
    component:ConsultaComponent
  },
  { 
    path: 'tela-sobre',
    component:TelaSobreComponent
  },
  { 
    path: 'criar-consulta/:idAgendamento/:idPaciente/:idCuidador',
    component:CriarConsultaComponent
  },
  { 
    path: 'escolha-agendamento/:idPaciente/:idCuidador',
    component:EscolhaAgendamentoComponent
  },
  { 
    path: 'filtrar-consulta/:idPaciente/:idCuidador',
    component:FiltrasConsultasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
