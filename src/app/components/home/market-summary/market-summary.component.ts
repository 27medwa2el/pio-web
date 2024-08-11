import { Component, OnInit } from '@angular/core';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';
import { MarketSummary, EgxSummary, Investor, MarketIndicatorDto, Market } from 'src/app/models/market-summary/market-summary.model';



@Component({
  selector: 'app-market-summary',
  templateUrl: './market-summary.component.html',
  styleUrls: ['./market-summary.component.scss']
})
export class MarketSummaryComponent implements OnInit {
  summaryData: MarketSummary;
  currentSummary: string = 'market';
  investors: Investor[] = [];
  egxSummaries: EgxSummary[] = [];
  arabMarkets: Market[] = [];
  internationalMarkets: MarketIndicatorDto[] = [];
  selectedMarketType: string = 'All';
  showArabMarkets: boolean = true;
  showInternationalMarkets: boolean = false;

  constructor(private marketSummaryService: MarketSummaryService) {}

  ngOnInit(): void {
    this.loadMarketSummary();
    this.loadEgxSummary();
    this.loadInvestors();
    this.loadInternationalMarkets();
    this.loadArabicMarkets();
  }

  loadMarketSummary(): void {
    this.marketSummaryService.getMarketSummary().subscribe((data: MarketSummary) => {
      this.summaryData = data;
    });
  }

  loadEgxSummary(): void {
    this.marketSummaryService.getEgxSummary().subscribe((data: EgxSummary[]) => {
      this.egxSummaries = data;
    });
  }

  loadInvestors(): void {
    this.marketSummaryService.getInvestors().subscribe((data: Investor[]) => {
      this.investors = data;
    });
  }

  loadInternationalMarkets(): void {
    this.marketSummaryService.getInternationalMarketIndicators().subscribe((data: MarketIndicatorDto[]) => {
      this.internationalMarkets = data;
    });
  }
  loadArabicMarkets() : void {
    this.marketSummaryService.getArabMarketIndicators().subscribe((data: Market[]) => {
      this.arabMarkets = data;
    });
  }

  toggleArabMarkets(): void {
    this.showArabMarkets = true;
  }

  toggleInternationalMarkets(): void {
    this.showArabMarkets = false;
  }

  filterInternationalMarkets(type: string): void {
    this.selectedMarketType = type;
  }

  getFilteredInternationalMarkets(): MarketIndicatorDto[] {
    if (this.selectedMarketType === 'All') {
      return this.internationalMarkets;
    }
    return this.internationalMarkets.filter(market => market.marketTypeName === this.selectedMarketType);
  }

  changeSummary(type: string): void {
    this.currentSummary = type;
    switch (type) {
      case 'market':
        this.loadMarketSummary();
        break;
      case 'egx':
        this.loadEgxSummary();
        break;
      case 'trading':
        this.loadInvestors();
        break;
    }
  }
}
