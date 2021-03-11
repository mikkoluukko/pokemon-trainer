import { Pokemon } from './pokemon.model';

export interface PokemonResponse {
  next: string;
  count: number;
  prev: string;
  results: Pokemon[];
}