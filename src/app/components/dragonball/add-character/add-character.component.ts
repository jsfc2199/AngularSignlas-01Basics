import { Component, output, signal } from '@angular/core';
import { Character } from '../../../pages/dragonball/dragonball.component';

@Component({
  selector: 'app-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  name = signal('');
  power = signal(0);

  //version mejorada de @output
  newCharacter = output<Character>()
  addCharater() {
    if (!this.power() || !this.name()) {
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random()*1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter)
    this.resetFields();
  }

  resetFields() {
    this.name.set(''), this.power.set(0);
  }
}
