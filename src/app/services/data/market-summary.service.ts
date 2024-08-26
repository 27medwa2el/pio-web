import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyDto, EgxChart, EgxSummary, Investor, Market, MarketIndicatorDto, MarketMoneyFlow, MarketSummary, SectorsDto } from 'src/app/models/market-summary/market-summary.model';
import { NewsDto } from 'src/app/models/news/news-dto.model';


@Injectable({
  providedIn: 'root'
})
export class MarketSummaryService {
  private baseUrl = 'https://www.pioneers-securities.com/webdataapi';
  private language = localStorage.getItem("language")?? "en";

  constructor(private http: HttpClient) { }
  
  getMarketSummary(): Observable<MarketSummary> {
    return this.http.get<MarketSummary>(`${this.baseUrl}/api/MarketSummaries`);
  }
  getMarketMoneyFlow(): Observable<MarketMoneyFlow[]> {
    return this.http.get<MarketMoneyFlow[]>(`${this.baseUrl}/api/MarketMoneyFlows`);
  }
  getEgxSummary(): Observable<EgxSummary[]> {
    return this.http.get<EgxSummary[]>(`${this.baseUrl}/api/EgxSummary`);
  }
  getInvestors(): Observable<Investor[]> {
    return this.http.get<Investor[]>(`${this.baseUrl}/api/investors`);
  }
  getEgx100(period: string): Observable<EgxChart[]> {
    return this.http.get<EgxChart[]>(`${this.baseUrl}/api/EgxCharts/GetEgx100?period=${period}`);
  }
  getEgx70(period: string): Observable<EgxChart[]> {
    return this.http.get<EgxChart[]>(`${this.baseUrl}/api/EgxCharts/GetEgx70?period=${period}`);
  }
  getEgx50(period: string): Observable<EgxChart[]> {
    return this.http.get<EgxChart[]>(`${this.baseUrl}/api/EgxCharts/GetEgx50?period=${period}`);
  }
  getEgx30Cap(period: string): Observable<EgxChart[]> {
    return this.http.get<EgxChart[]>(`${this.baseUrl}/api/EgxCharts/GetEgx30Cap?period=${period}`);
  }
  getEgx30(period: string): Observable<EgxChart[]> {
    return this.http.get<EgxChart[]>(`${this.baseUrl}/api/EgxCharts/GetEgx30?period=${period}`);
  }
  getArabMarketIndicators(): Observable<Market[]> {
    return this.http.get<Market[]>(`${this.baseUrl}/api/MarketIndicators/GetArabMarketIndicators`,{headers: {"accept-language": this.language}});
  }
  getInternationalMarketIndicators(): Observable<MarketIndicatorDto[]> {
    return this.http.get<MarketIndicatorDto[]>(`${this.baseUrl}/api/MarketIndicators/GetInternationalMarketIndicators`,{headers: {"accept-language": this.language}});
  }
  getStocks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/StocksData`,{headers: {"accept-language": this.language}});
  }
  getStocksGridData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/StocksData/GetGridData`,{headers: {"accept-language": this.language}});
  }
  getStockDetails( isin : string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/StocksData/GetStockDetails/${isin}`,{headers: {"accept-language": this.language}});
  }
  getSectorsActivity(period: string): Observable<SectorsDto[]> {
    return this.http.get<SectorsDto[]>(`${this.baseUrl}/api/Sectors/GetSectorsActivity?period=${period}`,{headers: {"accept-language": this.language}});
  }
  getCurrencies(): Observable<CurrencyDto[]> {
    return this.http.get<CurrencyDto[]>(`${this.baseUrl}/api/Currencies`,{headers: {"accept-language": this.language}});
  }
  getStockFullDetails(isin: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/StocksData/GetExternalStockData/${isin}?interval=3m`);
}
  getStockDataInfo(isin: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/StocksData/GetStockDataInfo/${isin}`);
  }
  getNewsForStock(isin: string): Observable<NewsDto[]> {
    return this.http.get<NewsDto[]>(`${this.baseUrl}/api/News/GetNewsForStock/${isin}`);
  }
  getDividendsForStock(isin: string): Observable<NewsDto[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/DividendsTables/GetDividendsForStock/${isin}`);
  }
  getGenAssembliesIsins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/GenAssembliesIsins`,{headers: {"accept-language": this.language}});
  }
  getStockAssemblies(isin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/GenAssembliesIsins/GetAssembliesForStock/${isin}`,{headers: {"accept-language": this.language}});
  }
  getBonusShares(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/BonusShares`,{headers: {"accept-language": this.language}});
  }
  getStockBonusShares(isin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/BonusShares/GetBonusShareForStock/${isin}`,{headers: {"accept-language": this.language}});
  }

  getDividendsTables(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/DividendsTables`,{headers: {"accept-language": this.language}});
  }
  getInsiderTrading(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/InsiderTradings`,{headers: {"accept-language": this.language}});
  }
  getStockInsiderTrading(isin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/InsiderTradings/GetStockInsiderTradings/${isin}`,{headers: {"accept-language": this.language}});
  }
  getCompaniesFinancialStatements(isin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/CompaniesFinancialStatementsAnnualIsins/${isin}`, { headers: { "accept-language": this.language } });
  }
  getAuditReportsForStock(isin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/CompaniesAuditReports/${isin}`, { headers: { "accept-language": this.language } });
  }
  getAnnouncementsForStock(isin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/CompaniesAnnouncements/${isin}`, { headers: { "accept-language": this.language } });
  }
  getAllAnnouncements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/CompaniesAnnouncements`, { headers: { "accept-language": this.language } });
  }
  getAllAuditReports(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/CompaniesAuditReports`, { headers: { "accept-language": this.language } });
  }
  getAllFinancialStatements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/CompaniesFinancialStatementsAnnualIsins`, { headers: { "accept-language": this.language } });
  }
  downloadFinancialStatementPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/api/CompaniesFinancialStatementsAnnualIsins/download/${id}`, {
      responseType: 'blob'
    });
  }
  downloadAuditReportPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/api/CompaniesAuditReports/${id}/download`, {
      responseType: 'blob'
    });
  }
  downloadAnnouncementPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/api/CompaniesAnnouncements/${id}/download`, {
      responseType: 'blob'
    });
  }
}
