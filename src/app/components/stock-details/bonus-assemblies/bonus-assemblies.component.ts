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
  insiderTradingData: any[] = [];
  financialStatementsData: any[] = []; 
  auditReportsData: any[] = [];
  announcementsData: any[] = [];

  constructor(
    private marketSummaryService: MarketSummaryService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stockIsin'] && changes['stockIsin'].currentValue) {
      this.loadData();
    }
  }

  loadData(): void {
    this.loadBonusShares();
    this.loadAssemblies();
    this.loadInsiderTradings();
    this.loadFinancialStatements();
    this.loadAuditReports();
    this.loadAnnouncements();
  }

  loadBonusShares(): void {
    this.marketSummaryService.getStockBonusShares(this.stockIsin).subscribe(data => {
      this.bonusSharesData = data;
    });
  }

  loadInsiderTradings(): void {
    this.marketSummaryService.getStockInsiderTrading(this.stockIsin).subscribe(data => {
      this.insiderTradingData = data;
    });
  }

  loadAssemblies(): void {
    this.marketSummaryService.getStockAssemblies(this.stockIsin).subscribe(data => {
      this.assembliesData = data;
    });
  }

  loadFinancialStatements(): void {
    this.marketSummaryService.getCompaniesFinancialStatements(this.stockIsin).subscribe(data => {
      this.financialStatementsData = data.map(statement => ({
        ...statement,
        downloadUrl: this.createDownloadUrl(this.base64ToArrayBuffer(statement.dataContent))
      }));
    });
  }

  loadAuditReports(): void {
    this.marketSummaryService.getAuditReportsForStock(this.stockIsin).subscribe(data => {
      this.auditReportsData = data.map(report => ({
        ...report,
        downloadUrl: this.createDownloadUrl(this.base64ToArrayBuffer(report.annContent))
      }));
    });
  }

  loadAnnouncements(): void {
    this.marketSummaryService.getAnnouncementsForStock(this.stockIsin).subscribe(data => {
      this.announcementsData = data.map(announcement => ({
        ...announcement,
        downloadUrl: this.createDownloadUrl(this.base64ToArrayBuffer(announcement.annContent))
      }));
    });
  }

  createDownloadUrl(data: ArrayBuffer): string { 
    const blob = new Blob([data], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  }

  revokeUrl(url: string): void {
    URL.revokeObjectURL(url);
  }

  base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
