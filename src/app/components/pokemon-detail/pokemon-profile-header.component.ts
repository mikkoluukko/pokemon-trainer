import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
  selector: 'pokemon-profile-header-component',
  templateUrl: './pokemon-profile-header.component.html'
})

export class PokemonProfileHeaderComponent {
  @Input() pokemon!: Pokemon;
}