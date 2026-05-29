import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BandGalleryService {
  http = inject(HttpClient);
  
  getBandImages() {
    return this.http.get<string[]>('/band/images.json');
  }
}
