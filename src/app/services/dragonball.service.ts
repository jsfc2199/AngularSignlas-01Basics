import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../pages/dragonball/dragonball.component';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 200 },
    { id: 2, name: 'vegeta', power: 100 },
  ]);

  //efectos para disparar cosas secundarias, queremos un efecto que se ejecute cada que cambie los characters, esto no es necesario invocarlo en ninguna parte
  //es por asi decirlo autoinvocado porque es un efecto
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(character: Character){
    this.characters.update(list => [...list, character])
  }
}
