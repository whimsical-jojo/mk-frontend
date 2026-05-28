import { Component, computed, inject, signal } from '@angular/core';
import { ReadingService } from '../../services/reading-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-readings',
  imports: [],
  templateUrl: './readings.html',
  styleUrl: './readings.css',
})
export class Readings {
  readingService = inject(ReadingService);
  sanitizer = inject(DomSanitizer);

  readings = toSignal(this.readingService.getReadings().pipe(
    map(readings => readings.map(reading => ({
      ...reading,
      url: this.sanitizeUrl(reading.url)
    })))
  ), { initialValue: [] });

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
