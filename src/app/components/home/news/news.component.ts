import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NewsService } from './news.service';
import { NewsDto } from 'src/app/models/news/news-dto.model';

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
  articles: NewsDto[];
  filteredArticles: NewsDto[];
  displayedArticles: NewsDto[];
  selectedArticle: NewsDto;
  currentPage: number = 1;
  pageSize: number = 4;
  selectedCategory: number = 1;
  totalPages: number;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(data => {
      this.articles = data;
      this.filterArticles();
      this.updateDisplayedArticles();
    });
  }

  selectArticle(article: NewsDto): void {
    this.selectedArticle = article;
  }

  clearSelection(): void {
    this.selectedArticle = null;
  }

  filterArticles(): void {
    this.filteredArticles = this.articles.filter(article => article.newsCategory === this.selectedCategory);
    this.currentPage = 1; 
    this.totalPages = Math.ceil(this.filteredArticles.length / this.pageSize);
    this.updateDisplayedArticles();
  }

  updateDisplayedArticles(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedArticles = this.filteredArticles.slice(start, end);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedArticles();
    }
  }

  changeCategory(category: number): void {
    this.selectedCategory = category;
    this.filterArticles();
  }

  getSummary(details: string): string {
    return details.split('<br>')[0]; 
  }

  getDisplayedPages(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPagesToShow = 3;
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    return Array.from({ length: (endPage - startPage + 1) }, (_, i) => startPage + i);
  }
}