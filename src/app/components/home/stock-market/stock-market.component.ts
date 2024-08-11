import { Component, OnInit } from '@angular/core';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';
import { EgxChart, MarketMoneyFlow, MarketSummary } from 'src/app/models/market-summary/market-summary.model';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})
export class StockMarketComponent implements OnInit {
  marketSummary: MarketSummary;
  marketMoneyFlow: MarketMoneyFlow[];
  selectedStock: string = 'Egx30';
  selectedPeriod: string = 'w';

  // Line Chart
  public lineChartData: Array<any> = [
    { data: [], label: 'EGX', }
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  // public lineChartColors: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // Pie Chart
  public pieChartLabels: string[] = ['Buy', 'Sell'];
  public pieChartData: number[] = [300, 500];
  public pieChartType = 'pie';
  public pieChartDatasets = [
    {
      data: [300, 500]
    }
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // Market Status Pie Chart Data
  public marketPieChartDatasets: Array<any> = [
    { data: [34.5, 30.13, 35.37], backgroundColor: ['blue', 'red'] }
  ];
  public marketPieChartLabels: Array<any> = ['Gainers', 'Losers', 'Unchanged'];
  
  public marketPieChartType = 'pie';

  constructor(private marketSummaryService: MarketSummaryService) {}

  ngOnInit(): void {
    this.fetchStockData();
    this.marketSummaryService.getMarketSummary().subscribe((data: MarketSummary) => {
      this.marketSummary = data;
      this.updateMarketStatusPieChart();
    });

    this.marketSummaryService.getMarketMoneyFlow().subscribe((data: MarketMoneyFlow[]) => {
      this.marketMoneyFlow = data;
      this.updateMoneyFlowPieChart();
    });
    if(localStorage.getItem("language")=="ar")
    {
      this.marketPieChartLabels = ['الرابحين', 'الخاسرين', 'دون تغيير'];
    }
  }

  fetchStockData(): void {
    switch (this.selectedStock) {
      case 'Egx100':
        this.marketSummaryService.getEgx100(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx70':
        this.marketSummaryService.getEgx70(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx50':
        this.marketSummaryService.getEgx50(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx30Cap':
        this.marketSummaryService.getEgx30Cap(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx30':
        this.marketSummaryService.getEgx30(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
    }
  }

  updateChartData(data: EgxChart[]): void {
    this.lineChartData = [{ data: data.map(item => item.value), label: this.selectedStock,fill: true,
      tension: 0.5,
      borderColor: 'lightBlue',
      pointRadius: 0 }];
    this.lineChartLabels = data.map(item => new Date(item.date).toDateString());
  }

  updateMarketStatusPieChart(): void {
    this.marketPieChartDatasets = [
      {
        data: [this.marketSummary.gainers, this.marketSummary.losers, this.marketSummary.stockCount - this.marketSummary.gainers - this.marketSummary.losers]
      }
    ];
  }

  updateMoneyFlowPieChart(): void {
    this.pieChartDatasets = [
      {
        data: this.marketMoneyFlow.map(flow => flow.money)
      }
    ];
    this.pieChartLabels = this.marketMoneyFlow.map(flow => flow.tradeClass);
  }

  onStockChange(stock: string): void {
    this.selectedStock = stock;
    this.fetchStockData();
  }

  onPeriodChange(period: string): void {
    this.selectedPeriod = period;
    this.fetchStockData();
  }
}
