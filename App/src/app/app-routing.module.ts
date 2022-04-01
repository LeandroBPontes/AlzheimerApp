import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'cadastro-paciente',
    component: CadastroPacienteComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
