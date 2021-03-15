import { Injectable, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { setStorage, getStorage } from '../utils/localStorage';

@Injectable({
  providedIn: 'root',
})
export class TrainerService implements OnInit {
  public collection: Pokemon[] = [];

  ngOnInit(): void {
    this.collection = this.updateCollection();
  }

  public addToCollection(pokemon: Pokemon): void {
    if (!this.isInCollection(pokemon)) {
      this.collection.push(pokemon);
    }
    setStorage('collectedPokemon', this.collection);
    this.collection = this.updateCollection();
  }

  public updateCollection(): Pokemon[] {
    return getStorage('collectedPokemon');
  }

  public isInCollection(pokemon: Pokemon): boolean {
    return this.collection.some((poke) => poke.id === pokemon.id);
  }
}
