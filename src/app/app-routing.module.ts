import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pokemon',
    component: CatalogueComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login '
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
