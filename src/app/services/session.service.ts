import { Injectable } from '@angular/core';
import { getStorage, clearStorage } from '../utils/localStorage';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
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
