import { Component, OnInit } from '@angular/core';

interface Market {
  name: string;
  marketValue: number;
  changeValue: number;
  changePercentage: number;
}

@Component({
  selector: 'app-market-summary',
  templateUrl: './market-summary.component.html',
  styleUrls: ['./market-summary.component.scss']
})
export class MarketSummaryComponent implements OnInit {
  topGainers: number = 35;
  topLosers: number = 53;
  stockCount: number = 202;
  tradesCount: number = 25644;
  totalVolume: number = 184313.642;
  totalValue: number = 742596.464;
  lastUpdated: string = '15/05/2024 11:14:37';

  markets: Market[] = [
    { name: 'Abu Dhabi', marketValue: 9093.27, changeValue: 0.76, changePercentage: 0.1 },
    { name: 'Jordan', marketValue: 4662.43, changeValue: -45.47, changePercentage: -0.9 },
    { name: 'Bahrain', marketValue: 7093.26, changeValue: 16.56, changePercentage: 0.23 },
    { name: 'Saudi Arabia', marketValue: 4567.47, changeValue: 18.76, changePercentage: 0.3 },
    { name: 'Kuwait', marketValue: 1333.56, changeValue: -2.54, changePercentage: -0.15 },
    { name: 'Qatar', marketValue: 4900.33, changeValue: 5.58, changePercentage: 0.12 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
