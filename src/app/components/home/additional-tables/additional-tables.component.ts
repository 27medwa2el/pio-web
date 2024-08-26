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
  genAssembliesPage: number = 1;
  genAssembliesPageSize: number = 10;
  dividendsPage: number = 1;
  dividendsPageSize: number = 10;

  bonusSharesPage: number = 1;
  bonusSharesPageSize: number = 10;
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
      this.genAssemblies = data.map(item => ({
        ...item,
        genIsinDate: this.parseDateString(item.genIsinDate)
      }));
    });
  }

  loadBonusShares(): void {
    this.marketSummaryService.getBonusShares().subscribe((data: any[]) => {
      this.bonusShares = data;
    });
  }

  

  changeSummary(type: string): void {
    this.currentSummary = type;
    this.bonusSharesPage = 1;
    this.dividendsPage = 1;
    this.genAssembliesPage = 1;
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
  parseDateString(dateString: string): Date {
    const [day, month, year] = dateString.split('/').map(part => parseInt(part, 10));
    return new Date(year, month - 1, day);
  }
}
