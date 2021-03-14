import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { getStorage } from '../../utils/localStorage';

@Component({
  selector: 'pokemon-card-component',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],  
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
}