import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  selectedCategory?: number = null;
  categories: any[] = [];
  news: any[] = [];
  isLoading = true;
  constructor(
    private newsService: NewsService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadLatestNews();
  }

  loadLatestNews() {
    this.spinner.show();
    this.isLoading = true;
    this.newsService.get(this.selectedCategory, 3, 0).subscribe(news => {
      setTimeout(() => {
        this.news = news;
        this.spinner.hide();
        this.isLoading = false;
      }, 200);
    });
  }

  loadCategories() {
    this.categories = [
      { id: 1, caption: 'Category 1' },
      { id: 2, caption: 'Category 2' },
      { id: 3, caption: 'Category 3' },
      { id: 4, caption: 'Category 4' }
    ];
  }

  setCategory(id?: number) {
    this.selectedCategory = id;
    this.loadLatestNews();
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
