import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsDto } from 'src/app/models/news/news-dto.model';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://www.pioneers-securities.com/webdataapi/api/news'; 

  constructor(private http: HttpClient) { }

  getArticles(): Observable<NewsDto[]> {
    return this.http.get<NewsDto[]>(`${this.apiUrl}/GetTodayNews`);
  }

  getArticleById(id: number): Observable<NewsDto> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.newsId === id))
    );
  }
}
