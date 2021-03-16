import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { setStorage, getStorage } from '../utils/localStorage';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  public addToCollection(pokemon: Pokemon): void {
    let collection = this.getCollection()
    if (!this.isInCollection(pokemon.name)) {
      collection.push(pokemon);
    }
    setStorage('collectedPokemon', collection);
  }

  public getCollection(): Pokemon[] {
    return getStorage('collectedPokemon');
  }

  public isInCollection(pokemonName: string): boolean {
    return this.getCollection().some((poke) => poke.name === pokemonName);
  }
}
