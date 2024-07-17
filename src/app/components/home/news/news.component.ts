import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ]),
    trigger('imageAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.9)' }),
        animate('0.5s', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class NewsComponent implements OnInit {
  articles: any[];
  selectedArticle: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.articles = this.newsService.getArticles();
  }

  selectArticle(article: any): void {
    this.selectedArticle = article;
  }

  clearSelection(): void {
    this.selectedArticle = null;
  }
}
