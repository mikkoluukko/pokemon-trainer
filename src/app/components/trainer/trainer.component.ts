import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'trainer-component',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent {
  constructor(private readonly trainerService: TrainerService) {}

  get pokemonCollection(): Pokemon[] {
    return this.trainerService.collection;
  }
}
