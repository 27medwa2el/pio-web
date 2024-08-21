import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/data/reports-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  currentReportType: string = 'daily';
  reportsData: any[] = [];
  reportsPage: number = 1;

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  changeReportType(type: string): void {
    this.currentReportType = type;
    this.loadReports();
  }

  loadReports(): void {
    this.reportsService.getReports(this.currentReportType).subscribe(data => {
      this.reportsData = data;
    });
  }

  downloadFile(fileName: string): void {
    this.reportsService.downloadReportFile(fileName,this.currentReportType).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
