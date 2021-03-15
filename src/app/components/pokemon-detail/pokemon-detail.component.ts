import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'pokemon-detail-component',
  templateUrl: './pokemon-detail.component.html',
  styles: [``],
})
export class PokemonDetailComponent implements OnInit {
  private readonly pokemonName: string | null = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonDetailService: PokemonDetailService,
    private readonly trainerService: TrainerService
  ) {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.pokemonDetailService.fetchPokemonByName(this.pokemonName);
  }

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon;
  }

  collectPokemon(): void {
    this.trainerService.addToCollection(this.pokemon);
  }
}
