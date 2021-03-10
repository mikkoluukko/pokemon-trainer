import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login '
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'pokemon',
  //   component: PokemonContainer
  // },
  // {
  //   path: 'pokemon/:name',
  //   component: PokemonDetailContainer
  // },
  // {
  //   path: 'trainer',
  //   component: TrainerContainer
  // },
  // {
  //   path: '*',
  //   component: NotFoundContainer
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
