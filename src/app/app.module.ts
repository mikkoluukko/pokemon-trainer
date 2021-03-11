import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './shared/components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    LoginComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
