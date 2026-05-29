import { Component, inject, OnInit, signal } from '@angular/core';
import { BandGalleryService } from '../../services/band-gallery-service';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-music',
  imports: [],
  templateUrl: './music.html',
  styleUrl: './music.css',
})
export class Music implements OnInit {
  private imageService = inject(BandGalleryService);
  images = toSignal(this.imageService.getBandImages());

  ngOnInit() {
    console.log('Loading music page...');
    console.log("Images: ", this.images());
  }
  
}
