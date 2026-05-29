import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReadingService {
  http = inject(HttpClient);
  
  getReadings() {
    return this.http.get<Reading[]>('./data/readings.json');
  }
}
