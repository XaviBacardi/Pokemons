import { RouterModule, Routes } from "@angular/router";

import { VistaPokemonsComponent } from "./components/vista-pokemons/vista-pokemons.component";
import {PokemonInfoComponent} from "./components/pokemon-info/pokemon-info.component";

const routes: Routes = [

    {path: 'home', component: VistaPokemonsComponent},
    {path: 'pokemon/:id', component: PokemonInfoComponent},
    {path: '**', redirectTo: "home"}
  

];


export const POKE_ROUTING = RouterModule.forRoot(routes);