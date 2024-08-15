import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockDetailsComponent } from './stock-details.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BaseChartDirective } from 'ng2-charts';
import { BonusAssembliesComponent } from './bonus-assemblies/bonus-assemblies.component';
import { NgxPaginationModule } from 'ngx-pagination';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    StockDetailsComponent,
    BonusAssembliesComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    NgxPaginationModule,
    BaseChartDirective,
    FormsModule,
    CarouselModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class StockDetailsModule { }
