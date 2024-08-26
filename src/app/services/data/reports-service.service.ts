import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiUrl = 'https://www.pioneers-securities.com/webdataapi/api/reports';  
  private language = localStorage.getItem("language")?? "en";
  constructor(private http: HttpClient) { }
  getReports(reportType: string): Observable<any[]> {

    return this.http.get<any[]>(`${this.apiUrl}/${reportType}/${this.language}`);
  }

  downloadReportFile(fileName: string,reportType: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${reportType}/${this.language}/${fileName}`, { responseType: 'blob' });
  }
}
