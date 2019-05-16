import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'videopoadcast', loadChildren: './videopoadcast/videopoadcast.module#VideopoadcastPageModule' },
  { path: 'programas', loadChildren: './programas/programas.module#ProgramasPageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'ambientelince', loadChildren: './ambientelince/ambientelince.module#AmbientelincePageModule' },
  { path: 'comunicacion', loadChildren: './comunicacion/comunicacion.module#ComunicacionPageModule' },
  { path: 'galerias', loadChildren: './galerias/galerias.module#GaleriasPageModule' },
  { path: 'deportes', loadChildren: './deportes/deportes.module#DeportesPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'culturales', loadChildren: './culturales/culturales.module#CulturalesPageModule' },
  { path: 'cidetec', loadChildren: './cidetec/cidetec.module#CidetecPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
