import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { SessionService } from 'src/app/services/session.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'trainer-component',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  public trainerName: string = '';
  public pokemonCollection: Pokemon[] = [];

  constructor(
    private readonly trainerService: TrainerService,
    private readonly sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.trainerName = this.sessionService.getTrainerName();
    this.pokemonCollection = this.trainerService.getCollection();
  }
}
