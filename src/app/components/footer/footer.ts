import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  isModalOpen = signal<boolean>(false);

  closeModal() {
    this.isModalOpen.set(false);
    document.body.classList.remove('overflow-hidden');
  }
  openModal() {
    this.isModalOpen.set(true);
    document.body.classList.add('overflow-hidden');
  }
  
}
