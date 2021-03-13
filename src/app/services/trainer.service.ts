import { Injectable } from '@angular/core';
import { setStorage, getStorage } from '../utils/localStorage';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {  

  public addToCollection(pokemon: string | null) {
    let collection = getStorage('collectedPokemon');
    if (!collection.includes(pokemon)) {
      collection.push(pokemon);
    } else {
      alert("This Pokemon has already been collected.")
    }
    setStorage('collectedPokemon', collection);
  }

  public getCollection() {
    return getStorage('collectedPokemon');
  }
}