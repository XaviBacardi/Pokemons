import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {PokemonsdataService} from '../../services/pokemonsdata.service'

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemon: any[] = [];

  constructor(
    private ParamsRoute:ActivatedRoute,
    private dataService: PokemonsdataService
  ) { }

  ngOnInit(): void {
    this.getSinglePokemon();
  }
  

  getSinglePokemon()
  {
    this.ParamsRoute.params.subscribe(params => {
      this.dataService.getSinglePokemon(params['id'])
          .subscribe((response: any) => {
            this.pokemon.push(response);
            console.log(this.pokemon)
            
          });
    })
        
  }

}
