import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as bandImagesData from '../../../public/band/images.json';

@Injectable({
  providedIn: 'root',
})
export class BandGalleryService {
  getBandImages(): Observable<string[]> {
    const images = ((bandImagesData as { default?: string[] }).default || bandImagesData) as string[];
    return of(images);
  }
}
