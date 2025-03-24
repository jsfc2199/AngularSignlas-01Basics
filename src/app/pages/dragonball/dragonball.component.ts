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
  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 200 },
    { id: 2, name: 'vegeta', power: 100 },
    { id: 3, name: 'trunks', power: 100 },
    { id: 4, name: 'piccolo', power: 20 },

  ]);
}
