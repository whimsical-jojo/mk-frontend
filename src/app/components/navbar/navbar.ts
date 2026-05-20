import { Component, signal } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = signal<boolean>(false);
  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
