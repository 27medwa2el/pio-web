import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsDto } from 'src/app/models/news/news-dto.model';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:5037/api/news'; 
  private language = localStorage.getItem("language")?? "en";
  constructor(private http: HttpClient) { }

  getArticles(): Observable<NewsDto[]> {
    return this.http.get<NewsDto[]>(`${this.apiUrl}/GetTodayNews`,{headers: {"accept-language": this.language}});
  }

  getArticleById(id: number): Observable<NewsDto> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.newsId === id))
    );
  }
}
