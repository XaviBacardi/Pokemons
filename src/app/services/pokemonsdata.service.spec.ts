import { TestBed } from '@angular/core/testing';

import { PokemonsdataService } from './pokemonsdata.service';

describe('PokemonsdataService', () => {
  let service: PokemonsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
