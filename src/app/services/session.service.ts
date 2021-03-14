import { Injectable } from '@angular/core';
import { getStorage, clearStorage } from '../utils/localStorage';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  active(): boolean {
    const trainer = getStorage('trainerName');

    return Boolean(trainer);
  }

  logout(): void {
    clearStorage();
  }
}
