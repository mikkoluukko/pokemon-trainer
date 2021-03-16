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
  // Use any because in theory oute.snapshot.paramMap.get('name') could result
  // in null, but in practice this is always a string
  private readonly pokemonName: any;
  public isInCollection: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonDetailService: PokemonDetailService,
    private readonly trainerService: TrainerService
  ) {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    this.isInCollection = this.trainerService.isInCollection(this.pokemonName);
  }

  ngOnInit(): void {
    this.pokemonDetailService.fetchPokemonByName(this.pokemonName);    
  }

  public get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon;
  }

  public collectPokemon(): void {
    this.trainerService.addToCollection(this.pokemon);
    this.isInCollection = this.trainerService.isInCollection(this.pokemonName);
  }

  public removePokemon(): void {
    this.trainerService.removeFromCollection(this.pokemon);
    this.isInCollection = this.trainerService.isInCollection(this.pokemonName);
  }
}
