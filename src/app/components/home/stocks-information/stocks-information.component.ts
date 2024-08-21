import { Component, OnInit } from '@angular/core';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';

@Component({
  selector: 'app-stocks-information',
  templateUrl: './stocks-information.component.html',
  styleUrls: ['./stocks-information.component.scss']
})
export class StocksInformationComponent implements OnInit {
  currentSummary: string = 'insiderActions';
  insiderTradingData: any[] = [];
  financialStatementsData: any[] = [];
  auditReportsData: any[] = [];
  announcementsData: any[] = [];
  insiderTradingPage: number = 1;
  financialStatementsPage: number = 1;
  auditReportsPage: number = 1;
  announcementsPage: number = 1;

  constructor(private marketSummaryService: MarketSummaryService) {}

  ngOnInit(): void {
    this.loadInsiderTradings();
    this.loadFinancialStatements();
    this.loadAuditReports();
    this.loadAnnouncements();
  }

  changeSummary(summary: string): void {
    this.currentSummary = summary;
  }

  loadInsiderTradings(): void {
    this.marketSummaryService.getInsiderTrading().subscribe(data => {
      this.insiderTradingData = data;
    });
  }

  loadFinancialStatements(): void {
    this.marketSummaryService.getAllFinancialStatements().subscribe(data => {
      this.financialStatementsData = data;
    });
  }

  loadAuditReports(): void {
    this.marketSummaryService.getAllAuditReports().subscribe(data => {
      this.auditReportsData = data;
    });
  }

  loadAnnouncements(): void {
    this.marketSummaryService.getAllAnnouncements().subscribe(data => {
      this.announcementsData = data;
    });
  }

  downloadPdf(id: number, isin: string, type: string): void {
    let downloadObservable;

    switch(type) {
      case 'financialStatement':
        downloadObservable = this.marketSummaryService.downloadFinancialStatementPdf(id);
        break;
      case 'auditReport':
        downloadObservable = this.marketSummaryService.downloadAuditReportPdf(id);
        break;
      case 'announcement':
        downloadObservable = this.marketSummaryService.downloadAnnouncementPdf(id);
        break;
      default:
        console.error('Unknown type for PDF download');
        return;
    }

    downloadObservable.subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${isin}_${type}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
