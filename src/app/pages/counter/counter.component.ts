import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0
  counterSignal = signal(0)

  increment(value: number){
    this.counter++

    //! evitar esto
    // this.counterSignal.set(this.counterSignal() + 1)

    this.counterSignal.update((current)=> current + value)
  }
  decrement(value: number){
    this.counter--
    this.counterSignal.update((current)=> current - value)

  }
  reset(){
    this.counter = 0

    //Si se tiene una actualización en el valor de una señal, pero se depende del valor anterior de la señal se hace un update
    this.counterSignal.set(0)
  }
}
