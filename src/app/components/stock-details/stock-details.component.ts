import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NewsDto } from 'src/app/models/news/news-dto.model';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  isin: string;
  stockDetails: any;
  stockAdditionalDetails: any;  
  allStocks: any[]; 
  chartData: number[] = [];
  chartLabels: string[] = [];
  loading: boolean = true;
  stockNews: NewsDto[] = [];
  selectedArticle: NewsDto;

  public lineChartData: Array<any> = [{ data: [], label: 'Stock Prices' }];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = { responsive: true };
  public lineChartLegend = true;
  public lineChartType = 'line';
  constructor(
    private route: ActivatedRoute,
    private marketSummaryService: MarketSummaryService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.isin = params['isin'];
        return this.marketSummaryService.getStocksGridData(); 
      })
    ).subscribe(stocks => {
      this.allStocks = stocks;
      this.updateStockDetails(this.isin);
      this.updateStockChart(this.isin);
      this.updateAdditionalStockDetails(this.isin);
      this.updateNews(this.isin);
    });
  }

  updateStockDetails(isin: string): void {
    this.loading = true;
    this.marketSummaryService.getStockDetails(isin).subscribe(details => {
      this.stockDetails = details;
      this.loading = false;
    });
  }

  updateStockChart(isin: string): void {
    this.loading = true;
    this.marketSummaryService.getStockFullDetails(isin).subscribe(data => {
      this.chartData = data.map((item: any) => item.lastPrice);
      this.chartLabels = data.map((item: any) => new Date(item.tradeDate).toDateString());
      this.lineChartData = [{ data: this.chartData, label: 'Stock Prices', fill: true,
        tension: 0.5,
        borderColor: 'lightBlue',
        pointRadius: 0 }];
      this.lineChartLabels = this.chartLabels;
      this.loading = false;
    });
  }

  updateAdditionalStockDetails(isin: string): void {
    this.loading = true;
    this.marketSummaryService.getStockDataInfo(isin).subscribe(details => {
      this.stockAdditionalDetails = details;
      this.loading = false;
    });
  }

  updateNews(isin: string): void {
    this.loading = true;
    this.marketSummaryService.getNewsForStock(isin).subscribe(news => {
      this.stockNews = news;
      console.log(this.stockNews)
      this.loading = false;
    })
  }

  onStockChange(newIsin: string): void {
    this.updateStockDetails(newIsin);
    this.updateStockChart(newIsin);
    this.updateAdditionalStockDetails(newIsin);
    this.updateNews(newIsin);
  }
}
