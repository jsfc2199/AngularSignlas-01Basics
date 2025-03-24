import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../pages/dragonball/dragonball.component';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters')
  return characters ? JSON.parse(characters) : []
}
@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  //efectos para disparar cosas secundarias, queremos un efecto que se ejecute cada que cambie los characters, esto no es necesario invocarlo en ninguna parte
  //es por asi decirlo autoinvocado porque es un efecto
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(character: Character){
    this.characters.update(list => [...list, character])
  }
}
