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
  selectedCategory: string;
  totalPages: number;
  categories: string[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(data => {
      this.articles = data;
      this.categories = this.getUniqueCategories();
      this.selectedCategory = this.categories[0];
      this.filterArticles();
    });
  }

  selectArticle(article: NewsDto): void {
    this.selectedArticle = article;
  }

  clearSelection(): void {
    this.selectedArticle = null;
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.articles.map(article => article.newsCategoryName))];
  }

  filterArticles(): void {
    this.filteredArticles = this.articles.filter(article => article.newsCategoryName === this.selectedCategory);
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

  changeCategory(category: string): void {
    this.selectedCategory = category;
    this.filterArticles();
  }

  getHeader(header: string): string {
    return header.replace('العنوان:', '').replace('العنوان :', '')
  }

  getSummary(details: string): string {
    return details.toLocaleLowerCase().split('<br>')[0];
  }

  getFormattedDate(dateString: string): string {
    const language = localStorage.getItem('language')
    const date = new Date(dateString)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? (language === 'ar' ? 'م' : 'pm') : (language === 'ar' ? 'ص' : 'am');
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${hours}:${minutes}${ampm}`
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
