import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [TitleCasePipe, UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name = signal('ironman')
  age = signal(45)

  //Una señal computada es una señal de solo lectura pero puede cambiar si sus dependencias que sean señales cambian
  heroDescription = computed(() =>{
    const description = `${ this.name() } - ${ this.age() }`
    return description
  })

  capitalizedName = computed(() =>{
    return this.name().toUpperCase()
  })

  // getHeroDescription() {
  //   return `${ this.name() } - ${ this.age() }`;
  // }

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
