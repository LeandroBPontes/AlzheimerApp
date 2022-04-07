import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './areas/usuarios/componentes/paciente/paciente.component';
import { TelaCuidadorComponent } from './layout/tela-cuidador/tela-cuidador.component';
import { TelaLoginComponent } from './layout/tela-login/tela-login.component';
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
    path: 'tela-paciente',
    component: PacienteComponent 
  },
  { 
    path: 'tela-login',
    component: TelaLoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
