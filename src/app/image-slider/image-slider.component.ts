import { Component, Input } from '@angular/core';
import { ISlide } from '../interfaces/ISlide';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  @Input() slides: ISlide[] = [];

  currentIndex: number = 0;
  
  get getCurrentUrl():string {
    return this.slides[this.currentIndex].url;
  } 

  siguiente() {
    let isLast = this.currentIndex === (this.slides.length-1);
    let newIndex = isLast ? 0: this.currentIndex+1;
    this.currentIndex = newIndex;
  }

  anterior() {
    let isFirst = this.currentIndex === 0;
    let newIndex = isFirst ? this.slides.length-1: this.currentIndex-1;
    this.currentIndex = newIndex;
  }

  seleccionarSlide(slideIndex: number) {
    this.currentIndex = slideIndex;
  }
}
