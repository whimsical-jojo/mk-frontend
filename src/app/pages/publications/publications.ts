import { Component, computed, inject } from '@angular/core';
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

  private rawBibliography = toSignal(this.bookService.getBibliography(), { initialValue: [] });
  bibliography = computed(() => [...this.rawBibliography()].sort((a, b) => b.year - a.year));
  
  private rawNewsArticles = toSignal(this.bookService.getNewsArticles(), { initialValue: [] });
  newsArticles = computed(() => [...this.rawNewsArticles()].sort((a, b) => b.year - a.year));
}
