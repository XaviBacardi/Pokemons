import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


export interface ReglasPokemon{
   id: number;
   name: string;
   sprites: object;
 

}

@Injectable({
  providedIn: 'root'
})
export class PokemonsdataService {

  constructor(

    private http: HttpClient

  ) { }

  //OBTENIENDO POKEMONS UNICAMENTE 20
  getPokemons(limite: number, offset: number){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}`);
  };

  //OBTENIENDO MAS POKEMONS
  getMorePokemons(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getSinglePokemon(id: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
