import { Component, OnInit } from '@angular/core';
import { CurrencyDto, SectorsDto } from 'src/app/models/market-summary/market-summary.model';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';
import { DateFormatterService } from '../../services/utilities/date-formatter.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {
  sectorsData: SectorsDto[] = [];
  currenciesData: CurrencyDto[] = [];
  selectedPeriod: string = 'W';
  dateFormatterService: any;

  constructor(private marketSummaryService: MarketSummaryService, dateFormatterService: DateFormatterService) {
    this.dateFormatterService = dateFormatterService;
  }

  ngOnInit(): void {
    this.loadSectorsData(this.selectedPeriod);
    this.loadCurrenciesData();
  }

  loadSectorsData(period: string): void {
    this.marketSummaryService.getSectorsActivity(period).subscribe((data: SectorsDto[]) => {
      this.sectorsData = data;
    });
  }

  loadCurrenciesData(): void {
    this.marketSummaryService.getCurrencies().subscribe((data: CurrencyDto[]) => {
      this.currenciesData = data;
    });
  }

  changePeriod(period: string): void {
    this.selectedPeriod = period;
    this.loadSectorsData(period);
  }
}