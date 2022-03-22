import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCuidadorComponent } from './shared/cadastro-usuario/cadastro-usuario/cadastro-cuidador.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
