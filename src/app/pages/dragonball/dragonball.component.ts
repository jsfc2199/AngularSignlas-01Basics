import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
})
export class DragonballComponent {
  name = signal('gohan');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 200 },
    { id: 2, name: 'vegeta', power: 100 },
    { id: 3, name: 'trunks', power: 100 },
    { id: 4, name: 'piccolo', power: 20 },
  ]);

  addCharater() {
    if (!this.power() || !this.name()) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    //actualizamos la señal
    this.characters.update((list) => [...list, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set(''), this.power.set(0);
  }
}
