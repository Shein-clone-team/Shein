import { Component } from '@angular/core';
import { ISlide } from 'src/app/interfaces/ISlide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: ISlide[] = [
    { 
      url: '../../../assets/img/Jaket 1 2.svg', 
      title: 'Blue Jacket' 
    },
    {
      url: '../../../assets/img/jaket 2 1.svg', 
      title: 'Black Jacket'
    },
    { 
      url: '../../../assets/img/jaket 3 1.svg', 
      title: 'Pink Jacket'
    }
  ];
}
