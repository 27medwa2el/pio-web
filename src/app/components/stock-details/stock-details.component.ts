import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NewsDto } from 'src/app/models/news/news-dto.model';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';
import { DateFormatterService } from '../services/utilities/date-formatter.service';

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
  dividendsData: any[] = [];
  selectedArticle: NewsDto;
  paginatedStockNews: NewsDto[] = [];
  currentPage: number = 1;
  pageSize: number = 3;
  totalPages: number;
  public lineChartData: Array<any> = [{ data: [], label: 'Stock Prices' }];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = { responsive: true };
  public lineChartLegend = true;
  public lineChartType = 'line';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marketSummaryService: MarketSummaryService,
    private dateFormatterService: DateFormatterService
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
      this.getDividendsData();
    });
  }
  private getDividendsData(): void {
    this.marketSummaryService.getDividendsForStock(this.isin).subscribe(data => {
      this.dividendsData = data;
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
      this.stockNews = news.map(newsItem => ({
        ...newsItem,
        formattedDate: this.dateFormatterService.getFormattedDate(newsItem.newsDate)  
      }));
      this.totalPages = Math.ceil(this.stockNews.length / this.pageSize);
      this.paginateNews();
      this.loading = false;
    });
  }

  paginateNews(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedStockNews = this.stockNews.slice(start, end);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateNews();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateNews();
    }
  }


  onStockChange(newIsin: string): void {
    this.isin = newIsin;
    this.router.navigate(['/stock-details', this.isin]).then(() => {
      window.location.reload();
    });
    // this.updateStockDetails(newIsin);
    // this.updateStockChart(newIsin);
    // this.updateAdditionalStockDetails(newIsin);
    // this.updateNews(newIsin);
    //  this.router.navigate(['/stock-details', this.isin]);
  }
  selectNews(news: NewsDto): void {
    this.selectedArticle = news;
  }
  deselectNews(): void {
    this.selectedArticle = null;
  }
}
