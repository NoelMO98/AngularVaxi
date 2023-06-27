import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //Pasamos componentes que se quieren desplegar a futuro en el web html
  declarations: [AppComponent, UsuarioComponent],
  //Incluye modulos o directivas que se usen a futuro en la aplicacion
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  //Se agregan los servicios que se incluiran en el proyecto
  providers: [],
  //Se indica cual es el componente principal de la aplicacion
  bootstrap: [AppComponent],
})
export class AppModule {}
