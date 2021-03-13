import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { SessionGuard } from './guards/session.guard';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pokemon',
    component: CatalogueComponent,
    canActivate: [ SessionGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailComponent,
    canActivate: [ SessionGuard ]
  },
  // {
  //   path: '*',
  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
