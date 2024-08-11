import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.scss']
})
export class MarketWatchComponent implements OnInit {
  stocks: any[] = [];
  displayedStocks: any[] = [];
  currentSortColumn: string = '';
  isAscending: boolean = true;
  borsaDate: Date = new Date();
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private marketSummaryService: MarketSummaryService,
              private router: Router) {}

  ngOnInit(): void {
    this.getStocksGridData();
  }

  getStocksGridData(): void {
    this.marketSummaryService.getStocksGridData().subscribe(data => {
      this.stocks = data;
      if (this.stocks.length > 0) {
        this.borsaDate = this.stocks[0].borsaDate;
      }
      this.applySortingAndPagination();
    });
  }

  navigateToDetails(isin: string): void {
    this.router.navigate(['/stock-details', isin]);
  }

  sortData(column: string): void {
    if (this.currentSortColumn === column) {
      this.isAscending = !this.isAscending;
    } else {
      this.isAscending = true;
      this.currentSortColumn = column;
    }

    this.stocks.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) {
        return this.isAscending ? -1 : 1;
      } else if (aValue > bValue) {
        return this.isAscending ? 1 : -1;
      } else {
        return 0;
      }
    });

    this.applySortingAndPagination();
  }

  applySortingAndPagination(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedStocks = this.stocks.slice(start, end);
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.applySortingAndPagination();
  }

  get totalPages(): number {
    return Math.ceil(this.stocks.length / this.itemsPerPage);
  }

  getPaginationPages(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
}
