import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrl: './stock-market.component.scss'
})
export class StockMarketComponent {
  // Line Chart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'EGX' }
  ];
  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // Pie Chart
  public pieChartLabels: string[] = ['Buy', 'Sell'];
  public pieChartData: number[] = [300, 500];
  public pieChartType = 'pie';
  // public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  // Market Status Pie Chart Data
  public marketPieChartDatasets: Array<any> = [
    { data: [34.5, 30.13, 35.37], backgroundColor: ['green', 'red', 'grey'] }
  ];
  public marketPieChartLabels: Array<any> = ['Gainers', 'Losers', 'Unchanged'];
  public marketPieChartType = 'pie';
}
