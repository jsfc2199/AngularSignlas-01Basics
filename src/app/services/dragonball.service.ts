import { Injectable, signal } from '@angular/core';
import { Character } from '../pages/dragonball/dragonball.component';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 200 },
    { id: 2, name: 'vegeta', power: 100 },
  ]);

  addCharacter(character: Character){
    this.characters.update(list => [...list, character])
  }
}
