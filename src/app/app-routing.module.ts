import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./pages/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./pages/cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },
  {
    path: 'login-empresa',
    loadChildren: () => import('./pages/login-empresa/login-empresa.module').then( m => m.LoginEmpresaPageModule)
  },
  {
    path: 'cadastro-empresa',
    loadChildren: () => import('./pages/cadastro-empresa/cadastro-empresa.module').then( m => m.CadastroEmpresaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
