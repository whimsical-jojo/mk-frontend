import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { fetchCollection } from '../utils/firebase-utils';
import { db } from '../../firebase';

@Injectable({
  providedIn: 'root',
})
export class ReadingService {
  getReadings(): Observable<Reading[]> {
    return from(fetchCollection<Reading>(db, 'readings'));
  }
}