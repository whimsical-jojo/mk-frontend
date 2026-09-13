import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { fetchCollection } from '../utils/firebase-utils';
import { db } from '../../firebase';

@Injectable({
  providedIn: 'root',
})
export class BibliographyService {
  /**
   * Fetches the list of books from Cloud Firestore.
   * 
   * @returns An observable containing an array of books.
   */
  getBooks(): Observable<Book[]> {
    return from(fetchCollection<Book>(db, 'books'));
  }

  /**
   * Fetches the bibliography items from Cloud Firestore.
   * 
   * @returns An observable containing an array of bibliography items.
   */
  getBibliography(): Observable<BibliographyItem[]> {
    return from(fetchCollection<BibliographyItem>(db, 'bibliography'));
  }

  /**
   * Fetches the journalism news articles from Cloud Firestore.
   * 
   * @returns An observable containing an array of journalism items.
   */
  getNewsArticles(): Observable<BibliographyItem[]> {
    return from(fetchCollection<BibliographyItem>(db, 'newsArticles'));
  }
}
