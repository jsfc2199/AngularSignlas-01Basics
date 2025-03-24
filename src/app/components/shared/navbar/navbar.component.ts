import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive], //importamos el routerLink
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
