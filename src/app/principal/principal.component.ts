import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  slides = [
    {
      img:'../../../assets/images/reuniao-com-graficos.jpg',
      title: 'Marcenas  ',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img:'../../../assets/images/pessoas-sentadas-tecnologia.jpg',
      title: 'mattis',
      text:'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    },
    {
      img:'../../../assets/images/pessoas-em-pe.jpg',
      title: 'egestas',
      text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layou'
    },
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "autoplay": "false",
    "autoplaySpeed": "4000",
    "speed":"1000",
    "dots": true,
    "infinite": true
  };
  title = 'ngSlick';

  constructor() { }

  ngOnInit(): void {
  }

}
