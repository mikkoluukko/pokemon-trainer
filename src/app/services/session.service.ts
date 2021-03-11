import { Injectable } from '@angular/core';
import { getStorage } from '../utils/localStorage';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  active(): boolean {
    const trainer = getStorage('trainerName');

    return Boolean(trainer);
  }
}
