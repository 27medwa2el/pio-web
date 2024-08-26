import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { NewsComponent } from './components/home/news/news.component';
import { ReportsComponent } from './components/home/reports/reports.component';
import { MarketSummaryComponent } from './components/home/market-summary/market-summary.component';
import { MarketWatchComponent } from './components/home/market-watch/market-watch.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { AdditionalTablesComponent } from './components/home/additional-tables/additional-tables.component';
import { StocksInformationComponent } from './components/home/stocks-information/stocks-information.component';
import { StockMarketComponent } from './components/home/stock-market/stock-market.component';
import { ContactComponent } from './components/home/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stock-details/:isin', component: StockDetailsComponent },
  { path: 'news', component: NewsComponent }, 
  { path: 'reports', component: ReportsComponent }, 
  { path: 'market-statistics', component: StockMarketComponent }, 
  { path: 'market-watch', component: MarketWatchComponent },
  { path: 'contact-us', component: ContactUsComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'agenda', component: AdditionalTablesComponent }, 
  { path: 'stocks-information', component: StocksInformationComponent }, 
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
