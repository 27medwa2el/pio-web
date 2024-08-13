import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';


@Component({
  selector: 'app-bonus-assemblies',
  templateUrl: './bonus-assemblies.component.html',
  styleUrls: ['./bonus-assemblies.component.scss']
})
export class BonusAssembliesComponent implements OnInit, OnChanges {
  @Input() stockIsin: string;
  bonusSharesData: any[] = [];
  assembliesData: any[] = [];

  constructor(
    private marketSummaryService: MarketSummaryService
  ) {}

  ngOnInit(): void {
    this.loadBonusShares();
    this.loadAssemblies();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stockIsin'] && changes['stockIsin'].currentValue) {
      // Load data whenever stockIsin changes
      this.loadBonusShares();
      this.loadAssemblies();
    }
  }
  loadBonusShares(): void {
    this.bonusSharesData = [];
    this.marketSummaryService.getStockBonusShares(this.stockIsin).subscribe(data => {
      this.bonusSharesData = data;
    });
  }

  loadAssemblies(): void {
    this.assembliesData = [];
    this.marketSummaryService.getStockAssemblies(this.stockIsin).subscribe(data => {
      this.assembliesData = data;
    });
  }
}
