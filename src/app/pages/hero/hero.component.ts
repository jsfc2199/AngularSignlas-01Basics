import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [TitleCasePipe, UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name = signal('ironman')
  age = signal(45)

  getHeroDescription() {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(){
    this.name.set('Spiderman')
    this.age.set(22)
  }

  resetForm(){
    this.name.set('ironman')
    this.age.set(45)
  }

  changeAge(){
    this.age.set(60)
  }
}
