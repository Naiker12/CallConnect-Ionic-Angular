import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./presentation/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./presentation/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./presentation/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./presentation/pages/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./presentation/pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./presentation/pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
