import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { MoreProyectsComponent } from './more-proyects/more-proyects.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { NgbDropdownModule, NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DropdownSelectorComponent } from "../general/dropdown/dropdown.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider'; 
import { BaseChartDirective } from 'ng2-charts';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { MarketSummaryComponent } from './market-summary/market-summary.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectorsComponent } from './sectors/sectors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarketWatchComponent } from './market-watch/market-watch.component';
import { AdditionalTablesComponent } from './additional-tables/additional-tables.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecaptchaModule } from 'ng-recaptcha';
import { StocksInformationComponent } from './stocks-information/stocks-information.component';
import { ReportsComponent } from './reports/reports.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullAboutComponent } from './full-about/full-about.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProyectsComponent,
    MoreProyectsComponent,
    ContactComponent,
    ContactUsComponent,
    StockMarketComponent,
    MarketSummaryComponent,
    NewsComponent,
    SectorsComponent,
    MarketWatchComponent,
    AdditionalTablesComponent,
    StocksInformationComponent,
    ReportsComponent,
    FullAboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BaseChartDirective,
    BrowserAnimationsModule,
    NgbNavModule,
    NgbDropdownModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatOptionModule,
    CarouselModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RecaptchaModule,
    FontAwesomeModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    DropdownSelectorComponent
]
})
export class HomeModule { }
