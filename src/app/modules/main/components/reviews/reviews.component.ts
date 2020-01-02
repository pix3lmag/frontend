import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  isLoading = true;
  constructor(private spinner: NgxSpinnerService, private router: Router) {}

  ngOnInit() {
    this.loadLatestReviews();
  }

  loadLatestReviews() {
    this.spinner.show();
    this.isLoading = true;
    // this.newsService
    //   .get(null, SharedModule.SETTINGS_NEWS_LIMIT, 0)
    //   .subscribe(news => {
    //     setTimeout(() => {
    //       this.news = news;
    //       this.spinner.hide();
    //       this.isLoading = false;
    //     }, 200);
    //   });
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
