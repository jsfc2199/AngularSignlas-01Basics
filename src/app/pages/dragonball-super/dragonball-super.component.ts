import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { AddCharacterComponent } from '../../components/dragonball/add-character/add-character.component';

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


  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 200 },
    { id: 2, name: 'vegeta', power: 100 },
  ]);

  addCharacter(character: Character){
    this.characters.update(list => [...list, character])
  }

}
