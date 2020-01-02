import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-main-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any[] = [];
  isLoading = true;
  constructor(
    private newsService: NewsService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadLatestNews();
  }

  loadLatestNews() {
    this.spinner.show();
    this.isLoading = true;
    this.newsService.get(null, SharedModule.SETTINGS_NEWS_LIMIT, 0).subscribe(news => {
      setTimeout(() => {
        this.news = news;
        this.spinner.hide();
        this.isLoading = false;
      }, 200);
    });
  }

  goto(id: number) {
    console.log(`### going to article with id #${id}`);
    // this.router.navigateByUrl(`/article/${id}`);
  }

  gotoAuthor(id: number) {
    console.log(`### going to author page with id #${id}`);
    // this.router.navigateByUrl(`/author/${id}`);
  }
}
