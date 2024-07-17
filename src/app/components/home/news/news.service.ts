import { Injectable } from '@angular/core';

interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Title 1',
      summary: 'Part of the news',
      content: 'Full content of the news article 1',
      imageUrl: 'assets/images/stocks.jpg'
    },
    {
      id: 2,
      title: 'Title 2',
      summary: 'Part of the news',
      content: 'Full content of the news article 2',
      imageUrl: 'assets/images/stocks.jpg'
    },
    {
      id: 3,
      title: 'Title 3',
      summary: 'Part of the news',
      content: 'Full content of the news article 3',
      imageUrl: 'assets/images/stocks.jpg'
    }
  ];

  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }
}
