import { Component, inject } from '@angular/core';
import { BibliographyService} from '../../services/bibliography-service';
import { BookCard } from "../../components/book-card/book-card";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-publications',
  imports: [BookCard],
  templateUrl: './publications.html',
  styleUrl: './publications.css',
})
export class Publications {
  bookService = inject(BibliographyService);

  books = toSignal(this.bookService.getBooks());

  bibliography = toSignal(this.bookService.getBibliography());
  
  newsArticles = toSignal(this.bookService.getNewsArticles());
}
