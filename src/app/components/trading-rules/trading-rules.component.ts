import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-trading-rules',
  templateUrl: './trading-rules.component.html',
  styleUrls: ['./trading-rules.component.scss']
})
export class TradingRulesComponent implements OnInit {

  constructor(
    private analyticsService: AnalyticsService,
  ) {
  }

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio")
  }


}
