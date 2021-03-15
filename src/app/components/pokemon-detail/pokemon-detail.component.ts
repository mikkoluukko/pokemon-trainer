import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'pokemon-detail-component',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  private readonly pokemonName: string | null = '';
  public isInCollection: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonDetailService: PokemonDetailService,
    private readonly trainerService: TrainerService
  ) {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.pokemonDetailService.fetchPokemonByName(this.pokemonName);
    this.isInCollection = this.trainerService.isInCollection(this.pokemon);
  }

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon;
  }

  collectPokemon(): void {
    this.trainerService.addToCollection(this.pokemon);
    this.isInCollection = this.trainerService.isInCollection(this.pokemon);
  }
}
