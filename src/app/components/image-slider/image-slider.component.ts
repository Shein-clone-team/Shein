import { Component, Input } from '@angular/core';
import { ISlide } from '../../interfaces/ISlide';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  @Input() slides: ISlide[] = [];

  indexActual: number = 0;

  get obtenerUrlActual():string {
    return this.slides[this.indexActual].url;
  }

  siguiente() {
    let isLast = this.indexActual === (this.slides.length-1);
    let newIndex = isLast ? 0: this.indexActual+1;
    this.indexActual = newIndex;
  }

  anterior() {
    let isFirst = this.indexActual === 0;
    let newIndex = isFirst ? this.slides.length-1: this.indexActual-1;
    this.indexActual = newIndex;
  }

  seleccionarSlide(slideIndex: number) {
    this.indexActual = slideIndex;
  }
}
