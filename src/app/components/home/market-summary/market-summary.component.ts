import { Component, OnInit } from '@angular/core';

interface Market {
  name: string;
  marketValue: number;
  changeValue: number;
  changePercentage: number;
}

interface SummaryData {
  topGainers: number;
  topLosers: number;
  stockCount: number;
  tradesCount: number;
  totalVolume: number;
  totalValue: number;
  lastUpdated: string;
}

@Component({
  selector: 'app-market-summary',
  templateUrl: './market-summary.component.html',
  styleUrls: ['./market-summary.component.scss']
})
export class MarketSummaryComponent implements OnInit {
  summaryData: SummaryData;
  markets: Market[] = [
    { name: 'Abu Dhabi', marketValue: 9093.27, changeValue: 0.76, changePercentage: 0.1 },
    { name: 'Jordan', marketValue: 4662.43, changeValue: -45.47, changePercentage: -0.9 },
    { name: 'Bahrain', marketValue: 7093.26, changeValue: 16.56, changePercentage: 0.23 },
    { name: 'Saudi Arabia', marketValue: 4567.47, changeValue: 18.76, changePercentage: 0.3 },
    { name: 'Kuwait', marketValue: 1333.56, changeValue: -2.54, changePercentage: -0.15 },
    { name: 'Qatar', marketValue: 4900.33, changeValue: 5.58, changePercentage: 0.12 },
  ];

  marketSummary: SummaryData = {
    topGainers: 35,
    topLosers: 53,
    stockCount: 202,
    tradesCount: 25644,
    totalVolume: 184313.642,
    totalValue: 742596.464,
    lastUpdated: '15/05/2024 11:14:37'
  };

  egxSummary: SummaryData = {
    topGainers: 40,
    topLosers: 30,
    stockCount: 180,
    tradesCount: 20000,
    totalVolume: 150000,
    totalValue: 600000,
    lastUpdated: '15/05/2024 10:00:00'
  };

  tradingSummary: SummaryData = {
    topGainers: 50,
    topLosers: 45,
    stockCount: 220,
    tradesCount: 30000,
    totalVolume: 200000,
    totalValue: 800000,
    lastUpdated: '15/05/2024 09:00:00'
  };

  constructor() {
    this.summaryData = this.marketSummary;
  }

  ngOnInit(): void {}

  changeSummary(type: string): void {
    switch (type) {
      case 'market':
        this.summaryData = this.marketSummary;
        break;
      case 'egx':
        this.summaryData = this.egxSummary;
        break;
      case 'trading':
        this.summaryData = this.tradingSummary;
        break;
      default:
        this.summaryData = this.marketSummary;
    }
  }
}
