import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './componentes/top-navbar/top-navbar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { VentajasComponent } from './componentes/ventajas/ventajas.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavbarComponent,
    IntroComponent,
    VentajasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
