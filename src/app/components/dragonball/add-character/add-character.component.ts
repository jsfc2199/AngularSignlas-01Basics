import { Component, signal } from '@angular/core';
import { Character } from '../../../pages/dragonball/dragonball.component';

@Component({
  selector: 'app-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  name = signal('');
  power = signal(0);

  addCharater() {
    if (!this.power() || !this.name()) {
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: 5000,
      name: this.name(),
      power: this.power(),
    };

    //actualizamos la señal
    // this.characters.update((list) => [...list, newCharacter]);
    console.log({newCharacter})

    this.resetFields();
  }

  resetFields() {
    this.name.set(''), this.power.set(0);
  }
}
