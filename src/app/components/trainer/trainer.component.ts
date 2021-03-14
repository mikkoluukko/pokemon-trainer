import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'trainer-component',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  pokemonCollection: Pokemon[] = [];

  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const collectedPokemonNames = this.trainerService.getCollection();
    for (const name of collectedPokemonNames) {
      const poke = this.pokemonService.getPokemonByName(name);
      if (poke !== undefined) {
        this.pokemonCollection.push(poke);
      }
    }
  }
}
