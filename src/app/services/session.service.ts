import { Injectable } from '@angular/core';
import { getStorage, setStorage, clearStorage } from '../utils/localStorage';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public login(trainerName: string): void {
    setStorage('trainerName', trainerName);
    setStorage('collectedPokemon', []);
  }

  public active(): boolean {
    const trainer = getStorage('trainerName');

    return Boolean(trainer);
  }

  public getTrainerName(): string {
    return getStorage('trainerName');
  }

  public logout(): void {
    clearStorage();
  }
}
