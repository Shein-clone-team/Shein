import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public instagram!: string;
  public facebook!: string;
  public tikTok!: string;
  public youtube!: string;
  constructor(){}

  ngOnInit(): void {
    this.instagram = '../../../assets/img/instagram.png';
    this.facebook = '../../../assets/img/facebook.png';
    this.tikTok = '../../../assets/img/tik-tok.png';
    this.youtube = '../../../assets/img/youtube.png';
  }
}
