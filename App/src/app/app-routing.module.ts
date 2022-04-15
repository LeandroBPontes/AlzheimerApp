import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAgendamentoComponent } from './areas/usuarios/componentes/agendamento/criar-agendamento/criar-agendamento.component';
import { FiltroAgendamentoComponent } from './areas/usuarios/componentes/agendamento/filtro-agendamento/filtro-agendamento.component';
import { PacienteComponent } from './areas/usuarios/componentes/paciente/paciente.component';
import { TelaCuidadorComponent } from './layout/tela-cuidador/tela-cuidador.component';
import { TelaLoginComponent } from './layout/tela-login/tela-login.component';
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
    path: 'tela-paciente/:id',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
