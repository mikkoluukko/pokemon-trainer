import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'catalogue-component',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  public offset: number = 0;
  public limitPerPage: number = 24;

  constructor(private readonly pokemonService: PokemonService) {}

  get pokemon(): Pokemon[] {
    return this.pokemonService.pokemon.slice(
      this.offset,
      this.offset + this.limitPerPage
    );
  }

  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
  }

  previousPage(): void {
    this.offset -= this.limitPerPage;
  }

  nextPage(): void {
    this.offset += this.limitPerPage;
  }
}
