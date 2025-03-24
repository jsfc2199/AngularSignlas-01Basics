import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink], //importamos el routerLink
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
