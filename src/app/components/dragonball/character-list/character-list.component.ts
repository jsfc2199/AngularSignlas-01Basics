import { Component, input } from '@angular/core';
import { Character } from '../../../pages/dragonball/dragonball.component';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  // es lo mismo que @input
characters = input.required<Character[]>();

}
