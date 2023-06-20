import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoNewPaisComponent } from './hijo-new-pais/hijo-new-pais.component';
import { PadrePaisesComponent } from './padre-paises/padre-paises.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';

@NgModule({
  declarations: [
    AppComponent,    
    HijoNewPaisComponent,
    PadrePaisesComponent,
    ListadoPaisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
