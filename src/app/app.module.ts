import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './shared/components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonProfileHeaderComponent } from './components/pokemon-detail/pokemon-profile-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { PokemonCardComponent } from './components/shared/pokemon-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    LoginComponent,
    NavbarComponent,
    CatalogueComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonProfileHeaderComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
