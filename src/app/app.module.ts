import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VistaPokemonsComponent } from './components/vista-pokemons/vista-pokemons.component';

import {POKE_ROUTING}  from "./app.routes";
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistaPokemonsComponent,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    POKE_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
