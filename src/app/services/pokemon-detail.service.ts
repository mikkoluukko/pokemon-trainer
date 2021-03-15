import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';

const { pokeAPI } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  public pokemon!: Pokemon;

  constructor(private readonly http: HttpClient) {}

  public fetchPokemonByName(name: string | null): void {
    this.http
      .get<Pokemon>(`${pokeAPI}/${name}`)
      .pipe(
        map((pokemon: Pokemon) => ({
          ...pokemon,
          image: `https:///raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        }))
      )
      .subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
      });
  }
}
