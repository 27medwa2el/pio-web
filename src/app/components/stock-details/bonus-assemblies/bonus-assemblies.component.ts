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

  constructor(private marketSummaryService: MarketSummaryService) {}

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
      this.assembliesData = data.map(item => ({
        ...item,
        genIsinDate: this.parseDateString(item.genIsinDate)
      }));
    });
  }

  loadFinancialStatements(): void {
    this.marketSummaryService.getCompaniesFinancialStatements(this.stockIsin).subscribe(data => {
      this.financialStatementsData = data;
    });
  }

  loadAuditReports(): void {
    this.marketSummaryService.getAuditReportsForStock(this.stockIsin).subscribe(data => {
      this.auditReportsData = data;
    });
  }

  loadAnnouncements(): void {
    this.marketSummaryService.getAnnouncementsForStock(this.stockIsin).subscribe(data => {
      this.announcementsData = data;
    });
  }

  downloadPdf(id: number, isin: string): void {
    this.marketSummaryService.downloadFinancialStatementPdf(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${isin}_FinancialStatement.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  downloadAuditPdf(id: number, isin: string): void {
    this.marketSummaryService.downloadAuditReportPdf(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${isin}_AuditReport.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  downloadAnnouncementPdf(id: number, isin: string): void {
    this.marketSummaryService.downloadAnnouncementPdf(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${isin}_Announcement.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  
  parseDateString(dateString: string): Date {
    const [day, month, year] = dateString.split('/').map(part => parseInt(part, 10));
    return new Date(year, month - 1, day);
  }
}
