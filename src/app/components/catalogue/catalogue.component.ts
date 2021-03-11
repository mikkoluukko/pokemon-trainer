import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { getStorage } from '../../utils/localStorage';

@Component({
  selector: 'app-catalogue-component',
  templateUrl: './catalogue.component.html',
  styles: [
    `
    `,
  ],
})
export class CatalogueComponent implements OnInit {



  constructor(private router: Router, private readonly pokemonService: PokemonService) {}

  get pokemon(): Pokemon[] {
    return this.pokemonService.pokemon;
  }

  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
  }

}
