import { Component, OnInit } from '@angular/core';

const SLIDES = [
  { id: 1, index: 0, active: true, image: 'https://picsum.photos/id/1016/1920/1080', title: 'Slide 1016', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae cursus dui. Vestibulum scelerisque purus quis volutpat ultrices. Morbi vitae dictum neque, vel feugiat dui.' },
  { id: 2, index: 1, active: false, image: 'https://picsum.photos/id/876/1920/1080', title: 'Slide 876', caption: 'Vestibulum congue, risus ut aliquam consectetur, magna lorem placerat est, non pulvinar turpis lorem lacinia tortor. ' },
  { id: 3, index: 2, active: false, image: 'https://picsum.photos/id/840/1920/1080', title: 'Slide 840', caption: 'Nam ut urna eget justo facilisis interdum sit amet in risus. Nullam vitae mollis diam. Phasellus tincidunt dignissim purus at scelerisque.' },
  { id: 4, index: 3, active: false, image: 'https://picsum.photos/id/666/1920/1080', title: 'Slide 666', caption: 'Suspendisse efficitur semper dictum. Maecenas malesuada massa velit, in molestie orci accumsan sit amet.' },
  { id: 5, index: 4, active: false, image: 'https://picsum.photos/id/999/1920/1080', title: 'Slide 999', caption: 'Donec quis lobortis dolor. Nullam aliquet non est quis ultricies.' },
];

@Component({
  selector: 'app-main-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides: any[] = SLIDES;
  currentIndex = 0;
  timeOut = 4000;
  timeOutHandler: any = null;
  constructor() { }

  ngOnInit() {
    this.onActiveChanged(this.currentIndex);
  }

  onActiveChanged(event) {
    clearTimeout(this.timeOutHandler);
    this.slides.map(s => {
      s.active = (s.index === event);
    });
    this.timeOutHandler = setTimeout(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.slides.length) {
        this.currentIndex = 0;
      }
      this.onActiveChanged(this.currentIndex);
    }, this.timeOut);
  }
}
