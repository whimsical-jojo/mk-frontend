import { Component, inject } from '@angular/core';
import { ReadingService } from '../../services/reading-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-readings',
  imports: [],
  templateUrl: './readings.html',
  styleUrl: './readings.css',
})
export class Readings {
  readingService = inject(ReadingService);

  readings = toSignal(this.readingService.getReadings());
}
