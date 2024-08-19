import { Component } from '@angular/core';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';

@Component({
  selector: 'app-additional-tables',
  templateUrl: './additional-tables.component.html',
  styleUrl: './additional-tables.component.scss'
})
export class AdditionalTablesComponent {
  dividends: any[]=[];
  currentSummary: string = 'dividends';
  bonusShares: any[] = [];
  genAssemblies: any[] = [];


  constructor(private marketSummaryService: MarketSummaryService) {}

  ngOnInit(): void {
    this.loadDividendsTables();
    this.loadGenAssemblies();
    this.loadBonusShares();
  }

  loadDividendsTables(): void {
    this.marketSummaryService.getDividendsTables().subscribe((data: any[]) => {
      this.dividends = data;
    });
  }

  loadGenAssemblies(): void {
    this.marketSummaryService.getGenAssembliesIsins().subscribe((data: any[]) => {
      this.genAssemblies = data;
    });
  }

  loadBonusShares(): void {
    this.marketSummaryService.getBonusShares().subscribe((data: any[]) => {
      this.bonusShares = data;
    });
  }

  

  changeSummary(type: string): void {
    this.currentSummary = type;
    switch (type) {
      case 'dividends':
        this.loadDividendsTables();
        break;
      case 'genAssemblies':
        this.loadGenAssemblies();
        break;
      case 'bonusShares':
        this.loadBonusShares();
        break;
    }
  }
}