import { Component, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, style, query, transition, stagger, animate } from '@angular/animations'
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { LanguageService } from 'src/app/services/language/language.service';
import { ThisReceiver } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { MarketSummaryService } from 'src/app/services/data/market-summary.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger("animateMenu",[
      transition(":enter",[
        query("*", [
          style({opacity: 0, transform: "translateY(-50%)"}),
          stagger(50,[
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"}))
          ])
        ])
      ])
    ])
  ]
})



export class HeaderComponent implements OnInit {
  stockNews: any[] = [];
  stockNewsText: string = '';
  searchControl: FormControl = new FormControl();
  stocks: any[] = [];
  filteredStocks: any[] = [];
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number;
  languageFormControl: UntypedFormControl= new UntypedFormControl();
  cvName: string = "";
  currentDate = new Date();
  isMarketOpen = false;
  searchQuery = '';
  openedTab = '';

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    public languageService: LanguageService,
    private http: HttpClient,
    private marketSummaryService: MarketSummaryService
  ) { }

  ngOnInit(): void {

    this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val))

    this.languageFormControl.setValue(localStorage.getItem("language")??"en")
    this.fetchStocks();
    this.setupSearch();
    this.updateTime();
    this.checkMarketStatus();
  }

  fetchStocks() {
      this.marketSummaryService.getStocks().subscribe((data: any) => {
        this.stockNews = data;

      });
      this.marketSummaryService.getStocksGridData().subscribe((data: any) => {
        this.stocks = data;
        this.setupSearch();
      })
  }

  changeTab(id: string): void {
    const element = document.getElementById(id);
    const prevElement = document.getElementById(this.openedTab);

    if (id === this.openedTab)
    {
      element?.classList.add('d-block');
      this.openedTab = '';
    }else{
      prevElement?.classList.remove('d-block');
      element?.classList.add('d-block');
      this.openedTab = id;
    }

  }

  setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.filteredStocks = this.stocks.filter(stock => stock.englishName.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    console.log(this.filteredStocks);
  }
  onSelectStock(isin: string): void {
    this.filteredStocks = [];
    this.router.navigate(['/stock-details', isin]);
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(event.target as Node)) {
      this.filteredStocks = [];
    }
  }

  scroll(el) {
    if(document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> document.getElementById(el).scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  }
  updateTime() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }



  checkMarketStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    this.isMarketOpen = (day >= 1 && day <= 5) && (hour >= 9 && hour < 14) || (day >= 1 && day <= 5 && hour == 14 && minutes <= 30);
  }

  navigateTo(destination: string): void {
    switch (destination) {
      case 'eTrade':
        window.open('https://www.pioneers-securities.com/Etrade/', '_blank');
        break;
      case 'ultimateTrade':
        window.open('https://ultimate.pioneers-securities.com/Ultimate/Account/Login/', '_blank');
        break;
      case 'openAccount':
        window.open('https://www.pioneers-securities.com/Pioneers/OpenAccount/Create', '_blank');
        break;
      default:
        console.warn('Unknown navigation destination:', destination);
    }
  }

  search() {
    console.log(`Searching for ${this.searchQuery}`);
  }

  // downloadCV(){
  //   this.languageService.translateService.get("Header.cvName").subscribe(val => {
  //     this.cvName = val
  //     console.log(val)
  //     // app url
  //     let url = window.location.href;

  //     // Open a new window with the CV
  //     window.open(url + "/../assets/cv/" + this.cvName, "_blank");
  //   })

  // }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
    getScrollPosition(event) {
        this.pageYPosition=window.pageYOffset
    }

    changeLanguage(language: string) {
      this.languageFormControl.setValue(language);
      localStorage.setItem("language" , language);
      location.reload();
    }
}
