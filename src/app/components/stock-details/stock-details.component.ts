import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
    });
  }

  updateStockDetails(isin: string): void {
    this.marketSummaryService.getStockDetails(isin).subscribe(details => {
      this.stockDetails = details;
    });
  }

  updateStockChart(isin: string): void {
    this.marketSummaryService.getStockFullDetails(isin).subscribe(data => {
      this.chartData = data.map((item: any) => item.lastPrice);
      this.chartLabels = data.map((item: any) => new Date(item.tradeDate).toDateString());
      this.lineChartData = [{ data: this.chartData, label: 'Stock Prices', fill: true,
        tension: 0.5,
        borderColor: 'lightBlue',
        pointRadius: 0 }];
      this.lineChartLabels = this.chartLabels;
    });
  }

  updateAdditionalStockDetails(isin: string): void {
    this.marketSummaryService.getStockDataInfo(isin).subscribe(details => {
      this.stockAdditionalDetails = details;
    });
  }

  onStockChange(newIsin: string): void {
    this.updateStockDetails(newIsin);
    this.updateStockChart(newIsin);
    this.updateAdditionalStockDetails(newIsin);
  }
}
