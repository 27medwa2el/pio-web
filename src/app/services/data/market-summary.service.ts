import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyDto, EgxChart, EgxSummary, Investor, Market, MarketIndicatorDto, MarketMoneyFlow, MarketSummary, SectorsDto } from 'src/app/models/market-summary/market-summary.model';


@Injectable({
  providedIn: 'root'
})
export class MarketSummaryService {
  private baseUrl = 'http://localhost:5037';
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
}
