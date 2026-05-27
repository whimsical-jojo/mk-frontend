import { KeyValuePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [KeyValuePipe],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  book = input.required<Book>();

  isOpen = signal(false);

toggleDescription() {
  this.isOpen.update(value => !value);
}
}
