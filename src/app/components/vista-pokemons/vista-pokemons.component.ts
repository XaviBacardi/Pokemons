import { Component, OnInit } from '@angular/core';
import { PokemonsdataService, ReglasPokemon } from '../../services/pokemonsdata.service';

@Component({
  selector: 'app-vista-pokemons',
  templateUrl: './vista-pokemons.component.html',
  styleUrls: ['./vista-pokemons.component.css']
})
export class VistaPokemonsComponent implements OnInit {

  //arreglo para pushear la data referente a los pokemons
  pokemons: any[] = [];
  //paginas 
  page = 1;
  totalPokemons: number;


  constructor(
    private dataService: PokemonsdataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }


  getPokemons(){

    this.dataService.getPokemons(20, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach(elemento => {
          
          this.dataService.getMorePokemons(elemento.name)
            .subscribe((unicaRespuesta: any) => {
              this.pokemons.push(unicaRespuesta);
              
            });
        });
      });

  }

  
}