import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { RouterModule } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { MainRoutingModule } from './main-routing.module';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { TopGamesComponent } from './components/top-games/top-games.component';
import { NewsComponent } from './components/news/news.component';
import { NewsService } from './services/news.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CarouselComponent,
    SlideComponent,
    FrontpageComponent,
    LatestNewsComponent,
    TopGamesComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [],
})
export class MainModule { }
