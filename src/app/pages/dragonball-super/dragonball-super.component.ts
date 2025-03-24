import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { AddCharacterComponent } from '../../components/dragonball/add-character/add-character.component';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
  dragonBallService = inject(DragonballService);
}
