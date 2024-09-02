"use strict";
(self["webpackChunkpioneers_web"] = self["webpackChunkpioneers_web"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_stock_details_stock_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stock-details/stock-details.component */ 9845);
/* harmony import */ var _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/news/news.component */ 3477);
/* harmony import */ var _components_home_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/reports/reports.component */ 4773);
/* harmony import */ var _components_home_market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/market-watch/market-watch.component */ 2659);
/* harmony import */ var _components_home_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/contact-us/contact-us.component */ 2098);
/* harmony import */ var _components_home_additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/additional-tables/additional-tables.component */ 8941);
/* harmony import */ var _components_home_stocks_information_stocks_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/stocks-information/stocks-information.component */ 8531);
/* harmony import */ var _components_home_stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/stock-market/stock-market.component */ 4377);
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/contact/contact.component */ 7301);
/* harmony import */ var _components_home_full_about_full_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/full-about/full-about.component */ 7333);
/* harmony import */ var _components_home_more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/more-proyects/more-proyects.component */ 5237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);















const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  pathMatch: 'full'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'stock-details/:isin',
  component: _components_stock_details_stock_details_component__WEBPACK_IMPORTED_MODULE_1__.StockDetailsComponent
}, {
  path: 'news',
  component: _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_2__.NewsComponent
}, {
  path: 'about',
  component: _components_home_full_about_full_about_component__WEBPACK_IMPORTED_MODULE_10__.FullAboutComponent
}, {
  path: 'reports',
  component: _components_home_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__.ReportsComponent
}, {
  path: 'market-statistics',
  component: _components_home_stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_8__.StockMarketComponent
}, {
  path: 'market-watch',
  component: _components_home_market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_4__.MarketWatchComponent
}, {
  path: 'contact-us',
  component: _components_home_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__.ContactUsComponent
}, {
  path: 'trading-rules',
  component: _components_home_more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_11__.MoreProyectsComponent
}, {
  path: 'contact',
  component: _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent
}, {
  path: 'agenda',
  component: _components_home_additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_6__.AdditionalTablesComponent
}, {
  path: 'stocks-information',
  component: _components_home_stocks_information_stocks_information_component__WEBPACK_IMPORTED_MODULE_7__.StocksInformationComponent
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 9263);
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/header/header.component */ 3538);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 678);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);









class AppComponent {
  constructor(titleService, metaService, translateService, location, languageService) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.translateService = translateService;
    this.location = location;
    this.languageService = languageService;
    this.title = 'Pioneers-securities';
  }
  ngOnInit() {
    this.languageService.initLanguage();
    this.titleService.setTitle("Pioneers Securities");
    this.metaService.addTags([{
      name: 'keywords',
      content: 'Pioneers, Securities, trading'
    }, {
      name: 'description',
      content: 'Pioneers securities the biggest trading company in egypt through the years.'
    }]);
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 3908);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 2864);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _components_stock_details_stock_details_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stock-details/stock-details.module */ 6616);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 6970);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);






// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';





















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService, (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_9__.provideAnimationsAsync)(), (0,ng2_charts__WEBPACK_IMPORTED_MODULE_10__.provideCharts)((0,ng2_charts__WEBPACK_IMPORTED_MODULE_10__.withDefaultRegisterables)())],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _components_stock_details_stock_details_module__WEBPACK_IMPORTED_MODULE_5__.StockDetailsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOptionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownModule,
    // AnimateOnScrollModule.forRoot(),
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
    }),
    // NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient]
      }
    }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_23__.RecaptchaModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _components_stock_details_stock_details_module__WEBPACK_IMPORTED_MODULE_5__.StockDetailsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOptionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownModule,
    // AnimateOnScrollModule.forRoot(),
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_23__.RecaptchaModule]
  });
})();

/***/ }),

/***/ 9034:
/*!*******************************************************************!*\
  !*** ./src/app/components/general/dropdown/dropdown.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownSelectorComponent: () => (/* binding */ DropdownSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 4646);







class DropdownSelectorComponent {
  constructor() {
    this.config = {};
    this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dropDownList = [];
    this.selectedValue = null;
  }
  ngOnInit() {}
  ngOnChanges(changes) {
    if (changes.config) {
      this.dropDownList = this.config.dropDownList || [];
      this.selectedValue = this.config.selectedValue ?? -1;
      this.valueField = this.config.valueField || 'value';
      this.labelField = this.config.labelField || 'label';
      this.placeholder = this.config.placeholder || 'placeholder';
      this.heading = this.config.heading;
    }
  }
  onSelectionChange() {
    this.selectionChanged.emit(this.selectedValue);
  }
  static #_ = this.ɵfac = function DropdownSelectorComponent_Factory(t) {
    return new (t || DropdownSelectorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DropdownSelectorComponent,
    selectors: [["app-dropdown"]],
    inputs: {
      config: "config"
    },
    outputs: {
      selectionChanged: "selectionChanged"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "dropdown-label"]],
    template: function DropdownSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please select the ", ctx.heading, "");
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 678:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/contract.service */ 9961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);










function FooterComponent_div_95_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "footer.contactForm.nameRequired"), " ");
  }
}
function FooterComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FooterComponent_div_95_small_1_Template, 3, 3, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFooterForm.get("name").hasError("required"));
  }
}
function FooterComponent_div_98_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "footer.contactForm.emailRequired"), " ");
  }
}
function FooterComponent_div_98_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "footer.contactForm.emailInvalid"), " ");
  }
}
function FooterComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FooterComponent_div_98_small_1_Template, 3, 3, "small", 45)(2, FooterComponent_div_98_small_2_Template, 3, 3, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFooterForm.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFooterForm.get("email").hasError("email"));
  }
}
function FooterComponent_div_101_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "footer.contactForm.messageRequired"), " ");
  }
}
function FooterComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FooterComponent_div_101_small_1_Template, 3, 3, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFooterForm.get("message").hasError("required"));
  }
}
function FooterComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r0.message));
  }
}
class FooterComponent {
  constructor(fb, contactService) {
    this.fb = fb;
    this.contactService = contactService;
    this.siteKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.recaptchaSiteKey;
  }
  ngOnInit() {
    this.loadReCaptchaScript();
    this.contactFooterForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      country: [' '],
      city: [' '],
      phone: [' '],
      subject: ['رسالة سريعة من الموقع']
    });
    this.language = localStorage.getItem("Language");
    console.log(this.contactFooterForm.invalid);
    console.log(this.contactFooterForm.get('name').errors);
    console.log(this.contactFooterForm.get('email').errors);
    console.log(this.contactFooterForm.get('message').errors);
  }
  loadReCaptchaScript() {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
  onFooterFormSubmit() {
    if (this.contactFooterForm.valid && this.recaptchaToken) {
      this.recaptchaToken = '';
      const formData = this.contactFooterForm.value;
      formData.phone = ' ';
      formData.country = ' ';
      formData.phone = ' ';
      formData.subject = 'رسالة سريعة من الموقع';
      console.log(formData);
      this.contactService.sendContactForm(formData).subscribe(response => {
        this.language === "en" ? this.message = 'Message sent successfully' : this.message = 'تم إرسال الرسالة بنجاح';
        this.messageClass = 'alert-success';
        this.contactFooterForm.reset();
      }, error => {
        this.language === "en" ? this.message = 'Error sending message' : this.message = 'حدث خطأ أثناء إرسال الرسالة';
        this.messageClass = 'alert-danger';
      });
    } else {
      console.log("not working");
      this.language === "en" ? this.message = 'Please fill out the entire form correctly and solve the captcha.' : this.message = 'من فضلك أدخل جميع البيانات وقم بحل كلمة التحقق';
      this.messageClass = 'alert-warning';
    }
  }
  onFooterCaptchaResolved(captchaResponse) {
    this.recaptchaToken = captchaResponse;
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_contract_service__WEBPACK_IMPORTED_MODULE_1__.ContactService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 112,
    vars: 86,
    consts: [[1, "footer", 3, "dir"], [1, "container"], [1, "row"], [1, "col-md-4", "text-center"], ["src", "assets/images/pioLogo.png", 1, "footer-logo", "mb-4", 2, "background-color", "white", 3, "alt"], [1, "footer-contact-info"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone"], [1, "fas", "fa-code-branch"], [3, "routerLink"], [1, "fas", "fa-envelope"], [3, "href"], [1, "col-md-4"], [1, "footer-title"], [1, "footer-links-container"], [1, "footer-links"], [1, "footer-social-icons"], ["href", "https://www.facebook.com/PioneersSecurities", "target", "_blank"], [1, "fab", "fa-facebook-f"], ["href", "https://x.com/PioSec/", "target", "_blank"], [1, "fab", "fa-twitter"], ["href", "hhttps://open.spotify.com/show/4bScgs3LywR2KFj4lotZ3S?si=47dc17ad801f4905", "target", "_blank"], [1, "fab", "fa-spotify"], ["href", "https://whatsapp.com/channel/0029Va21eln1iUxR3gxiq01l", "target", "_blank"], [1, "fab", "fa-whatsapp"], ["href", "https://t.me/+qj0TIQiOvihmM2E0", "target", "_blank"], [1, "fab", "fa-telegram"], ["href", "https://www.tiktok.com/@pioneerssecurities?fbclid=IwY2xjawEm075leHRuA2FlbQIxMAABHX3TWgKXNCzjyxf1W7YBbEwPAFexw1ltgjYuOwqXAcXI9wW7PpJqa2D7rg_aem_3fIWGQsik_WQOyU17yj9tg", "target", "_blank"], [1, "fab", "fa-tiktok"], ["href", "https://www.instagram.com/pioneers.securities/", "target", "_blank"], [1, "fab", "fa-instagram"], ["href", "https://play.google.com/store/apps/details?id=tea.mobile.view.pioneersApp&hl=en_US", "target", "_blank"], [1, "fab", "fa-google-play"], ["href", "https://apps.apple.com/tc/app/pioneers-egypt/id1196384460", "target", "_blank"], [1, "fab", "fa-apple"], [1, "footer-contact-form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", "required", "", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "formControlName", "email", "required", "", 3, "placeholder"], ["formControlName", "message", "required", "", 3, "placeholder"], [3, "resolved", "siteKey"], ["type", "submit", 3, "disabled"], ["class", "mt-3 alert", 3, "ngClass", 4, "ngIf"], [1, "footer-bottom", "text-center", "py-3"], [1, "invalid-feedback"], [4, "ngIf"], [1, "mt-3", "alert", 3, "ngClass"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 5)(8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12)(28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14)(32, "ul", 15)(33, "li")(34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li")(38, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li")(42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li")(46, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ul", 15)(50, "li")(51, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li")(55, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "li")(59, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li")(63, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 16)(70, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 12)(89, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FooterComponent_Template_form_ngSubmit_92_listener() {
          return ctx.onFooterFormSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, FooterComponent_div_95_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, FooterComponent_div_98_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, FooterComponent_div_101_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "re-captcha", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resolved", function FooterComponent_Template_re_captcha_resolved_102_listener($event) {
          return ctx.onFooterCaptchaResolved($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, FooterComponent_div_106_Template, 3, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 43)(108, "div", 1)(109, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 40, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 42, "footer.logoAlt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 44, "footer.contact.address"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 46, "footer.contact.phone"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 48, "footer.contact.branches"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 50, "footer.contact.email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 52, "footer.contact.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 54, "footer.companyLinks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 56, "Header.Item1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 58, "Header.Item4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/news");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 60, "Header.Item3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/market-watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 62, "Header.Item2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/market-statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 64, "Header.Item5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/contact-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 66, "Header.Item6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/stocks-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 68, "Header.Item8"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/agenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 70, "Header.Item7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](68, 72, "footer.social.findUsOn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](91, 74, "footer.contactForm.quickContact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactFooterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](94, 76, "footer.contactForm.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactFooterForm.get("name").invalid && ctx.contactFooterForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](97, 78, "footer.contactForm.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactFooterForm.get("email").invalid && ctx.contactFooterForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](100, 80, "footer.contactForm.message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactFooterForm.get("message").invalid && ctx.contactFooterForm.get("message").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("siteKey", ctx.siteKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.recaptchaToken);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](105, 82, "footer.contactForm.send"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](111, 84, "footer.copyright"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__.RecaptchaComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #1A3A5A;\n  position: relative;\n  background-image: url('footer-bg.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  padding: 45px 0 0 0;\n  color: #ffffff;\n  font-family: Open Sans !important;\n}\n.footer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(70, 109, 148, 0.9);\n  z-index: 1;\n}\n.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-bottom: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 30px 0px;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-info[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .footer-links-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n  margin-bottom: 10px;\n  display: block;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .footer-social-icons[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-right: 15px;\n  font-size: 18px;\n}\n.footer[_ngcontent-%COMP%]   .footer-social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1E90FF;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  background-color: #f5f5f5;\n  border: none;\n  border-radius: 5px;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #003366;\n  color: #ffffff;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #1E90FF;\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-title[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-contact-info[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-contact-form[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-social-icons[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-links-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 20px 0;\n  margin-top: 2%;\n}\n\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQURKO0FBR0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxVQUFBO0FBRFI7QUFJSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZSO0FBS0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQU1JO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUxSO0FBT1E7RUFDSSxtQkFBQTtBQUxaO0FBT1k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBTGhCO0FBUVk7RUFDSSxjQUFBO0FBTmhCO0FBUWdCO0VBQ0ksMEJBQUE7QUFOcEI7QUFZSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQVZSO0FBYUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQVhSO0FBYVE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFYWjtBQWFZO0VBQ0ksMEJBQUE7QUFYaEI7QUFnQkk7RUFDSSxnQkFBQTtBQWRSO0FBZ0JRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWRaO0FBZ0JZO0VBQ0ksY0FBQTtBQWRoQjtBQW9CUTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFsQlo7QUFxQlE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFuQlo7QUFxQlk7RUFDSSx5QkFBQTtBQW5CaEI7QUF3Qkk7RUFDSTtJQUNJLGtCQUFBO0VBdEJWO0VBeUJNO0lBQ0ksZ0JBQUE7RUF2QlY7RUEwQk07OztJQUdJLGtCQUFBO0VBeEJWO0VBNEJVO0lBQ0ksV0FBQTtFQTFCZDtFQThCTTtJQUNJLGtCQUFBO0VBNUJWO0VBOEJVO0lBQ0ksbUJBQUE7RUE1QmQ7RUFnQ007SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0VBOUJWO0FBQ0Y7QUFpQ0k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBL0JSOztBQW1DQTtFQUNJLGlCQUFBO0VBQ0EsbUpDOUpPO0VEK0pQLGdCQUFBO0FBaENKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBM0E1QTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3Rlci1iZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogNDVweCAwIDAgMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udCAhaW1wb3J0YW50O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCAxMDksIDE0OCwgMC45KTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1jb250YWN0LWluZm8ge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1saW5rcy1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWxpbmtzIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMUU5MEZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY29udGFjdC1mb3JtIHtcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMzNjY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXItdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3Rlci1jb250YWN0LWluZm8sXHJcbiAgICAgICAgLmZvb3Rlci1saW5rcyxcclxuICAgICAgICAuZm9vdGVyLWNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXItY29udGFjdC1mb3JtIHtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyLXNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3Rlci1saW5rcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgfVxyXG59XHJcblxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuIiwiXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM3MTk2ZTk7XHJcbiRHcmVlbk9sZCAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJE5hdnlCYWNrIDogIzI3NDI2NDtcclxuJE5hdnlUZXh0IDogcmdiKDksIDcxLCAxMTIpO1xyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogT3BlbiBTYW5zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("animateFooter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0,
        transform: "translateY(100%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 2864:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralModule: () => (/* binding */ GeneralModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 678);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.component */ 540);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);













function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class GeneralModule {
  static #_ = this.ɵfac = function GeneralModule_Factory(t) {
    return new (t || GeneralModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: GeneralModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__.RecaptchaModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__.RecaptchaModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
  });
})();

/***/ }),

/***/ 3538:
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 9263);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 852);













const _c0 = a0 => ({
  "dropdown-menu": true,
  "dropdown-menu-end": a0
});
const _c1 = a0 => ({
  "pointer-events": a0
});
const _c2 = a0 => ({
  "color": a0
});
function HeaderComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.changeLanguage("ar"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.changeLanguage("en"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_38_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_38_li_2_Template_li_click_0_listener() {
      const stock_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSelectStock(stock_r6.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r6.englishName, " ");
  }
}
function HeaderComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HeaderComponent_div_38_li_2_Template, 2, 1, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.filteredStocks.slice(0, 10));
  }
}
function HeaderComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "First content");
  }
}
function HeaderComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "First content");
  }
}
function HeaderComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_div_112_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_112_li_2_Template_li_click_0_listener() {
      const stock_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSelectStock(stock_r8.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r8.englishName, " ");
  }
}
function HeaderComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HeaderComponent_div_112_li_2_Template, 2, 1, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.filteredStocks.slice(0, 10));
  }
}
function HeaderComponent_ng_container_169_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span")(1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stock_r9.englishName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r9.open, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c2, stock_r9.change > 0 ? "green" : stock_r9.change == 0 ? "rgb(20, 20, 20)" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r9.close, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c2, stock_r9.change > 0 ? "green" : stock_r9.change == 0 ? "rgb(20, 20, 20)" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r9.change, "% ");
  }
}
function HeaderComponent_ng_container_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HeaderComponent_ng_container_169_span_1_Template, 10, 10, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.stockNews);
  }
}
function HeaderComponent_ng_template_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "No news available");
  }
}
class HeaderComponent {
  constructor(router, analyticsService, languageService, http, marketSummaryService) {
    this.router = router;
    this.analyticsService = analyticsService;
    this.languageService = languageService;
    this.http = http;
    this.marketSummaryService = marketSummaryService;
    this.stockNews = [];
    this.stockNewsText = '';
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
    this.stocks = [];
    this.filteredStocks = [];
    this.responsiveMenuVisible = false;
    this.showDropdown = false;
    this.showSubMenu = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl();
    this.cvName = "";
    this.currentDate = new Date();
    this.formattedDate = "";
    this.isMarketOpen = false;
    this.searchQuery = '';
    this.openedTab = '';
    this.isDropdownOpen = false;
  }
  ngOnInit() {
    this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val));
    this.languageFormControl.setValue(localStorage.getItem("language") ?? "en");
    this.fetchStocks();
    this.setupSearch();
    this.updateTime();
    this.checkMarketStatus();
  }
  fetchStocks() {
    this.marketSummaryService.getStocks().subscribe(data => {
      this.stockNews = data;
    });
    this.marketSummaryService.getStocksGridData().subscribe(data => {
      this.stocks = data;
      this.setupSearch();
    });
  }
  changeTab(id) {
    const element = document.getElementById(id);
    const prevElement = document.getElementById(this.openedTab);
    if (id === this.openedTab) {
      element?.classList.remove('d-block');
      this.openedTab = '';
    } else {
      prevElement?.classList.remove('d-block');
      element?.classList.add('d-block');
      this.openedTab = id;
    }
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  openDropdown() {
    this.showDropdown = true;
  }
  closeDropdown() {
    this.showDropdown = false;
  }
  openMainDropdown() {
    this.isDropdownOpen = true;
    if (this.closeDropdownTimeout) {
      clearTimeout(this.closeDropdownTimeout);
    }
  }
  closeMainDropdown() {
    this.isDropdownOpen = false;
  }
  closeMainDropdownWithDelay() {
    this.closeDropdownTimeout = setTimeout(() => {
      this.closeDropdown();
    }, 3000);
  }
  setupSearch() {
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe(searchTerm => {
      this.filteredStocks = this.stocks.filter(stock => stock.englishName.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    console.log(this.filteredStocks);
  }
  onSelectStock(isin) {
    this.filteredStocks = [];
    this.router.navigate(['/stock-details', isin]);
  }
  onDocumentClick(event) {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(event.target)) {
      this.filteredStocks = [];
    }
  }
  scroll(el) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el).scrollIntoView({
        behavior: 'smooth'
      }));
    }
    this.responsiveMenuVisible = false;
  }
  updateTime() {
    setInterval(() => {
      this.currentDate = new Date();
      if (this.languageFormControl.value === 'ar') {
        this.formattedDate = this.currentDate.toLocaleString('ar-EG-u-nu-latn', {
          // weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        });
      } else {
        this.formattedDate = this.currentDate.toLocaleString('en-US', {
          // weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        });
      }
    }, 1000);
  }
  checkMarketStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    this.isMarketOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 14 || day >= 1 && day <= 5 && hour == 14 && minutes <= 30;
  }
  marketStatus() {
    const lang = localStorage.getItem('language') ?? 'en';
    if (lang === 'en') {
      return this.isMarketOpen ? 'Open 🟢' : 'Closed 🔴';
    } else {
      return this.isMarketOpen ? 'مفتوح 🟢' : 'مغلق 🔴';
    }
  }
  navigateTo(destination) {
    this.responsiveMenuVisible = false;
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
  closeMenu() {
    this.responsiveMenuVisible = false;
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
  getScrollPosition(event) {
    this.pageYPosition = window.pageYOffset;
  }
  changeLanguage(language) {
    this.languageFormControl.setValue(language);
    localStorage.setItem("language", language);
    location.reload();
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_2__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"])("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
          return ctx.getScrollPosition(ctx.getScrollPosition($event));
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    decls: 172,
    vars: 137,
    consts: [["nav", "ngbNav"], ["noNews", ""], [1, "navbar", "main-navbar", "on-top"], [1, "status-bar", 3, "dir"], [1, "status-content"], [1, "row-1"], ["src", "assets/icons/calendar.png", "alt", "Date and Time", "width", "16", "height", "16"], [1, "datetime"], [1, "row-2"], ["ngbDropdown", "", 1, "d-inline-block", 3, "mouseover", "mouseout"], [1, "btn", "btn-secondary", "dropdown-toggle"], ["src", "assets/icons/line-chart.png", "alt", "Trade", "width", "16", "height", "16"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item", 3, "click"], ["src", "assets/icons/line-chart.png", "alt", "eTrade", "width", "16", "height", "16"], ["src", "assets/icons/line-chart.png", "alt", "Ultimate Trade", "width", "16", "height", "16"], [1, "open-account-button", 3, "click"], ["src", "assets/icons/add-user.png", "alt", "Open Account", "width", "16", "height", "16"], ["class", "open-account-button", 3, "click", 4, "ngIf"], [1, "row-3"], [1, "search-container", "ignore-mb"], ["type", "text", 3, "placeholder", "formControl"], [1, "search-icon-button", 3, "click"], ["src", "assets/icons/search.svg", "alt", "Search"], ["class", "search-results", 4, "ngIf"], [1, "mid-container", 3, "dir"], [1, "navbar-brand", "text-light", 3, "routerLink"], ["src", "assets/images/pioLogo.png", "width", "25"], [1, "nav-center-wrapper"], ["ngbNav", "", 1, "menu-ul"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "routerLink"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbNavItem", "", 1, "underline", "nav-item", "dropdown", 3, "mouseover", "mouseout"], ["id", "navbarDropdown", "role", "button", 1, "nav-link", "dropdown-toggle", "nav-text"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 3, "ngClass"], [1, "dropdown-item", 3, "routerLink"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "language-icon"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [1, "search-container"], [1, "search-icon-button", "ignore-mb", 3, "click"], [3, "click"], [3, "routerLink"], [1, "language-container"], [1, "language-container", "language-container-selector", "active", 3, "click"], ["src", "https://www.worldometers.info/img/flags/eg-flag.gif", "alt", "Arabic"], [1, "flag-text", 2, "direction", "rtl"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-check2", "arrow-active"], ["d", "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"], [1, "language-container", "language-container-selector", 3, "click"], ["src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English"], [1, "flag-text"], [1, "news-ticker"], [4, "ngIf", "ngIfElse"], ["src", "assets/icons/worldwide.png", "alt", "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "width", "16", "height", "16"], ["src", "assets/icons/worldwide.png", "alt", "English", "width", "16", "height", "16", 2, "margin-left", "5px"], [1, "search-results"], [3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "stock-name"], [2, "color", "rgb(20, 20, 20)"], [1, "close-price", 3, "ngStyle"], [3, "ngStyle"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 2)(1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function HeaderComponent_Template_div_mouseover_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openDropdown());
        })("mouseout", function HeaderComponent_Template_div_mouseout_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeDropdown());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigateTo("eTrade"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigateTo("ultimateTrade"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigateTo("openAccount"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, HeaderComponent_button_30_Template, 3, 0, "button", 18)(31, HeaderComponent_button_31_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19)(33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.search());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, HeaderComponent_div_38_Template, 3, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 28)(44, "ul", 29, 0)(46, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, HeaderComponent_ng_template_52_Template, 1, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function HeaderComponent_Template_li_mouseover_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openMainDropdown());
        })("mouseout", function HeaderComponent_Template_li_mouseout_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMainDropdownWithDelay());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 37)(58, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_67_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, HeaderComponent_ng_template_73_Template, 1, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_74_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, HeaderComponent_ng_template_80_Template, 1, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function HeaderComponent_Template_li_mouseover_81_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openMainDropdown());
        })("mouseout", function HeaderComponent_Template_li_mouseout_81_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMainDropdownWithDelay());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 39)(86, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_92_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, HeaderComponent_ng_template_98_Template, 1, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 41)(101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_101_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 43)(103, "aside", 44)(104, "nav")(105, "ol")(106, "li")(107, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_110_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.search());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](112, HeaderComponent_div_112_Template, 3, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_113_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_118_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_123_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_128_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_133_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_138_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](142, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_143_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_148_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click");
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "li")(154, "div", 49)(155, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_155_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.changeLanguage("ar"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "svg", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_161_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.changeLanguage("en"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "svg", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 58)(168, "marquee");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](169, HeaderComponent_ng_container_169_Template, 2, 1, "ng-container", 59)(170, HeaderComponent_ng_template_170_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const noNews_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 79, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.formattedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.marketStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 81, "Trade Now"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 83, "eTrade"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 85, "Ultimate Trade"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 87, "openAccount"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value === "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value === "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 89, "search"), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredStocks.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 91, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 93, "Header.Item1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.isDropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 95, "Header.Item4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](133, _c0, ctx.languageFormControl.value === "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 97, "Header.Item4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/agenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 99, "Header.Item7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/stocks-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 101, "Header.Item8"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/news");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 103, "Header.Item3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/trading-rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 105, "Header.Item10"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.isDropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](84, 107, "Header.Item5"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/market-statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](88, 109, "MarketStatus.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/market-watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](91, 111, "Header.Item2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/contact-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](97, 113, "Header.Item6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](135, _c1, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](109, 115, "search"), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredStocks.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](117, 117, "Header.Item1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/market-statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](122, 119, "Header.Item5"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/news");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](127, 121, "Header.Item3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/market-watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](132, 123, "Header.Item2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](137, 125, "Header.Item4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/stocks-information");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](142, 127, "Header.Item8"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/agenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](147, 129, "Header.Item7"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/contact-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](152, 131, "Header.Item6"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("direction", ctx.languageFormControl.value === "ar" ? "right" : "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stockNews.length > 0)("ngIfElse", noNews_r10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLinkBase, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: [".navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 0 !important;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n  padding-right: 40px;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin-left: -35px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background-color: white;\n  border: 1px solid #ccc;\n  z-index: 1000;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  color: #000;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.nav-item[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: #0d0e12;\n  border: none;\n  font-size: 15px;\n  padding: 10px 15px;\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  transition: background-color 0.3s, color 0.3s;\n}\n\n.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #e6e9ee;\n  border: 1px solid #7196e9;\n  border-radius: 5px;\n  margin-top: 0px;\n  z-index: 1000;\n  padding: 0;\n  min-width: 200px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: #0d0e12;\n  font-size: smaller;\n  text-decoration: none;\n  display: block;\n  width: 100%;\n  background-color: #e6e9ee;\n  transition: background-color 0.3s, color 0.3s;\n}\n.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #7196e9;\n  color: white;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  left: auto;\n}\n[dir=rtl][_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  left: auto;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.main-navbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir(ltr) {\n  font-family: Open Sans;\n}\n\n.main-navbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir(rtl) {\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  font-weight: 2200;\n  text-align: right;\n}\n\n.sub-menu[_ngcontent-%COMP%] {\n  float: left;\n  display: none;\n  height: 0 !important;\n  width: 100%;\n  margin: 0 0 0 0 !important;\n  padding: 0 !important;\n  list-style-type: none !important;\n}\n.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0 !important;\n  padding: 5px 0 !important;\n  background-color: rgba(168, 178, 209, 0.8);\n  opacity: 0.1;\n  transition: 0.3s;\n}\n.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d0e12;\n  text-decoration: none;\n}\n.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #8892b0;\n}\n\n.sub-menu-responsive[_ngcontent-%COMP%] {\n  display: none;\n  list-style-type: none !important;\n}\n\nli[_ngcontent-%COMP%]:hover   .sub-menu[_ngcontent-%COMP%] {\n  display: block;\n}\nli[_ngcontent-%COMP%]:hover   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #e6e9ee;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #e6e9ee;\n  height: 100%;\n  position: relative;\n  right: -753px;\n  margin-left: auto;\n  font-family: Open Sans;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #0d0e12;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #7196e9;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 15px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #7196e9;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #7196e9;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: white !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  display: block;\n  width: 36px;\n  height: 1.5px;\n  background: white;\n  transition: all 0.15s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: white;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  bottom: 8px;\n  transition: bottom 0.05s 0.05s ease-in-out, transform 0.05s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  top: 8px;\n  transition: top 0.05s 0.05s ease-in-out, transform 0.05s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 0.05s ease-in-out, transform 0.05s 0.05s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 0.05s ease-in-out, transform 0.05s 0.05s ease-in-out;\n}\n\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 130px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 130px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n.d-inline-block[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #e6e9ee;\n  border: 1px solid #7196e9;\n  border-radius: 5px;\n  font-size: 12px;\n}\n.d-inline-block[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.d-inline-block[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 991px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .language-container-full-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ignore-mb[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (min-width: 991px) {\n  .ignore-mb[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: Open Sans;\n}\n\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.language-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.language-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: auto;\n}\n\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n\n  .dropdown-toggle::after {\n  display: none;\n}\n\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n\n.row-2[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  color: #0d0e12;\n  border: none;\n  font-size: 12px;\n}\n.row-2[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover, .row-2[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #7196e9;\n  color: white;\n}\n\n.row-2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border: 1px solid #7196e9;\n  border-radius: 5px;\n  font-size: 12px;\n}\n.row-2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  color: black;\n}\n.row-2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #7196e9;\n  color: white;\n}\n\n.status-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #e6e6e6;\n  padding: 10px 0;\n  text-align: center;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  font-family: Open Sans;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 10px;\n  color: #000;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .open-account-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #303C55;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%]:hover, .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .open-account-button[_ngcontent-%COMP%]:hover {\n  color: #7196e9;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 200px;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #021016;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  border: none;\n  background-color: #112240;\n  color: white;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]:hover {\n  background-color: #030f16;\n}\n\n.mid-container[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  background-color: #112240;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mid-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n.mid-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mid-container[_ngcontent-%COMP%]   .language-icon[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n.mid-container[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  color: white !important;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .language-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 991px) {\n  .language-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .open-account-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n    flex: 3 6 20%;\n    text-align: center;\n  }\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n    flex: 3 6 2%;\n    text-align: center;\n    width: 1px;\n    height: 25px;\n    border-radius: 100%;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n}\n@media (max-width: 500px) {\n  .language-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .status-bar[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    justify-content: center;\n    text-align: center;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n.news-ticker[_ngcontent-%COMP%] {\n  color: #7196e9;\n  padding: 5px 0;\n  font-family: Open Sans;\n}\n.news-ticker[_ngcontent-%COMP%]   span.stock-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.news-ticker[_ngcontent-%COMP%]   marquee[_ngcontent-%COMP%] {\n  color: #0d0e12;\n}\n\n.status-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  vertical-align: middle;\n}\n\n.dropdown-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBREY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRE47QUFHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRFI7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFITjtBQUtNO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFIUjtBQUtRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBSFY7QUFLVTtFQUNFLHlCQUFBO0FBSFo7O0FBWUE7RUFDRSx5QkM3RGM7RUQ4RGQsY0MxRGM7RUQyRGQsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUFURjs7QUFvQkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNwRmM7RURxRmQseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWpCRjtBQXFCSTtFQUNFLGtCQUFBO0VBRUEsY0M5RlU7RUQrRlYsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJDeEdVO0VEeUdWLDZDQUFBO0FBcEJOO0FBc0JNO0VBQ0UseUJDckdRO0VEc0dSLFlBQUE7QUFwQlI7O0FBMEJBO0VBQ0UsVUFBQTtBQXZCRjtBQXlCQTtFQUNFLFVBQUE7QUF2QkY7O0FBNEJBO0VBQ0UsY0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsY0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxzQkM3SFM7QURvR1g7O0FBMkJBO0VBQ0UsbUpDaklTO0VEa0lULGlCQUFBO0VBQ0EsaUJBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7QUF5QkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF2Qko7QUF3Qkk7RUFDRSxjQzlKVTtFRCtKVixxQkFBQTtBQXRCTjtBQTBCRTtFQUNFLGVBQUE7RUFDQSx5QkN2S1k7QUQrSWhCOztBQTZCQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQTFCRjs7QUE4QkU7RUFDRSxjQUFBO0FBM0JKO0FBNEJJO0VBQ0UsVUFBQTtBQTFCTjs7QUErQkE7RUFDSSxZQUFBO0VBQ0EsbUJDL0xZO0FEbUtoQjtBQStCTTtFQUNFLGdCQUFBO0FBN0JSO0FBZ0NNO0VBQ0UsZ0JBQUE7QUE5QlI7QUFnQ007RUFDRSxpQkFBQTtBQTlCUjtBQW1DSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZEQUFBO0FBakNSO0FBbUNVO0VBQ0Usd0JBQUE7QUFqQ1o7QUFtQ1U7RUFDRSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsaUJBQUE7QUFqQ1o7QUFtQ1U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFqQ1o7QUFtQ1U7RUFDRSxhQUFBO0FBakNaO0FBa0NZO0VBQ0UsV0FBQTtBQWhDZDtBQXNDSTtFQUNJLDZEQUFBO0VBQ0EsVUFBQTtBQXBDUjtBQXNDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDL1BRO0VEZ1FSLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQ3ZQRztFRHdQSCxxREFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtBQXBDUjtBQXFDUTtFQUNJLGFBQUE7RUFFQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzVRSTtBRHlPaEI7QUFvQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWxDaEI7QUFtQ2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBakNwQjtBQWtDb0I7RUFDSSxjQUFBO0VBQ0EsY0NyUlI7RURzUlEsZUFBQTtFQUNBLGtCQUFBO0FBaEN4QjtBQWtDb0I7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO1VBQUEsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkRBQUE7RUFDQSxzQkFBQTtBQWhDeEI7QUFzQ0k7RUFDRSw0QkFBQTtBQXBDTjtBQXNDSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBcENSO0FBcUNRO0VBQ0ksY0NqVEk7QUQ4UWhCO0FBc0NJO0VBQ0ksY0NyVFE7RURzVFIsZUFBQTtBQXBDUjtBQXNDSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUFwQ047QUFzQ0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFwQ047QUFzQ007OztFQUdFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFwQ1I7QUF1Q007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQXJDUjtBQXVDUTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQXRDVjtBQXlDUTtFQUNFLFdBQUE7RUFDQSx1RUFBQTtBQXZDVjtBQTBDUTtFQUNFLFFBQUE7RUFDQSxvRUFBQTtBQXhDVjtBQTJDUTtFQUNFLHVCQUFBO0FBekNWO0FBMENVO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUVBQUE7QUF4Q1o7QUEwQ1U7RUFDRSxNQUFBO0VBQ0Esd0JBQUE7RUFDQSxvRUFBQTtBQXhDWjs7QUFpREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBOUNKOztBQWlEQTtFQUNJLGFBQUE7RUFDQSxrREFBQTtFQUNBLDZEQUFBO0FBOUNKOztBQWdEQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQy9ZYztFRGdaZCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTdDRjtBQStDRTtFQUNFLGNBQUE7QUE3Q0o7O0FBaURBO0VBQ0UsY0FBQTtBQTlDRjs7QUErREE7RUFFRTtJQUNNLGFBQUE7RUE3RE47RUErREU7SUFDSSxhQUFBO0VBN0ROO0VBK0RFO0lBQ0UsYUFBQTtFQTdESjtFQWdFQTtJQUNFLHdCQUFBO0VBOURGO0FBQ0Y7QUFpRUE7RUFDRTtJQUNFLGFBQUE7RUEvREY7RUFrRUE7O0lBRU0sYUFBQTtFQWhFTjtFQWtFRTtJQUNJLGFBQUE7RUFoRU47QUFDRjtBQW9FQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQ2xjTztBRGdZWDs7QUFxRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWxFSjs7QUFvRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFqRUY7QUFtRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWpFSjs7QUFzRUE7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBbkVKOztBQXNFQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFuRUo7O0FBc0VBO0VBQ0ksOEJBQUE7QUFuRUo7O0FBa0ZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQS9FSjs7QUFrRkE7RUFDSSxhQUFBO0FBL0VKOztBQWtGQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrREFBQTtBQS9FSjs7QUFrRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEvRUo7O0FBbUZJO0VBQ0ksbUJBQUE7QUFoRlI7O0FBbUZBO0VBQ0UseUJDemlCYztFRDBpQmQsY0NyaUJjO0VEc2lCZCxZQUFBO0VBQ0EsZUFBQTtBQWhGRjtBQWlGRTtFQUNFLHlCQ3ZpQlk7RUR3aUJaLFlBQUE7QUEvRUo7O0FBbUZBO0VBRUUseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFqRkY7QUFrRkU7RUFDRSxZQUFBO0FBaEZKO0FBbUZJO0VBQ0UseUJDdGpCVTtFRHVqQlYsWUFBQTtBQWpGTjs7QUFxRkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWxGSjtBQW9GSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQ2hrQks7QUQ4ZVg7QUFvRk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBbEZSO0FBcUZNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQW5GUjtBQXFGUTtFQUNFLHVCQUFBO0FBbkZWO0FBc0ZRO0VBQ0UscUJBQUE7QUFwRlY7QUF3Rk07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQ3BtQlE7RURxbUJSLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUF0RlI7QUF3RlE7RUFDRSxjQ3JtQk07QUQrZ0JoQjtBQTJGTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF6RlI7QUEyRlE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUF6RlY7QUE2Rk07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJDam9CUTtFRGtvQlIsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTNGUjtBQTZGUTtFQUNFLHlCQUFBO0FBM0ZWOztBQWdHRTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJDaHBCWTtFRGlwQlosYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUE5Rko7QUErRkk7RUFDRSxnQkFBQTtBQTdGTjtBQStGSTtFQUNFLHVCQUFBO0FBN0ZOO0FBZ0dJO0VBQ0UsZ0JBQUE7QUE5Rk47QUFnR0k7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBOUZOOztBQW1HQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQWhHSjs7QUFzR0U7RUFDRTtJQUNFLGFBQUE7RUFuR0o7QUFDRjtBQXNHRTtFQUNFO0lBQ0UsYUFBQTtFQXBHSjtBQUNGO0FBc0dFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsU0FBQTtFQXBHSjtFQXNHSTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQXBHTjtFQXNHSTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUFwR047RUEwR0U7SUFDSSxhQUFBO0VBeEdOO0FBQ0Y7QUE0R0U7RUFDRTtJQUNFLGFBQUE7RUExR0o7RUE2R0k7SUFDRSxlQUFBO0lBQ0EsU0FBQTtFQTNHTjtFQThHSTs7SUFFRSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQTVHTjtFQStHRTtJQUNJLGFBQUE7RUE3R047QUFDRjtBQW1IRTtFQUlFLGNDenVCWTtFRDB1QlosY0FBQTtFQUNBLHNCQ3J1Qk87QURpbkJYO0FBc0hJO0VBQ0UsaUJBQUE7QUFwSE47QUF1SEk7RUFDRSxjQ3B2QlU7QUQrbkJoQjs7QUF5SEU7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBdEhKOztBQXlIRTtFQUNFLGlCQUFBO0FBdEhKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWljb24tYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4ubmF2LWl0ZW0gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xyXG5cclxuXHJcbiAgLy8gJjpob3ZlcixcclxuICAvLyAmOmZvY3VzIHtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICRHcmVlbjtcclxuICAvLyAgIGNvbG9yOiB3aGl0ZTtcclxuICAvLyB9XHJcbn1cclxuXHJcblxyXG4ubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRHcmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuXHJcblxyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblxyXG4gICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbi5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG4ucm93LTIgLmRyb3Bkb3duLW1lbnV7XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG59IFxyXG5cclxuXHJcbi5uYXYtaXRlbTpob3ZlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tYWluLW5hdmJhciA6ZGlyKGx0cil7XHJcbiAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxufVxyXG4ubWFpbi1uYXZiYXIgOmRpcihydGwpe1xyXG4gIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDIyMDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdWItbWVudSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgMCAwIDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OCwgMTc4LCAyMDksIDAuOCk7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGk6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJFNsYXRlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zdWItbWVudS1yZXNwb25zaXZlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgLnN1Yi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGkge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1haW4tbmF2YmFyIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICROYXZ5O1xyXG5cclxuICAgIC5tZW51LXVse1xyXG4gICAgICBsaXtcclxuICAgICAgICBtYXJnaW46IDBweCAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaTpmaXJzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgLm1lbnUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIG91dGxpbmU6IDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgYXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmN2LWJ0bntcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxhbmd1YWdlLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9ye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFzaWRlLXNob3cge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIGFzaWRlIHtcclxuICAgICAgICB3aWR0aDogNzV2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAtNzUzcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIsIDEyLCAyNywgMC43KSAtMTBweCAwcHggMzBweCAtMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgICAgICAgICAgIG9sIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN2LWJ0bntcclxuICAgICAgcGFkZGluZzogN3B4IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdi1udW1iZXIge1xyXG4gICAgICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLm5hdi10ZXh0e1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIH1cclxuICAgIC5tZW51LXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgei1pbmRleDogMTE7XHJcblxyXG4gICAgICAuaGFtYnVyZ2VyLW1lbnUsXHJcbiAgICAgIC5oYW1idXJnZXItbWVudTphZnRlcixcclxuICAgICAgLmhhbWJ1cmdlci1tZW51OmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oYW1idXJnZXItbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA1cyAwLjA1cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuMDVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA1cyAwLjA1cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuMDVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hbmltYXRlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA1cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuMDVzIDAuMDVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjA1cyAwLjA1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4ub24tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG59XHJcblxyXG4ubmF2LXNoYWRvdyB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTEwcHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG59XHJcbi5kLWlubGluZS1ibG9jayAuZHJvcGRvd24tbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRHcmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAmLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IFxyXG4gIH1cclxufVxyXG5cclxuLmQtaW5saW5lLWJsb2NrOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4vLyAgICAgLm1haW4tbmF2YmFyIHtcclxuLy8gICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgICAgICAubmF2LWxpbmsge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIC43cmVtO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIC5uYXYtc2hhZG93IHtcclxuLy8gICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gIG5hdiAubmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdi1zaGFkb3cge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICAubGFuZ3VhZ2UtY29udGFpbmVyLWZ1bGwtbmF2IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pZ25vcmUtbWIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgLmlnbm9yZS1tYiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtd3JhcHBlcixcclxuICAgIC5tZW51LXJlc3BvbnNpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2LXNoYWRvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5mbGFnLXRleHQge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcyYTQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sYW5ndWFnZS1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjY2JkNWY1ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzBhMTkyZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjY2JkNWY1ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzE3MmE0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmU6YWZ0ZXIge1xyXG4vLyAgICAgY29udGVudDogXCIgXCI7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjNThlMmM0O1xyXG4vLyAgICAgd2lkdGg6IDYxJTtcclxuLy8gICAgIGhlaWdodDogMXB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbi8vIH1cclxuLmFycm93LWxhbmd1YWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZmlsbDogIzY0ZmZkYTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHJvcGRvd24tbWVudS5zaG93IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2NjZDZmNiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiKDIgMTIgMjcgLyA3MCUpO1xyXG59XHJcblxyXG4uYXJyb3ctYWN0aXZlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgZmlsbDogIzY0ZmZkYTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xyXG4gICAgLmFycm93LWFjdGl2ZSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaW5oZXJpdDtcclxuICAgIH1cclxufVxyXG4ucm93LTIgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkR3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93LTIgLmRyb3Bkb3duLW1lbnUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRHcmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRHcmVlbjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc3RhdHVzLWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBnYXA6IDVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuXHJcbiAgICAgIC5kYXRldGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAmLmdyZWVuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmstYnV0dG9uLCAub3Blbi1hY2NvdW50LWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRMaWdodGVzdE5hdnk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogICRHcmVlbjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAyMTAxNjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWFyY2gtYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMGYxNjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1pZC1jb250YWluZXIge1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhe1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5sYW5ndWFnZS1pY29ue1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtd3JhcHBlcntcclxuICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxhbmd1YWdlLWljb257XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubGFuZ3VhZ2UtaWNvbntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc3RhdHVzLWJhciAuc3RhdHVzLWNvbnRlbnQge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgIC5kYXRldGltZSwgIC5saW5rLWJ1dHRvbiwgLm9wZW4tYWNjb3VudC1idXR0b24sIC5zZWFyY2gtYmFyLCAuc2VhcmNoLWJ1dHRvbiwgLnNlYXJjaC1iYXIge1xyXG4gICAgICAgIGZsZXg6IDMgNiAyMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmRpY2F0b3J7XHJcbiAgICAgICAgZmxleDogMyA2IDIlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAubmF2LXNoYWRvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5sYW5ndWFnZS1pY29ue1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICAgLnN0YXR1cy1iYXIgLnN0YXR1cy1jb250ZW50IHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnN0YXR1cy1iYXIgLnJvdy0xLFxyXG4gICAgICAuc3RhdHVzLWJhciAucm93LTIge1xyXG4gICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAubmF2LXNoYWRvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICB9XHJcblxyXG5cclxuICAubmV3cy10aWNrZXIge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcblxyXG5cclxuICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcblxyXG4gICAgc3Bhbi5zdG9jay1uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgfVxyXG4gICAgbWFycXVlZSB7XHJcbiAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGF0dXMtY29udGVudCBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWl0ZW0gaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuIiwiXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM3MTk2ZTk7XHJcbiRHcmVlbk9sZCAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJE5hdnlCYWNrIDogIzI3NDI2NDtcclxuJE5hdnlUZXh0IDogcmdiKDksIDcxLCAxMTIpO1xyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogT3BlbiBTYW5zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)("animateMenu", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 0,
        transform: "translateY(-50%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 540:
/*!***********************************************************************!*\
  !*** ./src/app/components/general/pagination/pagination.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  "disabled": a0
});
class PaginationComponent {
  constructor() {
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.currentPage = 1;
  }
  ngOnChanges() {
    this.totalPages = Math.ceil(this.totalItems / 3);
  }
  changePage(page) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }
  static #_ = this.ɵfac = function PaginationComponent_Factory(t) {
    return new (t || PaginationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaginationComponent,
    selectors: [["app-pagination"]],
    inputs: {
      totalItems: "totalItems"
    },
    outputs: {
      pageChange: "pageChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 6,
    consts: [[1, "pagination"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]],
    template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "ul", 0)(2, "li", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_3_listener() {
          return ctx.changePage(ctx.currentPage - 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1)(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_6_listener() {
          return ctx.changePage(ctx.currentPage + 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.currentPage === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.currentPage === ctx.totalPages));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n}\n\n.page-item[_ngcontent-%COMP%] {\n  margin: 0 0.25rem;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n  text-decoration: none;\n}\n\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtaXRlbSB7XHJcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2541:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);





class AboutComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 20,
    vars: 19,
    consts: [[1, "jobs", 3, "dir"], [1, "container"], [1, "jobs-inner"], [1, "row", "mx-2", "about-details"], [1, "col-md-6"], [1, "mb-2", "mx-2"], [3, "routerLink"], [1, "img-fluid", 3, "src", "alt"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4")(13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 7, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, "AboutPioneers.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 11, "WhoWeAre.Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 13, "WhoWeAre.ReadMore"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 15, "WhoWeAre.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 17, "WhoWeAre.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.about-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #112240;\n}\n.about-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n.about-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #112240;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  height: 100px;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDRFk7QURBaEI7QUFHSTtFQUNJLHNCQUFBO0FBRFI7O0FBT0k7RUFDSSxjQ1ZRO0FETWhCO0FBT0k7RUFDSSxXQUFBO0FBTFI7QUFPSTtFQUNJLGNDakJRO0FEWWhCOztBQVFBO0VBQ0ksV0FBQTtBQUxKOztBQVFBO0VBQ0kseUJDMUJZO0VEMkJaLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUxKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUpKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5qb2JzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gICAgXHJcbiAgICAuam9icy1pbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmFib3V0LWRldGFpbHMge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICAgIC8vICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH0gXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogJExpZ2h0TmF2eTtcclxuICAgIH1cclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVtcHR5LXNwYWNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5OyBcclxuICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgbWFyZ2luOiAwOyBcclxuICAgIHBhZGRpbmc6IDA7IFxyXG59XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufSIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8941:
/*!**********************************************************************************!*\
  !*** ./src/app/components/home/additional-tables/additional-tables.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalTablesComponent: () => (/* binding */ AdditionalTablesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);






const _c0 = a0 => ({
  "active": a0
});
const _c1 = (a0, a1) => ({
  id: "pagination3",
  itemsPerPage: a0,
  currentPage: a1
});
const _c2 = (a0, a1) => ({
  id: "pagination2",
  itemsPerPage: a0,
  currentPage: a1
});
const _c3 = (a0, a1) => ({
  id: "paginationDividend",
  itemsPerPage: a0,
  currentPage: a1
});
function AdditionalTablesComponent_div_20_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bonusShare_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r2.bsCompName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r2.bsDistibution);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r2.bsMatDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r2.bsDistDate);
  }
}
function AdditionalTablesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdditionalTablesComponent_div_20_tr_18_Template, 9, 4, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pagination-controls", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AdditionalTablesComponent_div_20_Template_pagination_controls_pageChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.bonusSharesPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "Company"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "Distribution"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "MaturityDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "DistributionDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 13, ctx_r2.bonusShares, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c1, ctx_r2.bonusSharesPageSize, ctx_r2.bonusSharesPage)));
  }
}
function AdditionalTablesComponent_div_21_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assembly_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r5.genIsinName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 5, assembly_r5.genIsinDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r5.genIsinAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r5.genIsinTiming);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r5.genIsinType);
  }
}
function AdditionalTablesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AdditionalTablesComponent_div_21_tr_21_Template, 12, 8, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "pagination-controls", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AdditionalTablesComponent_div_21_Template_pagination_controls_pageChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.genAssembliesPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 12, "Timing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 14, "Type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 16, ctx_r2.genAssemblies, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c2, ctx_r2.genAssembliesPageSize, ctx_r2.genAssembliesPage)));
  }
}
function AdditionalTablesComponent_div_22_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dividend_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dividend_r7.divCompName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dividend_r7.divCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dividend_r7.divAddess);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dividend_r7.divNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dividend_r7.divValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dividend_r7.divMatDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dividend_r7.divPayDate);
  }
}
function AdditionalTablesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AdditionalTablesComponent_div_22_tr_27_Template, 15, 7, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "pagination-controls", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AdditionalTablesComponent_div_22_Template_pagination_controls_pageChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.dividendsPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "Company"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 10, "Currency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 12, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 14, "Number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 16, "Value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 18, "MaturityDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 20, "PayDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 22, ctx_r2.dividends, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](25, _c3, ctx_r2.dividendsPageSize, ctx_r2.dividendsPage)));
  }
}
class AdditionalTablesComponent {
  constructor(marketSummaryService) {
    this.marketSummaryService = marketSummaryService;
    this.dividends = [];
    this.currentSummary = 'dividends';
    this.bonusShares = [];
    this.genAssemblies = [];
    this.genAssembliesPage = 1;
    this.genAssembliesPageSize = 10;
    this.dividendsPage = 1;
    this.dividendsPageSize = 10;
    this.bonusSharesPage = 1;
    this.bonusSharesPageSize = 10;
  }
  ngOnInit() {
    this.loadDividendsTables();
    this.loadGenAssemblies();
    this.loadBonusShares();
  }
  loadDividendsTables() {
    this.marketSummaryService.getDividendsTables().subscribe(data => {
      this.dividends = data;
    });
  }
  loadGenAssemblies() {
    this.marketSummaryService.getGenAssembliesIsins().subscribe(data => {
      this.genAssemblies = data.map(item => ({
        ...item,
        genIsinDate: this.parseDateString(item.genIsinDate)
      }));
    });
  }
  loadBonusShares() {
    this.marketSummaryService.getBonusShares().subscribe(data => {
      this.bonusShares = data;
    });
  }
  changeSummary(type) {
    this.currentSummary = type;
    this.bonusSharesPage = 1;
    this.dividendsPage = 1;
    this.genAssembliesPage = 1;
    switch (type) {
      case 'dividends':
        this.loadDividendsTables();
        break;
      case 'genAssemblies':
        this.loadGenAssemblies();
        break;
      case 'bonusShares':
        this.loadBonusShares();
        break;
    }
  }
  parseDateString(dateString) {
    const [day, month, year] = dateString.split('/').map(part => parseInt(part, 10));
    return new Date(year, month - 1, day);
  }
  static #_ = this.ɵfac = function AdditionalTablesComponent_Factory(t) {
    return new (t || AdditionalTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AdditionalTablesComponent,
    selectors: [["app-additional-tables"]],
    decls: 24,
    vars: 30,
    consts: [["id", "agenda"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner"], [1, "summary-tabs", "mx-2"], [1, "btn", "btn-light", 3, "click", "ngClass"], ["class", "summary-details mx-2 my-2", 4, "ngIf"], [1, "empty-space"], [1, "summary-details", "mx-2", "my-2"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["id", "pagination3", 3, "pageChange"], ["id", "pagination2", 3, "pageChange"], ["id", "paginationDividend", 3, "pageChange"]],
    template: function AdditionalTablesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdditionalTablesComponent_Template_button_click_11_listener() {
          return ctx.changeSummary("dividends");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdditionalTablesComponent_Template_button_click_14_listener() {
          return ctx.changeSummary("genAssemblies");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdditionalTablesComponent_Template_button_click_17_listener() {
          return ctx.changeSummary("bonusShares");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AdditionalTablesComponent_div_20_Template, 21, 19, "div", 8)(21, AdditionalTablesComponent_div_21_Template, 24, 22, "div", 8)(22, AdditionalTablesComponent_div_22_Template, 30, 28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 12, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 14, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 16, "Header.Item7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.currentSummary === "dividends"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 18, "Dividends"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, ctx.currentSummary === "genAssemblies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 20, "GeneralAssemblies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, ctx.currentSummary === "bonusShares"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 22, "BonusShares"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "bonusShares");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "genAssemblies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "dividends");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".market-summary-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #e6e9ee;\n  color: white;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  padding-top: 7%;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 30px;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n\n.market-type-filter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100px;\n  max-width: 100%;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #e6e9ee;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 85%;\n  }\n}\n@media (max-width: 2000px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 10%;\n  }\n}\n@media (max-width: 1500px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 20%;\n  }\n}\n@media (max-width: 1000px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 30%;\n  }\n}\n@media (max-width: 640px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2FkZGl0aW9uYWwtdGFibGVzL2FkZGl0aW9uYWwtdGFibGVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQ0ZjO0VER2QsWUFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUpOO0FBTU07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9NO0VBQ0UseUJDNUJRO0FEdUJoQjtBQVFNO0VBRUUsdUJBQUE7RUFDQSxZQUFBO0FBUFI7QUFVTTtFQUNFLFlBQUE7QUFSUjtBQVdNO0VBQ0UsVUFBQTtBQVRSO0FBY0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpKO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFpQkk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFmTjtBQWlCTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWZSO0FBa0JNO0VBQ0UseUJDcEVRO0FEb0RoQjtBQW1CTTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQWpCUjtBQW9CTTtFQUNFLFlBQUE7QUFsQlI7QUFxQk07RUFDRSxVQUFBO0FBbkJSOztBQXlCQTtFQUNFLHlCQ3pGYztFRDBGZCxlQUFBO0FBdEJGO0FBdUJFO0VBQ0Usc0JBQUE7RUFFQSxhQUFBO0FBdEJKOztBQXlCQTtFQUNFLFdBQUE7QUF0QkY7O0FBeUJBO0VBQ0UseUJDckdjO0VEc0dkLFlBQUE7QUF0QkY7O0FBeUJFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUF0Qko7O0FBMEJFO0VBQ0UsaUJBQUE7QUF2Qko7QUF5QkU7RUFDRSxpQkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxrQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxrQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0EseUJDbEljO0FEMEdoQjs7QUEyQkE7RUFDRTtJQUNFLGdCQUFBO0VBeEJGO0FBQ0Y7QUE2QkE7RUFDRTtJQUNFLGdCQUFBO0VBM0JGO0FBQ0Y7QUE2QkE7RUFDRTtJQUNFLGdCQUFBO0VBM0JGO0FBQ0Y7QUE4QkE7RUFDRTtJQUNFLGdCQUFBO0VBNUJGO0FBQ0Y7QUE4QkE7RUFDRTtJQUNFLGdCQUFBO0VBNUJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLm1hcmtldC1zdW1tYXJ5LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIC5zdW1tYXJ5LXRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuc3VtbWFyeS1kZXRhaWxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1kYW5nZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXJrZXQtdGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXJrZXQtdGFibGUge1xyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmpvYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxuICAuam9icy1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxufVxyXG4uc3VtbWFyeS10YWJzIC5idG4ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS10YWJzIC5idG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWFya2V0LXR5cGUtZmlsdGVyIHtcclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwcHg7IFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyBcclxuICB9XHJcbn1cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLnN1bW1hcnktdGFic3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuc3VtbWFyeS1kZXRhaWxze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG50ciB0aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ciB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZW1wdHktc3BhY2Uge1xyXG4gIGhlaWdodDogNzBweDsgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDg1JTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMjAwMHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gIC5qb2JzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDgwJTtcclxuICB9XHJcbn0iLCJcclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzcxOTZlOTtcclxuJEdyZWVuT2xkICAgICAgICA6ICM0MGFmOTU7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kTmF2eUJhY2sgOiAjMjc0MjY0O1xyXG4kTmF2eVRleHQgOiByZ2IoOSwgNzEsIDExMik7XHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBPcGVuIFNhbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 155:
/*!************************************************************!*\
  !*** ./src/app/components/home/banner/banner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerComponent: () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function BannerComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
  }
}
function BannerComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
  }
}
function BannerComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
  }
}
function BannerComponent_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
}
function BannerComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
  }
}
function BannerComponent_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 21);
  }
}
function BannerComponent_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 22);
  }
}
function BannerComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 23);
  }
}
class BannerComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
    this.language = localStorage.getItem("language");
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function BannerComponent_Factory(t) {
    return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BannerComponent,
    selectors: [["app-banner"]],
    decls: 16,
    vars: 8,
    consts: [["id", "banner", 1, "section", "banner"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container-fluid", "p-0"], [1, "row", "no-gutters", "position-relative"], [1, "col-12", "position-relative", "photos-container"], ["src", "assets/images/Egypt-photo.jpg", "alt", "Second Photo", 1, "img-fluid", "w-100", "second-photo", "empty-space"], ["src", "assets/images/banner_ar_new.png", "class", "img-fluid w-100", "alt", "First Photo", 4, "ngIf"], ["src", "assets/images/banner_en_new.png", "class", "img-fluid w-100", "alt", "First Photo", 4, "ngIf"], [1, "clickable-photo-container"], ["href", "https://apps.apple.com/tc/app/pioneers-egypt/id1196384460", 1, "clickable-photo", "mb-2"], ["src", "assets/images/app-store.png", "class", "clickable-photo-img", "alt", "App Store", 4, "ngIf"], ["src", "assets/images/ar-appstore-dark.svg", "class", "clickable-photo-img", "alt", "App Store", 4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=tea.mobile.view.pioneersApp&hl=en_US", 1, "clickable-photo", "mb-2"], ["src", "assets/images/google-play.png", "class", "clickable-photo-img", "alt", "Google Play", 4, "ngIf"], ["src", "assets/images/ar-gplay-dark.svg", "class", "clickable-photo-img", "alt", "Google Play", 4, "ngIf"], ["src", "assets/images/employees_ar.png", "class", "img-fluid w-100", "alt", "First Photo", 4, "ngIf"], ["src", "assets/images/employees_en.png", "class", "img-fluid w-100", "alt", "First Photo", 4, "ngIf"], ["src", "assets/images/banner_ar_new.png", "alt", "First Photo", 1, "img-fluid", "w-100"], ["src", "assets/images/banner_en_new.png", "alt", "First Photo", 1, "img-fluid", "w-100"], ["src", "assets/images/app-store.png", "alt", "App Store", 1, "clickable-photo-img"], ["src", "assets/images/ar-appstore-dark.svg", "alt", "App Store", 1, "clickable-photo-img"], ["src", "assets/images/google-play.png", "alt", "Google Play", 1, "clickable-photo-img"], ["src", "assets/images/ar-gplay-dark.svg", "alt", "Google Play", 1, "clickable-photo-img"], ["src", "assets/images/employees_ar.png", "alt", "First Photo", 1, "img-fluid", "w-100"], ["src", "assets/images/employees_en.png", "alt", "First Photo", 1, "img-fluid", "w-100"]],
    template: function BannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BannerComponent_img_5_Template, 1, 0, "img", 5)(6, BannerComponent_img_6_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BannerComponent_img_9_Template, 1, 0, "img", 9)(10, BannerComponent_img_10_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BannerComponent_img_12_Template, 1, 0, "img", 12)(13, BannerComponent_img_13_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BannerComponent_img_14_Template, 1, 0, "img", 14)(15, BannerComponent_img_15_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "en");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".home-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.trade-text[_ngcontent-%COMP%] {\n  font-size: 2.5rem; \n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.photos-container[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n\n.second-photo[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.trade-text[_ngcontent-%COMP%]:hover {\n  color: brown; \n}\n\n.banner[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;  \n  height: auto;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding: 0 !important;  \n}\n\n.clickable-photo-container[_ngcontent-%COMP%] {\n  position: absolute; \n  bottom: 35vw; \n  left: 48%; \n  z-index: 5; \n  display: flex;\n  flex-direction: column;\n}\n\n.clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 150px; \n  height: auto;\n}\n@media (max-width: 768px) {\n  .clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 120px !important; \n  }\n}\n@media (max-width: 768px) {\n  \n  .empty-space[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n  .second-photo[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n@media (max-width: 827px) {\n  .empty-space[_ngcontent-%COMP%] {\n    margin-top: 250px;\n  }\n}\n\n@media (max-width: 1000px) {\n  .empty-space[_ngcontent-%COMP%] {\n    margin-top: 170px;\n  }\n}\n@media (max-width: 1700px) {\n  .clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px; \n  }\n}\n@media (max-width: 2800px) {\n  .clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px; \n  }\n}\n@media (max-width: 576px) {\n  .clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px !important; \n  }\n  .empty-space[_ngcontent-%COMP%] {\n    margin-top: 200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTs7RUFFRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnRyYWRlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtOyBcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGhvdG9zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmVtcHR5LXNwYWNlIHtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uc2Vjb25kLXBob3RvIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi50cmFkZS10ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogYnJvd247IFxyXG59XHJcblxyXG4uYmFubmVyIC5yb3cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhbm5lciBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlOyAgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7ICBcclxufVxyXG5cclxuLmNsaWNrYWJsZS1waG90by1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgYm90dG9tOiAzNXZ3OyBcclxuICBsZWZ0OiA0OCU7IFxyXG4gIHotaW5kZXg6IDU7IFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNsaWNrYWJsZS1waG90byBpbWcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNTBweDsgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jbGlja2FibGUtcGhvdG8gaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgXHJcbiAgLmVtcHR5LXNwYWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICAuc2Vjb25kLXBob3RvIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcclxuICAuZW1wdHktc3BhY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmVtcHR5LXNwYWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDE3MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgLmNsaWNrYWJsZS1waG90byBpbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4OyBcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDI4MDBweCkge1xyXG4gIC5jbGlja2FibGUtcGhvdG8gaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDsgXHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5jbGlja2FibGUtcGhvdG8gaW1nIHtcclxuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAuZW1wdHktc3BhY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('bannerTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: "translateX(-50px)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 2098:
/*!********************************************************************!*\
  !*** ./src/app/components/home/contact-us/contact-us.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsComponent: () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var src_app_services_data_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data/contract.service */ 9961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 852);















function ContactUsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const purpose_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", purpose_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, purpose_r1), " ");
  }
}
function ContactUsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r2.key);
  }
}
function ContactUsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_mat_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", city_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](city_r3);
  }
}
function ContactUsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r3.message));
  }
}
class ContactUsComponent {
  constructor(router, analyticsService, contactService, fb) {
    this.router = router;
    this.analyticsService = analyticsService;
    this.contactService = contactService;
    this.fb = fb;
    this.cities = {};
    this.purposes = [];
    this.cityOptions = [];
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.contactForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.contactForm.get('country').valueChanges.subscribe(selectedCountry => {
      this.cityOptions = this.cities[selectedCountry] || [];
      this.contactForm.get('city').reset();
    });
    this.siteKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.recaptchaSiteKey;
    this.loadReCaptchaScript();
    this.language = localStorage.getItem("language");
    this.purposes = localStorage.getItem("language") == "ar" ? ['شكوى', 'اقتراح', 'طلب', 'أخرى'] : ['Complaint', 'Suggestion', 'Request', 'Other'];
    this.cities = localStorage.getItem("language") === "en" ? {
      'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Mansoura', 'Tanta', 'Asyut', 'Ismailia', 'Faiyum', 'Zagazig', 'Damietta', 'Damanhur', 'Aswan', 'Minya', 'Beni Suef', 'Qena', 'Sohag'],
      'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Taif', 'Tabuk', 'Buraidah', 'Khamis Mushait', 'Hofuf', 'Al Jubail', 'Najran', 'Abha', 'Yanbu', 'Al Qatif', 'Al Khafji'],
      'United Arab Emirates': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'],
      'Qatar': ['Doha', 'Al Rayyan', 'Umm Salal', 'Al Khor', 'Al Wakrah'],
      'Kuwait': ['Kuwait City', 'Al Ahmadi', 'Hawalli', 'Farwaniya', 'Jahra'],
      'Oman': ['Muscat', 'Salalah', 'Sohar', 'Nizwa', 'Sur'],
      'Bahrain': ['Manama', 'Riffa', 'Muharraq', 'Hamad Town', 'Isa Town'],
      'Jordan': ['Amman', 'Zarqa', 'Irbid', 'Aqaba', 'Madaba'],
      'Lebanon': ['Beirut', 'Tripoli', 'Sidon', 'Tyre', 'Byblos'],
      'Morocco': ['Casablanca', 'Rabat', 'Fes', 'Marrakesh', 'Tangier'],
      'Algeria': ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida'],
      'Tunisia': ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Bizerte']
    } : {
      'مصر': ['القاهرة', 'الإسكندرية', 'الجيزة', 'شبرا الخيمة', 'بورسعيد', 'السويس', 'الأقصر', 'المنصورة', 'طنطا', 'أسيوط', 'الإسماعيلية', 'الفيوم', 'الزقازيق', 'دمياط', 'دمنهور', 'أسوان', 'المنيا', 'بني سويف', 'قنا', 'سوهاج'],
      'السعودية': ['الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام', 'الخبر', 'الطائف', 'تبوك', 'بريدة', 'خميس مشيط', 'الهفوف', 'الجبيل', 'نجران', 'أبها', 'ينبع', 'القطيف', 'الخفجي'],
      'الإمارات': ['أبو ظبي', 'دبي', 'الشارقة', 'عجمان', 'الفجيرة', 'رأس الخيمة', 'أم القيوين'],
      'قطر': ['الدوحة', 'الريان', 'أم صلال', 'الخور', 'الوكرة'],
      'الكويت': ['مدينة الكويت', 'الأحمدي', 'حولي', 'الفروانية', 'الجهراء'],
      'عمان': ['مسقط', 'صلالة', 'صحار', 'نزوى', 'صور'],
      'البحرين': ['المنامة', 'الرفاع', 'المحرق', 'مدينة حمد', 'مدينة عيسى'],
      'الأردن': ['عمان', 'الزرقاء', 'إربد', 'العقبة', 'مادبا'],
      'لبنان': ['بيروت', 'طرابلس', 'صيدا', 'صور', 'جبيل'],
      'المغرب': ['الدار البيضاء', 'الرباط', 'فاس', 'مراكش', 'طنجة'],
      'الجزائر': ['الجزائر', 'وهران', 'قسنطينة', 'عنابة', 'البليدة'],
      'تونس': ['تونس', 'صفاقس', 'سوسة', 'القيروان', 'بنزرت']
    };
  }
  loadReCaptchaScript() {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
  onSubmit() {
    if (this.contactForm.valid && this.recaptchaToken) {
      const formData = this.contactForm.value;
      formData.recaptchaToken = this.recaptchaToken;
      this.contactService.sendContactForm(formData).subscribe(response => {
        this.message = 'Message sent successfully';
        this.messageClass = 'alert-success';
        this.contactForm.reset();
      }, error => {
        this.message = 'Error sending message';
        this.messageClass = 'alert-danger';
      });
    } else {
      this.language == "en" ? this.message = 'Please fill out the entire form correctly and solve the captcha.' : this.message = 'من فضلك أدخل جميع البيانات وقم بحل كلمة التحقق';
      this.messageClass = 'alert-warning';
    }
  }
  onCaptchaResolved(captchaResponse) {
    this.recaptchaToken = captchaResponse;
  }
  static #_ = this.ɵfac = function ContactUsComponent_Factory(t) {
    return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_contract_service__WEBPACK_IMPORTED_MODULE_2__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ContactUsComponent,
    selectors: [["app-contact-us"]],
    decls: 91,
    vars: 67,
    consts: [["id", "contact-us", 1, "section", "contact-us", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container", "contact-container"], [1, "section-box"], [1, "section-title", 2, "padding-top", "50px"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "row"], [1, "col-lg-6"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-12"], ["matInput", "", "formControlName", "name", "type", "text", 1, "form", "form-control", "mb-2", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], [1, "dropdown", "w-100"], ["formControlName", "subject"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "message", "rows", "12", 1, "form", "form-control", "mb-2", 3, "placeholder"], [1, "col-md-6"], ["matInput", "", "formControlName", "email", "type", "text", 1, "form", "form-control", "mb-2", 3, "placeholder"], ["matInput", "", "formControlName", "phone", "type", "text", 1, "form", "form-control", "mb-2", 3, "placeholder"], ["formControlName", "country"], ["formControlName", "city"], [3, "resolved", "siteKey"], ["type", "submit", 1, "mx-auto", "btn", "btn-primary", 3, "disabled"], ["class", "mt-3 alert", 3, "ngClass", 4, "ngIf"], [1, "contact-info"], [1, "map", "mt-3"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.025116393362!2d31.33142618046898!3d30.093467010177545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815114875a8ff%3A0xe3df564430059452!2zUGlvbmVlcnMgc2VjdXJpdGllcyDYqNin2YrZiNmG2YrYsdiyINmE2KrYr9in2YjZhCDYp9mE2KfZiNix2KfZgiDYp9mE2YXYp9mE2YrYqQ!5e0!3m2!1sen!2seg!4v1720950282800!5m2!1sen!2seg`, "width", "100%", "height", "250", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "text-danger"], [3, "value"], [1, "mt-3", "alert", 3, "ngClass"]],
    template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div")(5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ContactUsComponent_div_15_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8)(17, "mat-form-field", 11)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ContactUsComponent_mat_option_22_Template, 3, 4, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ContactUsComponent_div_23_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ContactUsComponent_div_27_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 7)(29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ContactUsComponent_div_32_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ContactUsComponent_div_36_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 7)(38, "div", 15)(39, "mat-form-field", 11)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ContactUsComponent_mat_option_44_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ContactUsComponent_div_46_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 15)(48, "mat-form-field", 11)(49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, ContactUsComponent_mat_option_53_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, ContactUsComponent_div_54_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "re-captcha", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resolved", function ContactUsComponent_Template_re_captcha_resolved_55_listener($event) {
          return ctx.onCaptchaResolved($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ContactUsComponent_div_59_Template, 3, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 5)(61, "div", 23)(62, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p")(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "p")(72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " 19973");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "p")(77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " helpdesk@pioneers-securities.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p")(82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " 202-24190126");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 24)(87, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "iframe", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 31, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 33, "ContactUs.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 35, "ContactUs.YourName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("name").invalid && (ctx.contactForm.get("name").dirty || ctx.contactForm.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 37, "ContactUs.Subject"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.purposes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("subject").invalid && (ctx.contactForm.get("subject").dirty || ctx.contactForm.get("subject").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 39, "ContactUs.YourMessage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("message").invalid && (ctx.contactForm.get("message").dirty || ctx.contactForm.get("message").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 41, "ContactUs.Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("email").invalid && (ctx.contactForm.get("email").dirty || ctx.contactForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 43, "ContactUs.Phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("phone").invalid && (ctx.contactForm.get("phone").dirty || ctx.contactForm.get("phone").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 45, "ContactUs.Country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 47, ctx.cities));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("country").invalid && (ctx.contactForm.get("country").dirty || ctx.contactForm.get("country").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 49, "ContactUs.City"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cityOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("city").invalid && (ctx.contactForm.get("city").dirty || ctx.contactForm.get("city").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("siteKey", ctx.siteKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.contactForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 51, "ContactUs.SubmitMessage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 53, "ContactUs.ContactInformation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 55, "ContactUs.Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 57, "ContactUs.Location"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](74, 59, "ContactUs.Hotline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 61, "ContactUs.EmailAddress"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](84, 63, "ContactUs.PhoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 65, "ContactUs.OurLocation"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__.RecaptchaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: [".more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover, .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #7196e9;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #0d0e12;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: Open Sans;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n\ntd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: #112240;\n  border-color: #112240;\n}\n\n@media (max-width: 1300px) {\n  .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n\n[dir=rtl][_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .contact-container[_ngcontent-%COMP%] {\n    padding-top: 35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBRlI7QUFJUTtFQUNJLGtEQUFBO0VBQ0EsMERBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDaEJJO0VEaUJKLGVBQUE7QUFGWjtBQUlZO0VBQ0ksMkJBQUE7QUFGaEI7QUFJWTtFQUNJLGtEQUFBO0FBRmhCO0FBS1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNDdkJBO0FEb0JoQjtBQU1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0MvQkE7QUQyQmhCO0FBT1k7RUFDSSxlQUFBO0VBQ0EsY0NyQ0E7QURnQ2hCO0FBUVk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTmhCO0FBUWdCO0VBQ0ksZUFBQTtFQUNBLGNDcERKO0VEcURJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkM3Q1Q7QUR1Q1g7QUFPb0I7RUFDSSxxQkFBQTtBQUx4Qjs7QUFjSTtFQUNJLGVBQUE7QUFYUjs7QUFlQTtFQUNJLHlCQzFFWTtFRDJFWixxQkMzRVk7QUQrRGhCOztBQWVBO0VBRVE7SUFDSSxZQUFBO0VBYlY7QUFDRjtBQW1CUTtFQUNJLG1CQUFBO0FBakJaO0FBa0JZO0VBRko7SUFHUSxzQkFBQTtFQWZkO0FBQ0Y7QUFpQlE7RUFDSSxtQkFBQTtBQWZaO0FBZ0JZO0VBRko7SUFHUSxtQkFBQTtFQWJkO0FBQ0Y7QUFnQlk7RUFDSSxtQkFBQTtBQWRoQjtBQWdCWTtFQUNJLG1CQUFBO0FBZGhCO0FBbUJZO0VBRko7SUFHUSxrQkFBQTtFQWhCZDtBQUNGO0FBaUJZO0VBQ0ksbUJBQUE7QUFmaEI7QUFrQmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFoQnBCO0FBaUJvQjtFQUhKO0lBSVEsYUFBQTtFQWR0QjtBQUNGOztBQXVCSTtFQUNJLGlCQUFBO0FBcEJSOztBQTBCSTtFQUNJLGlCQUFBO0FBdkJSOztBQTJCQTtFQUNJO0lBQ0UsZ0JBQUE7RUF4Qko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubW9yZS1wcm95ZWN0c3tcclxuICAgIC5wcm95ZWN0LWNvbHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgIC5tb3JlLXByb3llY3QtYm94IHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiYSgyLDEyLDI3LDAuNyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxLjc1cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub3RoZXItcHJveWVjdC10aXRsZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vdGhlci1wcm95ZWN0LWRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubW9yZS1wcm95ZWN0cy1za2lsbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkU2xhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLnVuZGVybGluZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudGQge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMzAwcHgpe1xyXG4gICAgLm1vcmUtcHJveWVjdHN7XHJcbiAgICAgICAgLnByb3llY3QtY29se1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFjdC11cyB7XHJcbiAgICAuc2VjdGlvbi1ib3gge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1sZy02IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdC1pbmZvIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFwIHtcclxuICAgICAgICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbltkaXI9XCJydGxcIl0ge1xyXG4gICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgICBcclxuICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDozNSU7XHJcbiAgICB9XHJcbiAgICBcclxuICB9IiwiXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM3MTk2ZTk7XHJcbiRHcmVlbk9sZCAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJE5hdnlCYWNrIDogIzI3NDI2NDtcclxuJE5hdnlUZXh0IDogcmdiKDksIDcxLCAxMTIpO1xyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogT3BlbiBTYW5zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7301:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function ContactComponent_div_20_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const phone_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:" + phone_r4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](phone_r4);
  }
}
function ContactComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18)(6, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_div_20_Template_p_click_8_listener() {
      const branch_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openMap(branch_r2.mapLink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContactComponent_div_20_p_10_Template, 3, 2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const branch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](branch_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r2.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", branch_r2.phones);
  }
}
class ContactComponent {
  constructor(translate, analyticsService) {
    this.translate = translate;
    this.analyticsService = analyticsService;
    this.showBranches = false;
    this.branches = [];
  }
  ngOnInit() {
    this.language = localStorage.getItem("language");
    if (this.language === "en") {
      this.branches = [{
        name: 'Head Office',
        location: '6 El Imam Ali Helioplies',
        phones: ['19973'],
        mapLink: 'https://maps.app.goo.gl/2PrXS6nrX7htx3bx8'
      }, {
        name: 'Asyut',
        location: '74 - Mahmoud Rashwan Street - in front of the Azhar Institute - Assiut - Assiut',
        phones: ['0882059916', '0882059903'],
        mapLink: 'https://maps.app.goo.gl/uBdAgC9Xeby7UU9A7'
      }, {
        name: 'Sheikh Zayed',
        location: 'Galleria Mall - 26th of July Compound (Beside Zayed 2 Entrance) - Unit 307 East Bldg., 3rd Floor, Giza Governorate',
        phones: ['02-26710057', '02-26710053'],
        mapLink: 'https://maps.app.goo.gl/Lhzvwnr1w6EYdfBo9'
      }, {
        name: 'Mansoura',
        location: 'tanzim ali ebn abu taleeb (In Front Of El Dakahleya Governorate Bldg.),3rd Floor',
        phones: ['050-2307905', '050-2307902', '050-2307901'],
        mapLink: 'https://maps.app.goo.gl/nkCEpsABgmydH82r5'
      }, {
        name: 'Dokki',
        location: '6 wezart el-zeraa st , city capital 1st floor , dokki , giza.',
        phones: ['202-33360022', '202-33358060', '202-33354060'],
        mapLink: 'https://maps.app.goo.gl/uHdJnDYFozEEtFjs6'
      }, {
        name: 'Domiat',
        location: '23 building 23/4 Central District - New Damietta',
        phones: ['057-2407616', '057-2407011'],
        mapLink: 'https://maps.app.goo.gl/rc7YMfHKoKRd5PGi8'
      }, {
        name: 'Stanly',
        location: '10 Mostafa Lotfy El Manfalouty St., Ground Floor, Alexandria Governorate',
        phones: ['5225426', '5225425', '5225424'],
        mapLink: 'https://maps.app.goo.gl/ztkXvKhxnHN6efdw9'
      }, {
        name: 'Heliopoles',
        location: '103 El Thawra St., Ard El Golf - (Top QNB BANK) - First Floor - Cairo',
        phones: ['202-24190126', '202-24190211', '202-24199135'],
        mapLink: 'https://maps.app.goo.gl/xk2usbJ3WroRRkfFA'
      }, {
        name: 'Menoufia',
        location: 'Sharaf Square, Diwan Tower, 2nd floor, Shebin El-Kom, Menoufia',
        phones: ['0482227911', '0482227912', '0482227914', '0482227916'],
        mapLink: 'https://maps.google.com/maps?ll=30.56025,31.01091&z=16&t=m&hl=ar&gl=US&mapclient=embed&q=30%C2%B033%2736.9%22N%2031%C2%B000%2739.3%22E%2030.560250%2C%2031.010917@30.56025,31.0109167'
      }, {
        name: 'New Cairo',
        location: '5th floor, Cairo Business Plaza A424, City Services Center, Sector 6, North Teseen Street, Fifth Settlement - New Cairo',
        phones: ['028139363', '028139365', '028139367', '028139370'],
        mapLink: 'https://maps.google.com/maps?ll=30.028417,31.48775&z=15&t=m&hl=en&gl=US&mapclient=embed'
      }];
    } else {
      this.branches = [{
        name: 'المقر الرئيسي',
        location: '6 شارع الإمام علي، مصر الجديدة',
        phones: ['19973'],
        mapLink: 'https://www.google.com/maps?q=6+شارع+الإمام+علي+مصر+الجديدة'
      }, {
        name: 'أسيوط',
        location: '74 شارع محمود رشوان - أمام معهد الأزهر - أسيوط',
        phones: ['0882059916', '0882059903'],
        mapLink: 'https://maps.app.goo.gl/uBdAgC9Xeby7UU9A7'
      }, {
        name: 'الشيخ زايد',
        location: 'جاليريا مول - مجمع 26 يوليو (بجوار مدخل زايد 2) - وحدة 307 المبنى الشرقي، الطابق الثالث، محافظة الجيزة',
        phones: ['02-26710057', '02-26710053'],
        mapLink: 'https://maps.app.goo.gl/Lhzvwnr1w6EYdfBo9'
      }, {
        name: 'المنصورة',
        location: 'تنظيم علي ابن أبي طالب (أمام مبنى محافظة الدقهلية)، الطابق الثالث',
        phones: ['050-2307905', '050-2307902', '050-2307901'],
        mapLink: 'https://maps.app.goo.gl/nkCEpsABgmydH82r5'
      }, {
        name: 'الدقي',
        location: '6 شارع وزارة الزراعة، كابيتال سيتي، الطابق الأول، الدقي، الجيزة',
        phones: ['202-33360022', '202-33358060', '202-33354060'],
        mapLink: 'https://maps.app.goo.gl/uHdJnDYFozEEtFjs6'
      }, {
        name: 'دمياط',
        location: '23 مبنى 23/4 المنطقة المركزية - دمياط الجديدة',
        phones: ['057-2407616', '057-2407011'],
        mapLink: 'https://maps.app.goo.gl/rc7YMfHKoKRd5PGi8'
      }, {
        name: 'ستانلي',
        location: '10 شارع مصطفى لطفي المنفلوطي، الطابق الأرضي، محافظة الإسكندرية',
        phones: ['5225426', '5225425', '5225424'],
        mapLink: 'https://maps.app.goo.gl/ztkXvKhxnHN6efdw9'
      }, {
        name: 'هليوبوليس',
        location: '103 شارع الثورة، أرض الجولف - (أعلى بنك QNB) - الطابق الأول - القاهرة',
        phones: ['202-24190126', '202-24190211', '202-24199135'],
        mapLink: 'https://maps.app.goo.gl/xk2usbJ3WroRRkfFA'
      }, {
        name: 'المنوفية',
        location: 'ميدان شرف، برج الديوان، الطابق الثاني، شبين الكوم، المنوفية',
        phones: ['0482227911', '0482227912', '0482227914', '0482227916'],
        mapLink: 'https://maps.google.com/maps?ll=30.56025,31.01091&z=16&t=m&hl=ar&gl=US&mapclient=embed&q=30%C2%B033%2736.9%22N%2031%C2%B000%2739.3%22E%2030.560250%2C%2031.010917@30.56025,31.0109167'
      }, {
        name: 'القاهرة الجديدة',
        location: 'الطابق الخامس، بلازا القاهرة للأعمال A424، مركز خدمات المدينة، القطاع 6، شارع التسعين الشمالي، التجمع الخامس - القاهرة الجديدة',
        phones: ['028139363', '028139365', '028139367', '028139370'],
        mapLink: 'https://maps.google.com/maps?ll=30.028417,31.48775&z=15&t=m&hl=en&gl=US&mapclient=embed'
      }];
    }
  }
  toggleBranches() {
    this.showBranches = !this.showBranches;
  }
  openMap(mapLink) {
    window.open(mapLink, '_blank');
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 21,
    vars: 14,
    consts: [["id", "contact", 1, "section"], [1, "container", "contact"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["href", "mailto:helpdesk@pioneers-securities.com", "target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "btn", "btn-primary", 3, "click"], [1, "branches-section", "mt-4"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-map-marker"], [1, "branches-container", "row", "mt-4"], ["class", "branch-item col-12 col-md-4 mb-3", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "branch-item", "col-12", "col-md-4", "mb-3"], [1, "card", "h-100"], [1, "card-body", "text-center"], [1, "branch-icon"], [1, "fa", "fa-building", "fa-2x", "text-success"], [1, "branch-details", "mt-3"], [1, "card-title", "text-success"], [1, "card-text", 3, "click"], ["class", "card-text", 4, "ngFor", "ngForOf"], [1, "card-text"], [3, "href"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_11_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "contact", "email");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_15_listener() {
          return ctx.toggleBranches();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ContactComponent_div_20_Template, 11, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "Contact.Content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "Contact.Btn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, "Branch.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@branchAnimation", ctx.showBranches ? "visible" : "void");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.branches);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  display: table;\n  padding-top: 10%;\n  padding-bottom: 13rem;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 60px;\n  font-weight: 600;\n  color: #0d0e12;\n  margin: auto;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  margin: 10px 0 40px;\n  font-size: 16px;\n  color: #7196e9;\n  font-family: Open Sans;\n  text-align: center;\n}\n\n.branches-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-btn[_ngcontent-%COMP%] {\n  background-color: #7196e9;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 5px;\n  border-color: #7196e9;\n  cursor: pointer;\n  transition: background-color 0.3s, box-shadow 0.3s;\n  box-shadow: 0 4px 6px rgba(248, 247, 247, 0.1);\n  margin-top: 2%;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-btn[_ngcontent-%COMP%]:hover {\n  background-color: #4575e2;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);\n}\n.branches-section[_ngcontent-%COMP%]   .branches-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  transition: opacity 0.5s ease-out, height 0.5s ease-out;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%] {\n  background-color: #f0f4f8;\n  border: 1px solid #0d0e12;\n  border-radius: 5px;\n  border-color: #7196e9;\n  padding: 20px;\n  margin: 10px;\n  width: calc(33.333% - 20px);\n  text-align: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 10px;\n  color: #7196e9;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 5px;\n  color: #7196e9;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  cursor: pointer;\n  color: #0d0e12;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7196e9;\n  text-decoration: none;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: #4575e2;\n  text-decoration: underline;\n}\n\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    padding-top: 35%;\n  }\n  .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFERjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ1pZO0VEYVosWUFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ2pCWTtFRGtCWixzQkNaTztFRGFQLGtCQUFBO0FBRko7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLHlCQzVCWTtFRDZCWixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQ2hDWTtFRGlDWixlQUFBO0VBQ0Esa0RBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7QUFISjtBQUlJO0VBQ0UseUJBQUE7RUFDQSx5Q0FBQTtBQUZOO0FBS0k7RUFDRSxrQkFBQTtBQUhOO0FBT0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx1REFBQTtBQUxKO0FBT0k7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkMxRFU7RUQyRFYsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQUxOO0FBT007RUFDRSxzQkFBQTtFQUNBLHlDQUFBO0FBTFI7QUFRTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNDMUVRO0FEb0VoQjtBQVVRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDakZNO0FEeUVoQjtBQVdRO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDMUZNO0FEaUZoQjtBQVdVO0VBQ0UsY0MzRkk7RUQ0RkoscUJBQUE7QUFUWjtBQVdZO0VBQ0UsMEJBQUE7QUFUZDtBQWNRO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBWlY7O0FBbUJBO0VBQ0U7SUFDRSxnQkFBQTtFQWhCRjtFQW1CRTtJQUNFLHdCQUFBO0VBakJKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmNvbnRhY3Qge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxM3JlbTtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXByZS10aXRsZSB7XHJcbiAgICBtYXJnaW46IDEwcHggMCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICRHcmVlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYnJhbmNoZXMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5icmFuY2hlcy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEdyZWVuOyBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkR3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDI0OCwgMjQ3LCAyNDcsIDAuMSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJEdyZWVuLCAxMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJyYW5jaGVzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0LCBoZWlnaHQgMC41cyBlYXNlLW91dDtcclxuXHJcbiAgICAuYnJhbmNoLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGY4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkTGlnaHRlc3RTbGF0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRHcmVlbjtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB3aWR0aDogY2FsYygzMy4zMzMlIC0gMjBweCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5icmFuY2gtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJyYW5jaC1kZXRhaWxzIHtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogZGFya2VuKCRHcmVlbiwgMTAlKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhY3R7XHJcbiAgICBwYWRkaW5nLXRvcDogMzUlO1xyXG4gIH1cclxuICAuYnJhbmNoZXMtY29udGFpbmVyIHtcclxuICAgIC5icmFuY2gtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('branchAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        height: '0px',
        overflow: 'hidden',
        display: 'none'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1,
        height: '*',
        overflow: 'visible',
        display: 'flex'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        height: '0px'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0.5s ease-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0.5s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        height: '0px'
      }))])])]
    }
  });
}

/***/ }),

/***/ 7333:
/*!********************************************************************!*\
  !*** ./src/app/components/home/full-about/full-about.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullAboutComponent: () => (/* binding */ FullAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../proyects/proyects.component */ 9717);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);




class FullAboutComponent {
  constructor(renderer) {
    this.renderer = renderer;
  }
  ngOnInit() {
    this.scrollToTop();
  }
  scrollToTop() {
    this.renderer.setProperty(document.body, 'scrollTop', 0);
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }
  static #_ = this.ɵfac = function FullAboutComponent_Factory(t) {
    return new (t || FullAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FullAboutComponent,
    selectors: [["app-full-about"]],
    decls: 46,
    vars: 45,
    consts: [[1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner", "about-details"], [1, "row", "mx-2"], [1, "col-md-6"], [1, "img-fluid", 3, "src", "alt"], [1, "row", "mt-4", "mx-2"]],
    template: function FullAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8)(22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6)(27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8)(34, "div", 6)(35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "app-proyects");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 15, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 17, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 19, "AboutUS.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 21, "WhoWeAre.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 23, "WhoWeAre.Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 25, "WhoWeAre.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 27, "WhoWeAre.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 29, "Mission.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 31, "Mission.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 33, "Mission.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 35, "Mission.Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 37, "Vision.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 39, "Vision.Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 41, "Vision.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 43, "Vision.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_0__.ProyectsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  padding-top: 7%;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.about-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #112240;\n}\n.about-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n.about-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #112240;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  height: 100px;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Z1bGwtYWJvdXQvZnVsbC1hYm91dC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0RZO0VERVosZUFBQTtBQURKO0FBRUk7RUFDRSxzQkFBQTtBQUFOOztBQU1JO0VBQ0ksY0NWUTtBRE9oQjtBQU1JO0VBQ0ksV0FBQTtBQUpSO0FBTUk7RUFDSSxjQ2pCUTtBRGFoQjs7QUFPQTtFQUNJLFdBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQzFCWTtFRDJCWixhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKSjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFISiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uam9icyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgIC5qb2JzLWlubmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogLTUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFib3V0LWRldGFpbHMge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9IFxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICB9XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbXB0eS1zcGFjZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgICBwYWRkaW5nOiAwOyBcclxufVxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn0iLCJcclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzcxOTZlOTtcclxuJEdyZWVuT2xkICAgICAgICA6ICM0MGFmOTU7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kTmF2eUJhY2sgOiAjMjc0MjY0O1xyXG4kTmF2eVRleHQgOiByZ2IoOSwgNzEsIDExMik7XHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBPcGVuIFNhbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proyects/proyects.component */ 9717);





class HomeComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 4,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-banner")(2, "app-about")(3, "app-proyects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_3__.ProyectsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3908:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2865);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs/jobs.component */ 2019);
/* harmony import */ var _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-proyects/more-proyects.component */ 5237);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proyects/proyects.component */ 9717);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 2098);
/* harmony import */ var _general_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general/dropdown/dropdown.component */ 9034);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock-market/stock-market.component */ 4377);
/* harmony import */ var _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./market-summary/market-summary.component */ 2081);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/news.component */ 3477);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sectors/sectors.component */ 8269);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./market-watch/market-watch.component */ 2659);
/* harmony import */ var _additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./additional-tables/additional-tables.component */ 8941);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _stocks_information_stocks_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stocks-information/stocks-information.component */ 8531);
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reports/reports.component */ 4773);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _full_about_full_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./full-about/full-about.component */ 7333);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/app-routing.module */ 4114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 7580);






































function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOptionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__.CarouselModule, src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_18__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_32__.NgxPaginationModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_33__.RecaptchaModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClient]
      }
    }), _general_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownSelectorComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__.JobsComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__.ProyectsComponent, _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__.MoreProyectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__.ContactUsComponent, _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_9__.StockMarketComponent, _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_10__.MarketSummaryComponent, _news_news_component__WEBPACK_IMPORTED_MODULE_11__.NewsComponent, _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_12__.SectorsComponent, _market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_13__.MarketWatchComponent, _additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_14__.AdditionalTablesComponent, _stocks_information_stocks_information_component__WEBPACK_IMPORTED_MODULE_15__.StocksInformationComponent, _reports_reports_component__WEBPACK_IMPORTED_MODULE_16__.ReportsComponent, _full_about_full_about_component__WEBPACK_IMPORTED_MODULE_17__.FullAboutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_36__.BaseChartDirective, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOptionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__.CarouselModule, src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_18__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_32__.NgxPaginationModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_33__.RecaptchaModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateModule, _general_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownSelectorComponent]
  });
})();

/***/ }),

/***/ 2019:
/*!********************************************************!*\
  !*** ./src/app/components/home/jobs/jobs.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsComponent: () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);


class JobsComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
    this.active = 0;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobsComponent_Factory(t) {
    return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: JobsComponent,
    selectors: [["app-jobs"]],
    decls: 14,
    vars: 0,
    consts: [[1, "empty-space"], [1, "jobs"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "jobs-inner"], [1, "row", "mx-2"], [1, "col-6", "about-details"], ["href", "#"], [1, "col-6", "about-img"], ["src", "assets/images/vision3.jpeg", 1, "img-fluid"]],
    template: function JobsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "About Pioneers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nihil cupiditate earum non odit illum, officiis asperiores quia perferendis atque repellendus quae qui alias in aspernatur vitae veniam distinctio placeat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: [".jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #e6e9ee;\n}\n\n.about-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #303C55;\n  font-family: \"Times New Roman\", Times, serif;\n}\n.about-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n.about-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #112240;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2pvYnMvam9icy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0RZO0FEQWhCO0FBRUk7RUFDSSxzQkFBQTtBQUFSOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHlCQ1JZO0FEUWhCOztBQUlJO0VBQ0ksY0NYUTtFRFlSLDRDQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7QUFEUjtBQUdJO0VBQ0ksY0NuQlE7QURrQmhCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5qb2JzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gICAgLmpvYnMtaW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuLmVtcHR5LXNwYWNlIHtcclxuICAgIGhlaWdodDogNTBweDsgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIH1cclxuXHJcbi5hYm91dC1kZXRhaWxzIHtcclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogJExpZ2h0ZXN0TmF2eTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfSBcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2081:
/*!****************************************************************************!*\
  !*** ./src/app/components/home/market-summary/market-summary.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketSummaryComponent: () => (/* binding */ MarketSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);








const _c0 = a0 => ({
  "active": a0
});
const _c1 = (a0, a1) => ({
  "text-success": a0,
  "text-danger": a1
});
function MarketSummaryComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody")(27, "tr")(28, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 14, "MarketSummary.Columns.TopGainers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 16, "MarketSummary.Columns.TopLosers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 18, "MarketSummary.Columns.StockCount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 20, "MarketSummary.Columns.TradesCount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 22, "MarketSummary.Columns.TotalVolume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 24, "MarketSummary.Columns.TotalValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 26, "MarketSummary.Columns.LastUpdated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryData.gainers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryData.losers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryData.stockCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryData.tradesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 28, ctx_r0.summaryData.totalVolume, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](41, 31, ctx_r0.summaryData.totalValue, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryData.borsaDate);
  }
}
function MarketSummaryComponent_div_16_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const summary_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](summary_r2.name);
  }
}
function MarketSummaryComponent_div_16_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const summary_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](summary_r3.value);
  }
}
function MarketSummaryComponent_div_16_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const summary_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, summary_r4.difference >= 0, summary_r4.difference < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](summary_r4.difference);
  }
}
function MarketSummaryComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MarketSummaryComponent_div_16_th_6_Template, 2, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MarketSummaryComponent_div_16_td_11_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MarketSummaryComponent_div_16_td_16_Template, 2, 5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.egxSummaries);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, "EGXSummary.Columns.Value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.egxSummaries);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 7, "EGXSummary.Columns.Difference"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.egxSummaries);
  }
}
function MarketSummaryComponent_div_17_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const investor_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](investor_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 4, investor_r5.buy, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, investor_r5.sell, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](investor_r5.investorsDate);
  }
}
function MarketSummaryComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MarketSummaryComponent_div_17_tr_18_Template, 11, 10, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "TradingSummary.Columns.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "TradingSummary.Columns.Buy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "TradingSummary.Columns.Sell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "TradingSummary.Columns.LastUpdated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.investors);
  }
}
function MarketSummaryComponent_div_25_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const market_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](market_r6.nameE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](market_r6.marketValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, market_r6.changeValue >= 0, market_r6.changeValue < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", market_r6.changeValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c1, market_r6.changePercent >= 0, market_r6.changePercent < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", market_r6.changePercent, "% ");
  }
}
function MarketSummaryComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MarketSummaryComponent_div_25_tr_18_Template, 9, 12, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "ArabMarkets.Columns.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "ArabMarkets.Columns.MarketValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "ArabMarkets.Columns.ChangeValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "ArabMarkets.Columns.ChangePercentage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.arabMarkets);
  }
}
function MarketSummaryComponent_div_26_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const market_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](market_r8.nameE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](market_r8.marketValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, market_r8.changeValue >= 0, market_r8.changeValue < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", market_r8.changeValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c1, market_r8.changePercent >= 0, market_r8.changePercent < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", market_r8.changePercent, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](market_r8.marketTypeName);
  }
}
function MarketSummaryComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 16)(2, "mat-form-field", 17)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MarketSummaryComponent_div_26_Template_mat_select_selectionChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.filterInternationalMarkets($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Europe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "US");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Asia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Egypt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "table", 10)(16, "thead")(17, "tr")(18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MarketSummaryComponent_div_26_tr_34_Template, 11, 13, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 6, "InternationalMarkets.Columns.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 8, "InternationalMarkets.Columns.MarketValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 10, "InternationalMarkets.Columns.ChangeValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 12, "InternationalMarkets.Columns.ChangePercentage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 14, "InternationalMarkets.Columns.MarketType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getFilteredInternationalMarkets());
  }
}
class MarketSummaryComponent {
  constructor(marketSummaryService) {
    this.marketSummaryService = marketSummaryService;
    this.currentSummary = 'market';
    this.investors = [];
    this.egxSummaries = [];
    this.arabMarkets = [];
    this.internationalMarkets = [];
    this.selectedMarketType = 'All';
    this.showArabMarkets = true;
    this.showInternationalMarkets = false;
  }
  ngOnInit() {
    this.loadMarketSummary();
    this.loadEgxSummary();
    this.loadInvestors();
    this.loadInternationalMarkets();
    this.loadArabicMarkets();
  }
  loadMarketSummary() {
    this.marketSummaryService.getMarketSummary().subscribe(data => {
      this.summaryData = data;
    });
  }
  loadEgxSummary() {
    this.marketSummaryService.getEgxSummary().subscribe(data => {
      this.egxSummaries = data;
    });
  }
  loadInvestors() {
    this.marketSummaryService.getInvestors().subscribe(data => {
      this.investors = data;
    });
  }
  loadInternationalMarkets() {
    this.marketSummaryService.getInternationalMarketIndicators().subscribe(data => {
      this.internationalMarkets = data;
    });
  }
  loadArabicMarkets() {
    this.marketSummaryService.getArabMarketIndicators().subscribe(data => {
      this.arabMarkets = data;
    });
  }
  toggleArabMarkets() {
    this.showArabMarkets = true;
  }
  toggleInternationalMarkets() {
    this.showArabMarkets = false;
  }
  filterInternationalMarkets(type) {
    this.selectedMarketType = type;
  }
  getFilteredInternationalMarkets() {
    if (this.selectedMarketType === 'All') {
      return this.internationalMarkets;
    }
    return this.internationalMarkets.filter(market => market.marketTypeName === this.selectedMarketType);
  }
  changeSummary(type) {
    this.currentSummary = type;
    switch (type) {
      case 'market':
        this.loadMarketSummary();
        break;
      case 'egx':
        this.loadEgxSummary();
        break;
      case 'trading':
        this.loadInvestors();
        break;
    }
  }
  static #_ = this.ɵfac = function MarketSummaryComponent_Factory(t) {
    return new (t || MarketSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MarketSummaryComponent,
    selectors: [["app-market-summary"]],
    decls: 28,
    vars: 38,
    consts: [["id", "market-statistics"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "jobs-inner"], [1, "summary-tabs", "mx-2"], [1, "btn", "btn-light", 3, "click", "ngClass"], ["class", "summary-details mx-2 my-2", 4, "ngIf"], [1, "empty-space"], [1, "summary-details", "mx-2", "my-2"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "text-success"], [1, "text-danger"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "market-type-filter", "mb-3"], ["appearance", "fill"], ["id", "marketType", 3, "selectionChange"], ["value", "Europe"], ["value", "US"], ["value", "Asia"], ["value", "Egypt"]],
    template: function MarketSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketSummaryComponent_Template_button_click_6_listener() {
          return ctx.changeSummary("market");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketSummaryComponent_Template_button_click_9_listener() {
          return ctx.changeSummary("egx");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketSummaryComponent_Template_button_click_12_listener() {
          return ctx.changeSummary("trading");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MarketSummaryComponent_div_15_Template, 44, 34, "div", 6)(16, MarketSummaryComponent_div_16_Template, 17, 9, "div", 6)(17, MarketSummaryComponent_div_17_Template, 19, 13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketSummaryComponent_Template_button_click_19_listener() {
          return ctx.toggleArabMarkets();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketSummaryComponent_Template_button_click_22_listener() {
          return ctx.toggleInternationalMarkets();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MarketSummaryComponent_div_25_Template, 19, 13, "div", 6)(26, MarketSummaryComponent_div_26_Template, 35, 16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 7);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 16, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, ctx.currentSummary === "market"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 18, "MarketSummary.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c0, ctx.currentSummary === "egx"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 20, "EGXSummary.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c0, ctx.currentSummary === "trading"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 22, "TradingSummary.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "market");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "egx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c0, ctx.showArabMarkets));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 24, "ArabMarkets.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c0, !ctx.showArabMarkets));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 26, "InternationalMarkets.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showArabMarkets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showArabMarkets);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".market-summary-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #e6e9ee;\n  color: white;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: -0.8%;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n\n.market-type-filter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100px;\n  max-width: 100%;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #e6e9ee;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL21hcmtldC1zdW1tYXJ5L21hcmtldC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQ0ZjO0VER2QsWUFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUpOO0FBTU07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9NO0VBQ0UseUJDNUJRO0FEdUJoQjtBQVFNO0VBRUUsdUJBQUE7RUFDQSxZQUFBO0FBUFI7QUFVTTtFQUNFLFlBQUE7QUFSUjtBQVdNO0VBQ0UsVUFBQTtBQVRSO0FBY0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpKO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFpQkk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFmTjtBQWlCTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWZSO0FBa0JNO0VBQ0UseUJDcEVRO0FEb0RoQjtBQW1CTTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQWpCUjtBQW9CTTtFQUNFLFlBQUE7QUFsQlI7QUFxQk07RUFDRSxVQUFBO0FBbkJSOztBQXlCQTtFQUNFLHlCQ3pGYztBRG1FaEI7QUF3QkU7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBdEJKOztBQXlCQTtFQUNFLFdBQUE7QUF0QkY7O0FBeUJBO0VBQ0UseUJDcEdjO0VEcUdkLFlBQUE7QUF0QkY7O0FBeUJFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUF0Qko7O0FBMEJFO0VBQ0UsaUJBQUE7QUF2Qko7QUF5QkU7RUFDRSxpQkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxrQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxrQkFBQTtBQXhCRjs7QUEwQkE7RUFDRSxZQUFBO0VBQ0EseUJDaEljO0FEeUdoQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubWFya2V0LXN1bW1hcnktY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuIFxyXG4gIC5zdW1tYXJ5LXRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuc3VtbWFyeS1kZXRhaWxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1kYW5nZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXJrZXQtdGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXJrZXQtdGFibGUge1xyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmpvYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIFxyXG4gIC5qb2JzLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC44JTtcclxuICB9XHJcbn1cclxuLnN1bW1hcnktdGFicyAuYnRuIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnN1bW1hcnktdGFicyAuYnRuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hcmtldC10eXBlLWZpbHRlciB7XHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxuICAgIG1heC13aWR0aDogMTAwJTsgXHJcbiAgfVxyXG59XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5zdW1tYXJ5LXRhYnN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLnN1bW1hcnktZGV0YWlsc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxudHIgdGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudHIgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZW1wdHktc3BhY2Uge1xyXG4gIGhlaWdodDogNzBweDsgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxufSIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2659:
/*!************************************************************************!*\
  !*** ./src/app/components/home/market-watch/market-watch.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketWatchComponent: () => (/* binding */ MarketWatchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sectors/sectors.component */ 8269);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);







const _c0 = (a0, a1) => ({
  "text-success": a0,
  "text-danger": a1
});
function MarketWatchComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_tr_72_Template_tr_click_0_listener() {
      const stock_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.navigateToDetails(stock_r3.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stock_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.englishName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](26, _c0, stock_r3.change > 0, stock_r3.change < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.lastPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.highBidPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.lowAskPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stock_r3.tradesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 14, stock_r3.askVolume, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 17, stock_r3.bidVolume, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 20, stock_r3.value, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](30, 23, stock_r3.volume, "1.0-0"));
  }
}
function MarketWatchComponent_li_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_li_79_Template_a_click_1_listener() {
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.setPage(page_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.currentPage === page_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r5);
  }
}
class MarketWatchComponent {
  constructor(marketSummaryService, router) {
    this.marketSummaryService = marketSummaryService;
    this.router = router;
    this.stocks = [];
    this.displayedStocks = [];
    this.currentSortColumn = '';
    this.isAscending = true;
    this.borsaDate = new Date();
    this.currentPage = 1;
    this.itemsPerPage = 20;
  }
  ngOnInit() {
    this.getStocksGridData();
  }
  getStocksGridData() {
    this.marketSummaryService.getStocksGridData().subscribe(data => {
      this.stocks = data;
      if (this.stocks.length > 0) {
        this.borsaDate = this.stocks[0].borsaDate;
      }
      this.applySortingAndPagination();
    });
  }
  navigateToDetails(isin) {
    this.router.navigate(['/stock-details', isin]);
  }
  sortData(column) {
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
  applySortingAndPagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedStocks = this.stocks.slice(start, end);
  }
  setPage(page) {
    this.currentPage = page;
    this.applySortingAndPagination();
  }
  get totalPages() {
    return Math.ceil(this.stocks.length / this.itemsPerPage);
  }
  getPaginationPages() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    return Array.from({
      length: endPage - startPage + 1
    }, (_, i) => startPage + i);
  }
  static #_ = this.ɵfac = function MarketWatchComponent_Factory(t) {
    return new (t || MarketWatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MarketWatchComponent,
    selectors: [["app-market-watch"]],
    decls: 86,
    vars: 70,
    consts: [["id", "market-watch"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner"], [1, "market-watch", "mx-2", "my-5"], [1, "text-center"], [1, "table-responsive"], [1, "table", "table-bordered"], [3, "click"], [4, "ngIf"], ["style", "cursor: pointer; transition: background-color 0.3s ease;", 3, "click", 4, "ngFor", "ngForOf"], ["aria-label", "Page navigation"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["aria-label", "Next", 1, "page-link", 3, "click"], [1, "empty-space"], [2, "cursor", "pointer", "transition", "background-color 0.3s ease", 3, "click"], [3, "ngClass"], [1, "page-link", 3, "click"]],
    template: function MarketWatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "table", 9)(17, "thead")(18, "tr")(19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_19_listener() {
          return ctx.sortData("englishName");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MarketWatchComponent_span_22_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_23_listener() {
          return ctx.sortData("symbol");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MarketWatchComponent_span_26_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_27_listener() {
          return ctx.sortData("open");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, MarketWatchComponent_span_30_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_31_listener() {
          return ctx.sortData("close");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, MarketWatchComponent_span_34_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_35_listener() {
          return ctx.sortData("change");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, MarketWatchComponent_span_38_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_39_listener() {
          return ctx.sortData("lastPrice");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, MarketWatchComponent_span_42_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_43_listener() {
          return ctx.sortData("highBidPrice");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, MarketWatchComponent_span_46_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_47_listener() {
          return ctx.sortData("lowAskPrice");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, MarketWatchComponent_span_50_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_51_listener() {
          return ctx.sortData("tradesCount");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, MarketWatchComponent_span_54_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_55_listener() {
          return ctx.sortData("askVolume");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, MarketWatchComponent_span_58_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_59_listener() {
          return ctx.sortData("bidVolume");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, MarketWatchComponent_span_62_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_63_listener() {
          return ctx.sortData("value");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, MarketWatchComponent_span_66_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_67_listener() {
          return ctx.sortData("volume");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, MarketWatchComponent_span_70_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, MarketWatchComponent_tr_72_Template, 31, 29, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "nav", 13)(74, "ul", 14)(75, "li", 15)(76, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_a_click_76_listener() {
          return ctx.setPage(ctx.currentPage - 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, MarketWatchComponent_li_79_Template, 3, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "li", 15)(81, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketWatchComponent_Template_a_click_81_listener() {
          return ctx.setPage(ctx.currentPage + 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "app-sectors")(85, "div", 20);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 36, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 38, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 40, "Header.Item2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 42, ctx.borsaDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 44, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "englishName");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 46, "symbol"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 48, "open"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 50, "close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 52, "change"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "change");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 54, "lastPrice"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "lastPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 56, "highBidPrice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "highBidPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 58, "lowAskPrice"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "lowAskPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 60, "tradesCount"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "tradesCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 62, "askVolume"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "askVolume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 64, "bidVolume"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "bidVolume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 66, "value"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 68, "volume"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.displayedStocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx.currentPage === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getPaginationPages());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx.currentPage === ctx.totalPages);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_1__.SectorsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".market-watch[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.market-watch[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border-left: none;\n  size: 50px;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], .market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.market-watch[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.market-watch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #112240;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #112240;\n  border-color: #112240;\n  color: white;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: Gray;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  padding-top: 7%;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: -5%;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n    margin-bottom: -15%;\n  }\n}\n.empty-space[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #e6e9ee;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 150%;\n  }\n}\n@media (max-width: 2000px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 10%;\n  }\n}\n@media (max-width: 1500px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 20%;\n  }\n}\n@media (max-width: 1000px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 30%;\n  }\n}\n@media (max-width: 640px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL21hcmtldC13YXRjaC9tYXJrZXQtd2F0Y2guY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBRk47QUFLSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFKTjtBQU9JO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBTE47QUFRSTtFQUNFLGtCQUFBO0FBTk47QUFhSTtFQUNFLGdCQUFBO0FBWE47QUFjSTtFQUNFLFlBQUE7QUFaTjtBQWVJO0VBQ0UsVUFBQTtBQWJOO0FBaUJFO0VBQ0UsU0FBQTtBQWZKO0FBa0JFO0VBQ0UsU0FBQTtBQWhCSjtBQW1CRTtFQUNFLGdCQUFBO0FBakJKO0FBbUJNO0VBQ0UsY0NqRVE7QURnRGhCO0FBc0JNO0VBQ0UseUJDdkVRO0VEd0VSLHFCQ3hFUTtFRHlFUixZQUFBO0FBcEJSO0FBc0JNO0VBQ0UsV0FBQTtBQXBCUjs7QUEwQkE7RUFDRSx5QkNwRmM7RURxRmQsZUFBQTtBQXZCRjtBQXdCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUF0Qko7O0FBMkJFO0VBQ0UsaUJBQUE7QUF4Qko7QUEyQkU7RUFDRSxpQkFBQTtBQXpCSjs7QUFtQ0E7RUFHSTtJQUNFLG1CQUFBO0VBbENKO0FBQ0Y7QUFzQ0E7RUFDRSxZQUFBO0VBQ0EseUJDdkhjO0FEbUZoQjs7QUF1Q0E7RUFDRTtJQUNFLGlCQUFBO0VBcENGO0FBQ0Y7QUF3Q0E7RUFDRTtJQUNFLGdCQUFBO0VBdENGO0FBQ0Y7QUF3Q0E7RUFDRTtJQUNFLGdCQUFBO0VBdENGO0FBQ0Y7QUF5Q0E7RUFDRTtJQUNFLGdCQUFBO0VBdkNGO0FBQ0Y7QUF5Q0E7RUFDRTtJQUNFLGdCQUFBO0VBdkNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLm1hcmtldC13YXRjaCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICB0aCwgdGQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICBzaXplOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGggc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoLCB0ZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gdGg6Zmlyc3QtY2hpbGQsIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIC8vICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdHI6Zmlyc3QtY2hpbGQgdGgsIHRyOmZpcnN0LWNoaWxkIHRkIHtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAucGFnZS1pdGVtIHtcclxuICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgLy8gJjpob3ZlciB7XHJcbiAgICAgICAgLy8gICBjb2xvcjogJE5hdnk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICAgICYuYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAmLmRpc2FibGVkIC5wYWdlLWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiBHcmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uam9icyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgcGFkZGluZy10b3A6IDclO1xyXG4gIC5qb2JzLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNSU7XHJcbiAgfVxyXG59XHJcblxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuc3VtbWFyeS10YWJzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnktZGV0YWlscyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuLy8gICAuam9icy1pbm5lciB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuam9icyB7XHJcbiAgIFxyXG4gICAgLmpvYnMtaW5uZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG4uZW1wdHktc3BhY2Uge1xyXG4gIGhlaWdodDogNzBweDsgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDE1MCU7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMjAwMHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gIC5qb2JzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICAgcGFkZGluZy10b3A6IDgwJTtcclxuICB9XHJcbn0iLCJcclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzcxOTZlOTtcclxuJEdyZWVuT2xkICAgICAgICA6ICM0MGFmOTU7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kTmF2eUJhY2sgOiAjMjc0MjY0O1xyXG4kTmF2eVRleHQgOiByZ2IoOSwgNzEsIDExMik7XHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBPcGVuIFNhbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5237:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/more-proyects/more-proyects.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreProyectsComponent: () => (/* binding */ MoreProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);






class MoreProyectsComponent {
  constructor(router, analyticsService) {
    this.router = router;
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  redirect(route, event) {
    const id = event.target.id;
    if (id == 'demoLink' || id == 'ghLink') {
      return;
    }
    window.open(route, '_blank');
  }
  static #_ = this.ɵfac = function MoreProyectsComponent_Factory(t) {
    return new (t || MoreProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MoreProyectsComponent,
    selectors: [["app-more-proyects"]],
    decls: 64,
    vars: 21,
    consts: [["id", "trading-rules", 1, "section", "more-proyects", 3, "dir"], [1, "container"], [1, "section-box"], [1, "section-title"], [1, "table-responsive"], [1, "table", "bg-light"], ["scope", "col"], ["scope", "row"], ["href", "https://www.pioneers-securities.com/Pioneers/Content/Downloads/en/31032024_034624%D8%A7%D9%84%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D9%85%D9%86%20%D8%A7%D9%84%D9%84%D8%A7%D8%A6%D8%AD%D8%A9%20%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A9%20%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%B3%D9%88%D9%82%20%D8%B1%D8%A3%D8%B3%20%D8%A7%D9%84%D9%85%D8%A7%D9%84.pdf", "target", "_blank"], ["src", "assets/icons/OIF.jpg", "alt", "Download"], ["href", "https://www.pioneers-securities.com/Pioneers/Content/Downloads/en/31032024_034616%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AF%D8%B1%D9%88%D9%8A%20%D8%B1%D9%82%D9%85%204%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AD%D9%85%D8%A7%D9%8A%D8%A9%20%D8%B3%D8%B1%D9%8A%D8%A9%20%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AA%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86%20%D9%85%D9%86%20%D8%A7%D9%84%D8%A5%D8%AD%D8%AA%D9%8A%D8%A7%D9%84.pdf", "target", "_blank"], ["href", "https://www.pioneers-securities.com/Pioneers/Content/Downloads/en/31032024_034533%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AF%D9%88%D8%B1%D9%8A%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%B4%D8%B1%D8%A7%D8%A1%20%D8%AD%D9%82%20%D8%A7%D9%84%D8%A7%D9%83%D8%AA%D8%AA%D8%A7%D8%A8%202014.pdf", "target", "_blank"]],
    template: function MoreProyectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 1)(5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "table", 5)(10, "thead")(11, "tr")(12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody")(28, "tr")(29, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0627\u0644\u0628\u0627\u0628 \u0627\u0644\u062D\u0627\u062F\u064A \u0639\u0634\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0626\u062D\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0644\u0642\u0627\u0646\u0648\u0646 \u0633\u0648\u0642 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644.pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "2.94Mb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "27-Apr-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, ".PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td")(38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr")(41, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u0643\u062A\u0627\u0628 \u062F\u0631\u0648\u064A \u0631\u0642\u0645 4 \u0628\u0634\u0623\u0646 \u062D\u0645\u0627\u064A\u0629 \u0633\u0631\u064A\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u0639\u0627\u0645\u0644\u064A\u0646 \u0645\u0646 \u0627\u0644\u0625\u062D\u062A\u064A\u0627\u0644.pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "535.74KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "27-Apr-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, ".PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td")(50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tr")(53, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u0643\u062A\u0627\u0628 \u062F\u0648\u0631\u064A \u0628\u0634\u0623\u0646 \u0634\u0631\u0627\u0621 \u062D\u0642 \u0627\u0644\u0627\u0643\u062A\u062A\u0627\u0628 .pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "684.67KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "27-Apr-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, ".PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td")(62, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 7, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, "OtherProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 11, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 13, "Size"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 15, "Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 17, "Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 19, "Download"));
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".more-proyects[_ngcontent-%COMP%] {\n  padding-bottom: 10rem;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover, .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #7196e9;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #0d0e12;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: Open Sans;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n\ntd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (max-width: 1300px) {\n  .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  padding-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL21vcmUtcHJveWVjdHMvbW9yZS1wcm95ZWN0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0FBREo7QUFFSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBQVI7QUFFUTtFQUNJLGtEQUFBO0VBRUEsMERBQUE7RUFJQSxhQUFBO0VBSUEsOEJBQUE7RUFJQSxtQkFBQTtFQUdBLHNCQUFBO0VBSUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsMERBQUE7RUFDQSx5QkNsQ0k7RURtQ0osZUFBQTtBQUFaO0FBRVk7RUFHSSwyQkFBQTtBQUFoQjtBQUVZO0VBQ0ksa0RBQUE7QUFBaEI7QUFHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0MzQ0E7QUQwQ2hCO0FBSVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ25EQTtBRGlEaEI7QUFLWTtFQUNJLGVBQUE7RUFDQSxjQ3pEQTtBRHNEaEI7QUFNWTtFQUlJLGFBQUE7RUFJQSxxQkFBQTtFQUlBLFlBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKaEI7QUFNZ0I7RUFDSSxlQUFBO0VBQ0EsY0NuRko7RURvRkksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQzVFVDtBRHdFWDtBQUtvQjtFQUNJLHFCQUFBO0FBSHhCOztBQVlJO0VBQ0ksZUFBQTtBQVRSOztBQWNBO0VBRVE7SUFDSSxZQUFBO0VBWlY7QUFDRjtBQWVBO0VBQ0EsaUJBQUE7QUFiQTs7QUFnQkE7RUFDSSxrQkFBQTtBQWJKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tb3JlLXByb3llY3Rze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gICAgLnByb3llY3QtY29se1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICAgICAgLm1vcmUtcHJveWVjdC1ib3gge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMS43NXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub3RoZXItcHJveWVjdC10aXRsZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vdGhlci1wcm95ZWN0LWRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubW9yZS1wcm95ZWN0cy1za2lsbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRTbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgICAgICAgICAgICAgICAgICAudW5kZXJsaW5le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG50ZCB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEzMDBweCl7XHJcbiAgICAubW9yZS1wcm95ZWN0c3tcclxuICAgICAgICAucHJveWVjdC1jb2x7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcclxufSIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3477:
/*!********************************************************!*\
  !*** ./src/app/components/home/news/news.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsComponent: () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.service */ 7033);
/* harmony import */ var _services_utilities_date_formatter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utilities/date-formatter.service */ 4401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);








function NewsComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_li_14_Template_li_click_0_listener() {
      const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changeCategory(category_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r2);
  }
}
function NewsComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_15_div_1_Template_div_click_0_listener() {
      const article_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectArticle(article_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23)(4, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_15_div_1_Template_a_click_10_listener() {
      const article_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectArticle(article_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const article_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", article_r6.imagePath || "assets/images/stocks.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getHeader(article_r6.newsHeader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.dateFormatterService.getFormattedDate(article_r6.newsDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getSummary(article_r6.newsDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 5, "News.ReadMore"));
  }
}
function NewsComponent_div_15_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_15_ng_container_8_Template_button_click_1_listener() {
      const page_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(page_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", page_r8 === ctx_r2.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r8);
  }
}
function NewsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsComponent_div_15_div_1_Template, 13, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 17)(3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(ctx_r2.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NewsComponent_div_15_ng_container_8_Template, 3, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_15_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(ctx_r2.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_15_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(ctx_r2.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.displayedArticles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "First"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getDisplayedPages());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage * ctx_r2.pageSize >= ctx_r2.filteredArticles.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 10, "Last"));
  }
}
function NewsComponent_div_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r2.selectedArticle.newsAttachment, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "News.DownloadAttachment"), " ");
  }
}
function NewsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.clearSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 32)(7, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NewsComponent_div_16_div_13_Template, 4, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, "News.Back"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@imageAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.selectedArticle.imagePath || "assets/images/stocks.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedArticle.newsHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 10, ctx_r2.selectedArticle.newsDate, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r2.selectedArticle.newsDetails, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedArticle.newsAttachment);
  }
}
class NewsComponent {
  constructor(newsService, dateFormatterService) {
    this.newsService = newsService;
    this.dateFormatterService = dateFormatterService;
    this.currentPage = 1;
    this.pageSize = 4;
  }
  ngOnInit() {
    this.newsService.getArticles().subscribe(data => {
      this.articles = data;
      this.categories = this.getUniqueCategories();
      this.selectedCategory = this.categories[0];
      this.filterArticles();
    });
  }
  selectArticle(article) {
    this.selectedArticle = article;
  }
  clearSelection() {
    this.selectedArticle = null;
  }
  getUniqueCategories() {
    return [...new Set(this.articles.map(article => article.newsCategoryName))];
  }
  filterArticles() {
    this.filteredArticles = this.articles.filter(article => article.newsCategoryName === this.selectedCategory);
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredArticles.length / this.pageSize);
    this.updateDisplayedArticles();
  }
  updateDisplayedArticles() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedArticles = this.filteredArticles.slice(start, end);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedArticles();
    }
  }
  changeCategory(category) {
    this.selectedCategory = category;
    this.filterArticles();
  }
  getHeader(header) {
    return header.replace('العنوان:', '').replace('العنوان :', '');
  }
  getSummary(details) {
    return details.toLocaleLowerCase().split('<br>')[0];
  }
  getDisplayedPages() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPagesToShow = 3;
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }
    return Array.from({
      length: endPage - startPage + 1
    }, (_, i) => startPage + i);
  }
  static #_ = this.ɵfac = function NewsComponent_Factory(t) {
    return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utilities_date_formatter_service__WEBPACK_IMPORTED_MODULE_1__.DateFormatterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NewsComponent,
    selectors: [["app-news"]],
    decls: 17,
    vars: 9,
    consts: [["nav", "ngbNav"], ["id", "news", 3, "dir"], [1, "empty-space"], [1, "jobs"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "section-box"], [1, "section-title"], [1, "jobs-inner"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "news-container"], ["ngbNav", "", 1, "nav-tabs"], ["ngbNavItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "news-list", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], ["class", "news-detail-container", 4, "ngIf"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", ""], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "news-list"], ["class", "news-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "news-item", 3, "click"], [1, "news-image"], ["alt", "Article Image", 3, "src"], [1, "news-content"], [1, "news-title"], [1, "news-date"], [1, "news-summary"], [1, "news-read-more", 3, "click"], [3, "click"], [1, "news-detail-container"], [1, "back-button", 3, "click"], [1, "news-detail-image"], [1, "news-detail-content"], [1, "news-detail-title"], [1, "news-detail-date"], [1, "news-detail-summary", 3, "innerHTML"], [4, "ngIf"], ["target", "_blank", 1, "download-button", 3, "href"]],
    template: function NewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "ul", 9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NewsComponent_li_14_Template, 3, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NewsComponent_div_15_Template, 14, 12, "div", 11)(16, NewsComponent_div_16_Template, 14, 13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, "News.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedArticle);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLinkBase, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #e6e9ee;\n}\n\n.news-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  direction: rtl;\n  text-align: right;\n  cursor: pointer;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-image[_ngcontent-%COMP%] {\n  flex: 0 0 100px;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%] {\n  flex: 2;\n  padding-right: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #007bff;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-summary[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-read-more[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_fadeIn 0.5s;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  cursor: pointer;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  color: #112240;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  margin-bottom: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_imageGrow 0.5s;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-content[_ngcontent-%COMP%]   .news-detail-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #007bff;\n  font-size: 2em;\n  text-align: center;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-content[_ngcontent-%COMP%]   .news-detail-summary[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1.6;\n  direction: rtl;\n  text-align: right;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_imageGrow {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 8px 12px;\n  border: none;\n  background-color: rgb(228, 224, 224);\n  color: black;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: gray;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n\n.download-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 20px;\n  padding: 10px 20px;\n  background-color: #112240;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n.download-button[_ngcontent-%COMP%]:hover {\n  background-color: #060d18;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQUFBO0FBQUo7QUFDSTtFQUNJLHNCQUFBO0FBQ1I7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUJDUFk7QURRaEI7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7QUFBSTtFQUNFLG1CQUFBO0FBRU47QUFDSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQU47QUFFTTtFQUNFLGVBQUE7QUFBUjtBQUNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNWO0FBR007RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBRFY7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQUtRO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUhWO0FBU0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtBQVBOO0FBU007RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0N6RVE7QURrRWhCO0FBVU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJSO0FBVVE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFSVjtBQVlNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBVlI7QUFZUTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVZWO0FBYVE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBWFY7O0FBaUJFO0VBQ0U7SUFDRSxVQUFBO0VBZEo7RUFnQkU7SUFDRSxVQUFBO0VBZEo7QUFDRjtBQWlCRTtFQUNFO0lBQ0UscUJBQUE7RUFmSjtFQWlCRTtJQUNFLG1CQUFBO0VBZko7QUFDRjtBQWlCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBa0JFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBaEJKOztBQW1CRTtFQUNFLHNCQUFBO0FBaEJKOztBQW1CRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQWhCSjs7QUFtQkU7RUFDRSx5QkMzSlk7RUQ0SlosWUFBQTtBQWhCSjs7QUFrQkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNsS1k7RURtS1osWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQWZKO0FBaUJJO0VBQ0UseUJBQUE7QUFmTjs7QUFtQkU7RUFDRTtJQUNFLGdCQUFBO0VBaEJKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uam9icyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICAgIC5qb2JzLWlubmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcbi5lbXB0eS1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICB9XHJcbi5uZXdzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gICAgLm5hdi10YWJzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5uZXdzLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5ld3MtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICAgIC5uZXdzLWltYWdlIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwcHg7IFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgICBcclxuICAgICAgICAgIGhlaWdodDogYXV0bzsgXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm5ld3MtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgLm5ld3MtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5uZXdzLXN1bW1hcnkge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm5ld3MtcmVhZC1tb3JlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIC5uZXdzLWRldGFpbC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XHJcbiAgXHJcbiAgICAgIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5uZXdzLWRldGFpbC1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBhbmltYXRpb246IGltYWdlR3JvdyAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubmV3cy1kZXRhaWwtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBcclxuICAgICAgICAubmV3cy1kZXRhaWwtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5uZXdzLWRldGFpbC1zdW1tYXJ5IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgaW1hZ2VHcm93IHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjQsIDIyNCk7XHJcbiAgICBcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gYnV0dG9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZG93bmxvYWQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkTGlnaHROYXZ5LCAxMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuam9icyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyNSU7XHJcbiAgICB9XHJcbiAgICBcclxuICB9IiwiXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM3MTk2ZTk7XHJcbiRHcmVlbk9sZCAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJE5hdnlCYWNrIDogIzI3NDI2NDtcclxuJE5hdnlUZXh0IDogcmdiKDksIDcxLCAxMTIpO1xyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogT3BlbiBTYW5zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeInAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('imageAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'scale(0.9)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'scale(1)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 7033:
/*!******************************************************!*\
  !*** ./src/app/components/home/news/news.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsService: () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class NewsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://www.pioneers-securities.com/webdataapi/api/news';
    this.language = localStorage.getItem("language") ?? "en";
  }
  getArticles() {
    return this.http.get(`${this.apiUrl}/GetTodayNews`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getArticleById(id) {
    return this.getArticles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(articles => articles.find(article => article.newsId === id)));
  }
  static #_ = this.ɵfac = function NewsService_Factory(t) {
    return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NewsService,
    factory: NewsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9717:
/*!****************************************************************!*\
  !*** ./src/app/components/home/proyects/proyects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProyectsComponent: () => (/* binding */ ProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);




const _c0 = ["imgContainer"];
class ProyectsComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      navSpeed: 700,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000
    };
  }
  ngOnInit() {}
  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function ProyectsComponent_Factory(t) {
    return new (t || ProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProyectsComponent,
    selectors: [["app-proyects"]],
    viewQuery: function ProyectsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
      }
    },
    decls: 41,
    vars: 33,
    consts: [[1, "jobs", 3, "dir"], [1, "container"], [1, "empty-space"], [1, "jobs-inner"], [1, "text-center", "p-2", "mx-2", "head-text"], [1, "cards-holder"], [1, "col-3", "w-50", "h-25", "p-2", "position-relative", "card-container"], [1, "card-content"], ["src", "assets/images/aerial-view-business-team.jpg", 1, "border", "rounded", 3, "alt"], [1, "card-text"], [1, "col-3", "w-50", "h-25", "p-2", "card-container"], ["src", "assets/images/businessman-with-light-bulb-his-hand.jpg", 1, "border", "rounded", 3, "alt"], ["src", "assets/images/businessman-talking-phone-background.jpg", 1, "img-fluid", "border", "rounded", 3, "alt"], ["src", "assets/images/standard-quality-control-concept-m.jpg", 1, "img-fluid", "border", "rounded", 3, "alt"], [1, "space-row", 2, "color", "black"]],
    template: function ProyectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10)(18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10)(32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 11, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 13, "CoreValues.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 15, "Integrity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 17, "Integrity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 19, "Professionalism"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 21, "Professionalism"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 23, "Entrepreneurship"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 25, "Entrepreneurship"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 27, "Innovation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 29, "Innovation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 31, "CoreValues.Description"));
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["h2[_ngcontent-%COMP%] {\n  color: rgb(9, 71, 112);\n  font-weight: bold;\n}\n\n.other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #0d0e12;\n}\n\n.head-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.space-row[_ngcontent-%COMP%] {\n  padding: 25px;\n  margin: 0 0 -1%;\n  font-size: larger;\n}\n\n.value-heading[_ngcontent-%COMP%] {\n  top: 42%;\n  left: 32%;\n  color: rgb(231, 224, 224);\n  font-weight: bold;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  font-family: \"Times New Roman\", Times, serif;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  background-color: White;\n  height: 50px;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.cards-holder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.cards-holder[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  position: absolute !important;\n  color: white !important;\n  left: 50%;\n  top: 50%;\n  text-align: center;\n  font-size: 32px;\n  transform: translate(-50%, -50%);\n}\n.cards-holder[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 1.25rem !important;\n  height: 145px;\n  width: 100%;\n}\n.cards-holder[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  width: calc(100% - 16px);\n  height: calc(100% - 16px);\n  display: inline-block;\n  border-radius: 1.25rem !important;\n  background: linear-gradient(0deg, #56789F 0%, rgba(0, 0, 0, 0) 150%);\n}\n\n@media (max-width: 991px) {\n  .cards-holder[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cards-holder[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n    width: 86% !important;\n    margin: 0 7%;\n    max-width: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb3llY3RzL3Byb3llY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JDVVE7RURUUixpQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NIWTtBREVoQjs7QUFJQTtFQUNBLGtCQUFBO0FBREE7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQzNCWTtFRDRCWiw0Q0FBQTtBQUNKO0FBQUk7RUFDSSxzQkFBQTtBQUVSOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNBLGlCQUFBO0FBRUE7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVJO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFBTjtBQUlNO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRlI7QUFPSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFBVSxRQUFBO0VBQ1Ysd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvRUFBQTtBQUpOOztBQVVBO0VBQ0U7SUFDRSxzQkFBQTtFQVBGO0VBUUU7SUFDRSxxQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQU5KO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICROYXZ5VGV4dDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub3RoZXItcHJveWVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG59XHJcblxyXG4uaGVhZC10ZXh0eyBcclxucGFkZGluZy10b3A6IDEwMHB4O31cclxuLnNwYWNlLXJvdyB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBtYXJnaW46IDAgMCAtMSU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi52YWx1ZS1oZWFkaW5nIHtcclxuICAgIHRvcDogNDIlO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgY29sb3I6IHJnYigyMzEsIDIyNCwgMjI0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uam9icyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgLmpvYnMtaW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXB0eS1zcGFjZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuLmNhcmRzLWhvbGRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1jb250ZW50OmFmdGVyIHtcclxuICAgICAgY29udGVudDonJztcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6OHB4OyB0b3A6OHB4O1xyXG4gICAgICB3aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTtcclxuICAgICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzU2Nzg5RiAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxNTAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuY2FyZHMtaG9sZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogODYlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMCA3JTtcclxuICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCJcclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzcxOTZlOTtcclxuJEdyZWVuT2xkICAgICAgICA6ICM0MGFmOTU7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kTmF2eUJhY2sgOiAjMjc0MjY0O1xyXG4kTmF2eVRleHQgOiByZ2IoOSwgNzEsIDExMik7XHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBPcGVuIFNhbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4773:
/*!**************************************************************!*\
  !*** ./src/app/components/home/reports/reports.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_reports_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/reports-service.service */ 460);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);






const _c0 = a0 => ({
  "active": a0
});
const _c1 = a0 => ({
  id: "paginationReports",
  itemsPerPage: 10,
  currentPage: a0
});
function ReportsComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_tr_43_Template_button_click_12_listener() {
      const report_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.downloadFile(report_r2.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const report_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 5, report_r2.size, "1.0-0"), " KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 8, report_r2.date, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 11, "Download"), " ");
  }
}
class ReportsComponent {
  constructor(reportsService) {
    this.reportsService = reportsService;
    this.currentReportType = 'daily';
    this.reportsData = [];
    this.reportsPage = 1;
  }
  ngOnInit() {
    this.loadReports();
  }
  changeReportType(type) {
    this.currentReportType = type;
    this.loadReports();
  }
  loadReports() {
    this.reportsService.getReports(this.currentReportType).subscribe(data => {
      this.reportsData = data;
    });
  }
  downloadFile(fileName) {
    this.reportsService.downloadReportFile(fileName, this.currentReportType).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  static #_ = this.ɵfac = function ReportsComponent_Factory(t) {
    return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_reports_service_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ReportsComponent,
    selectors: [["app-reports"]],
    decls: 46,
    vars: 48,
    consts: [["id", "reports"], [1, "empty-space"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "section-box"], [1, "section-title", 3, "dir"], [1, "jobs-inner"], [1, "summary-tabs", "mx-2"], [1, "btn", "btn-light", 3, "click", "ngClass"], [1, "report-details", "mx-2", "my-2"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["id", "paginationReports", 3, "pageChange"], [1, "btn", "btn-primary", 3, "click"]],
    template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div")(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_13_listener() {
          return ctx.changeReportType("daily");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_16_listener() {
          return ctx.changeReportType("weekly");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_19_listener() {
          return ctx.changeReportType("quarterly");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "div", 10)(24, "table", 11)(25, "thead")(26, "tr")(27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ReportsComponent_tr_43_Template, 15, 13, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "pagination-controls", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ReportsComponent_Template_pagination_controls_pageChange_45_listener($event) {
          return ctx.reportsPage = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 15, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 17, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 19, "Reports.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c0, ctx.currentReportType === "daily"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 21, "Daily"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](42, _c0, ctx.currentReportType === "weekly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 23, "Weekly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c0, ctx.currentReportType === "quarterly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 25, "Quarterly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 27, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 29, "Size"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 31, "Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 33, "Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 35, "Download"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](44, 37, ctx.reportsData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](46, _c1, ctx.reportsPage)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["#reports[_ngcontent-%COMP%]   .empty-space[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #e6e9ee;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 30px;\n  margin-bottom: -5%;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n  background-color: #f8f9fa;\n  border: 1px solid #ddd;\n  color: #333;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .report-details[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .report-details[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .report-details[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .report-details[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: black;\n}\n#reports[_ngcontent-%COMP%]   .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%]   .report-details[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #333;\n}\n#reports[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n#reports[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .report-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFlBQUE7RUFDQSx5QkNIWTtBRENoQjtBQUtFO0VBQ0UseUJDUFk7QURJaEI7QUFLSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS1E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFIVjtBQUtVO0VBQ0UseUJDeEJJO0VEeUJKLFlBQUE7QUFIWjtBQVVVO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBUlo7QUFVWTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQVJkO0FBV1k7RUFFRSxZQUFBO0FBVmQ7QUFhWTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQVhkO0FBb0JJO0VBQ0UsaUJBQUE7QUFsQk47QUFvQkk7RUFDRSxpQkFBQTtBQWxCTjs7QUFzQkE7RUFDRTtJQUNFLGdCQUFBO0VBbkJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuI3JlcG9ydHMge1xyXG4gIC5lbXB0eS1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICB9XHJcblxyXG4gIC5qb2JzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG5cclxuICAgIC5qb2JzLWlubmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTUlO1xyXG4gICAgICBcclxuICAgICAgLnN1bW1hcnktdGFicyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXBvcnQtZGV0YWlscyB7XHJcbiAgICAgICAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBbZGlyPVwicnRsXCJdIHtcclxuICAgIC5zdW1tYXJ5LXRhYnMge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5yZXBvcnQtZGV0YWlscyB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuam9icyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gIH1cclxuICBcclxufSIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8269:
/*!**************************************************************!*\
  !*** ./src/app/components/home/sectors/sectors.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectorsComponent: () => (/* binding */ SectorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _services_utilities_date_formatter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utilities/date-formatter.service */ 4401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);






function SectorsComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sector_r1.sectorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", sector_r1.valuePcnt, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sector_r1.value);
  }
}
function SectorsComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const currency_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](currency_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](currency_r2.ask);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](currency_r2.bid);
  }
}
class SectorsComponent {
  constructor(marketSummaryService, dateFormatterService) {
    this.marketSummaryService = marketSummaryService;
    this.sectorsData = [];
    this.currenciesData = [];
    this.selectedPeriod = 'W';
    this.dateFormatterService = dateFormatterService;
  }
  ngOnInit() {
    this.loadSectorsData(this.selectedPeriod);
    this.loadCurrenciesData();
  }
  loadSectorsData(period) {
    this.marketSummaryService.getSectorsActivity(period).subscribe(data => {
      this.sectorsData = data;
    });
  }
  loadCurrenciesData() {
    this.marketSummaryService.getCurrencies().subscribe(data => {
      this.currenciesData = data;
    });
  }
  changePeriod(period) {
    this.selectedPeriod = period;
    this.loadSectorsData(period);
  }
  static #_ = this.ɵfac = function SectorsComponent_Factory(t) {
    return new (t || SectorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utilities_date_formatter_service__WEBPACK_IMPORTED_MODULE_1__.DateFormatterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SectorsComponent,
    selectors: [["app-sectors"]],
    decls: 65,
    vars: 58,
    consts: [["id", "market-statistics"], [1, "jobs"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "jobs-inner"], [1, "row", 3, "dir"], [1, "col-md-8"], [1, "s"], [1, "sector-filter-buttons", "my-3"], [1, "btn", 3, "click"], [1, "summary-details", "mx-2", "my-2"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "currency-table"], [2, "margin", "50px"]],
    template: function SectorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SectorsComponent_Template_button_click_11_listener() {
          return ctx.changePeriod("W");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SectorsComponent_Template_button_click_14_listener() {
          return ctx.changePeriod("2W");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SectorsComponent_Template_button_click_17_listener() {
          return ctx.changePeriod("M");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SectorsComponent_Template_button_click_20_listener() {
          return ctx.changePeriod("2M");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SectorsComponent_Template_button_click_23_listener() {
          return ctx.changePeriod("YTD");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9)(27, "div", 10)(28, "table", 11)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, SectorsComponent_tr_41_Template, 7, 3, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 13)(43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 9)(47, "div", 10)(48, "table", 11)(49, "thead")(50, "tr")(51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, SectorsComponent_tr_61_Template, 7, 3, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 28, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 30, "SectorRanking.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.selectedPeriod === "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 32, "W"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.selectedPeriod === "2W");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 34, "2W"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.selectedPeriod === "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 36, "M"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.selectedPeriod === "2M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 38, "2M"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.selectedPeriod === "YTD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 40, "YTD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 42, "SectorName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 44, "ValuePercentage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 46, "Value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sectorsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 48, "Currencies.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 50, "Currency"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 52, "Ask"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 54, "Bid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currenciesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 56, "LastUpdated"), " : ", ctx.dateFormatterService.getFormattedDate(ctx.currenciesData[0].lastUpdated), "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Dir, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  padding-top: 5%;\n  background-color: #fff;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 2%;\n  font-weight: bold;\n  color: rgb(9, 71, 112);\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  background-color: #f5f5f5;\n  border-color: #f5f5f5;\n  color: rgb(0, 0, 0);\n}\n.btn.selected[_ngcontent-%COMP%] {\n  background-color: #112240;\n  border-color: #112240;\n  color: rgb(255, 255, 255);\n}\n\n.sector-filter-buttons[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.sector-filter-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.summary-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .sector-filter-buttons[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 1%;\n}\n[dir=rtl][_ngcontent-%COMP%]   .sector-filter-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.currency-table[_ngcontent-%COMP%] {\n  padding-top: 7.5%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlY3RvcnMvc2VjdG9ycy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0RZO0FEQWhCO0FBSUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0FBSFI7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDSSx5QkN4QlE7RUR5QlIscUJDekJRO0VEMEJSLHlCQUFBO0FBSlI7O0FBUUE7RUFDSSxtQkFBQTtBQUxKO0FBT0k7RUFDSSxrQkFBQTtBQUxSOztBQVNBO0VBQ0ksbUJBQUE7QUFOSjtBQVFJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBTlI7QUFRUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQU5aO0FBU1E7RUFDSSxtQkFBQTtBQVBaO0FBVVE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUFSWjs7QUFlSTtFQUNJLGlCQUFBO0FBWlI7QUFlSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFiUjtBQWNRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBWlo7QUFrQlk7RUFDSSxpQkFBQTtBQWhCaEI7O0FBcUJBO0VBQ0ksaUJBQUE7QUFsQkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmpvYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAtNSU7XHJcblxyXG4gICAgLmpvYnMtaW5uZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICAvLyBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYig5LCA3MSwgMTEyKTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rvci1maWx0ZXItYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS1kZXRhaWxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTcGVjaWZpYyBTdHlsZXNcclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rvci1maWx0ZXItYnV0dG9ucyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1bW1hcnktZGV0YWlscyB7XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICB0aCwgdGQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmN1cnJlbmN5LXRhYmxle1xyXG4gICAgcGFkZGluZy10b3A6IDcuNSU7XHJcbn1cclxuIiwiXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM3MTk2ZTk7XHJcbiRHcmVlbk9sZCAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJE5hdnlCYWNrIDogIzI3NDI2NDtcclxuJE5hdnlUZXh0IDogcmdiKDksIDcxLCAxMTIpO1xyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogT3BlbiBTYW5zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4377:
/*!************************************************************************!*\
  !*** ./src/app/components/home/stock-market/stock-market.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockMarketComponent: () => (/* binding */ StockMarketComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../market-summary/market-summary.component */ 2081);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);







const _c0 = (a0, a1) => ({
  "btn-light": a0,
  "btn-primary": a1
});
function StockMarketComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "table")(2, "tbody")(3, "tr")(4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr")(13, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr")(22, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tr")(31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "tr")(38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 13, "Gainers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.marketSummary.gainers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 15, ctx_r0.marketSummary.gainers / ctx_r0.marketSummary.stockCount * 100, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 18, "Losers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.marketSummary.losers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 20, ctx_r0.marketSummary.losers / ctx_r0.marketSummary.stockCount * 100, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 23, "Unchanged"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.marketSummary.stockCount - ctx_r0.marketSummary.gainers - ctx_r0.marketSummary.losers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 25, (ctx_r0.marketSummary.stockCount - ctx_r0.marketSummary.gainers - ctx_r0.marketSummary.losers) / ctx_r0.marketSummary.stockCount * 100, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 28, "Value"), " (Mn)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](36, 30, ctx_r0.marketSummary.totalValue, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 33, "Volume"), " (Mn)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](43, 35, ctx_r0.marketSummary.totalVolume, "1.0-0"));
  }
}
class StockMarketComponent {
  constructor(marketSummaryService) {
    this.marketSummaryService = marketSummaryService;
    this.selectedStock = 'Egx30';
    this.selectedPeriod = 'w';
    // Line Chart
    this.lineChartData = [{
      data: [],
      label: 'EGX'
    }];
    this.lineChartLabels = [];
    this.lineChartOptions = {
      responsive: true
    };
    // public lineChartColors: Array<any> = [
    //   {
    //     backgroundColor: 'rgba(148,159,177,0.2)',
    //     borderColor: 'rgba(148,159,177,1)',
    //     pointBackgroundColor: 'rgba(148,159,177,1)',
    //     pointBorderColor: '#fff',
    //     pointHoverBackgroundColor: '#fff',
    //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //   }
    // ];
    this.lineChartLegend = true;
    this.lineChartType = 'line';
    // Pie Chart
    this.pieChartLabels = ['Buy', 'Sell'];
    this.pieChartData = [300, 500];
    this.pieChartType = 'pie';
    this.pieChartDatasets = [{
      data: [300, 500]
    }];
    this.pieChartLegend = true;
    this.pieChartPlugins = [];
    // Market Status Pie Chart Data
    this.marketPieChartDatasets = [{
      data: [34.5, 30.13, 35.37],
      backgroundColor: ['blue', 'red']
    }];
    this.marketPieChartLabels = ['Gainers', 'Losers', 'Unchanged'];
    this.marketPieChartType = 'pie';
  }
  ngOnInit() {
    this.fetchStockData();
    this.marketSummaryService.getMarketSummary().subscribe(data => {
      this.marketSummary = data;
      this.updateMarketStatusPieChart();
    });
    this.marketSummaryService.getMarketMoneyFlow().subscribe(data => {
      this.marketMoneyFlow = data;
      this.updateMoneyFlowPieChart();
    });
    if (localStorage.getItem("language") == "ar") {
      this.marketPieChartLabels = ['الرابحين', 'الخاسرين', 'دون تغيير'];
    }
  }
  fetchStockData() {
    switch (this.selectedStock) {
      case 'Egx100':
        this.marketSummaryService.getEgx100(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx70':
        this.marketSummaryService.getEgx70(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx50':
        this.marketSummaryService.getEgx50(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx30Cap':
        this.marketSummaryService.getEgx30Cap(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
      case 'Egx30':
        this.marketSummaryService.getEgx30(this.selectedPeriod).subscribe(this.updateChartData.bind(this));
        break;
    }
  }
  updateChartData(data) {
    this.lineChartData = [{
      data: data.map(item => item.value),
      label: this.selectedStock,
      fill: true,
      tension: 0.5,
      borderColor: 'lightBlue',
      pointRadius: 0
    }];
    this.lineChartLabels = data.map(item => new Date(item.date).toDateString());
  }
  updateMarketStatusPieChart() {
    this.marketPieChartDatasets = [{
      data: [this.marketSummary.gainers, this.marketSummary.losers, this.marketSummary.stockCount - this.marketSummary.gainers - this.marketSummary.losers]
    }];
  }
  updateMoneyFlowPieChart() {
    this.pieChartDatasets = [{
      data: this.marketMoneyFlow.map(flow => flow.money)
    }];
    this.pieChartLabels = this.marketMoneyFlow.map(flow => flow.tradeClass);
  }
  onStockChange(stock) {
    this.selectedStock = stock;
    this.fetchStockData();
  }
  onPeriodChange(period) {
    this.selectedPeriod = period;
    this.fetchStockData();
  }
  static #_ = this.ɵfac = function StockMarketComponent_Factory(t) {
    return new (t || StockMarketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StockMarketComponent,
    selectors: [["app-stock-market"]],
    decls: 70,
    vars: 110,
    consts: [["id", "market-statistics"], [1, "jobs"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container", 3, "dir"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "row", "mx-2"], [1, "col-md-6", "text-center"], [1, "btn", "btn-sm", 3, "click", "ngClass"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "type"], [1, "pie-container"], ["baseChart", "", 3, "datasets", "labels", "type"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "row", "mx-2", "market-status"], [1, "col-md-6"], ["class", "market-summary-table", 4, "ngIf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "pie-container"], [1, "market-summary-table"], [1, "text-success"], [1, "text-danger"], [1, "text-primary"], ["colspan", "2", 1, "text-dark"]],
    template: function StockMarketComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div")(16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_16_listener() {
          return ctx.onStockChange("Egx100");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_19_listener() {
          return ctx.onStockChange("Egx70");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_22_listener() {
          return ctx.onStockChange("Egx30Cap");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_25_listener() {
          return ctx.onStockChange("Egx30");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_30_listener() {
          return ctx.onPeriodChange("d");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_33_listener() {
          return ctx.onPeriodChange("w");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_36_listener() {
          return ctx.onPeriodChange("1m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_39_listener() {
          return ctx.onPeriodChange("3m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_42_listener() {
          return ctx.onPeriodChange("6m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_45_listener() {
          return ctx.onPeriodChange("12m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_48_listener() {
          return ctx.onPeriodChange("ytd");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7)(52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 12)(58, "div", 13)(59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, StockMarketComponent_div_62_Template, 44, 38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 13)(64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "app-market-summary");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 41, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 43, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 45, "Header.Item5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 47, "EGX.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](77, _c0, ctx.selectedStock !== "Egx100", ctx.selectedStock === "Egx100"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 49, "EGX100"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](80, _c0, ctx.selectedStock !== "Egx70", ctx.selectedStock === "Egx70"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 51, "EGX70"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](83, _c0, ctx.selectedStock !== "Egx30Cap", ctx.selectedStock === "Egx30Cap"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 53, "EGX30Cap"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](86, _c0, ctx.selectedStock !== "Egx30", ctx.selectedStock === "Egx30"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 55, "EGX30"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("type", ctx.lineChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](89, _c0, ctx.selectedPeriod !== "d", ctx.selectedPeriod === "d"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 57, "Daily"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](92, _c0, ctx.selectedPeriod !== "w", ctx.selectedPeriod === "w"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 59, "W"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](95, _c0, ctx.selectedPeriod !== "1m", ctx.selectedPeriod === "1m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 61, "1M"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](98, _c0, ctx.selectedPeriod !== "3m", ctx.selectedPeriod === "3m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 63, "3M"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](101, _c0, ctx.selectedPeriod !== "6m", ctx.selectedPeriod === "6m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 65, "6M"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](104, _c0, ctx.selectedPeriod !== "12m", ctx.selectedPeriod === "12m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 67, "1Y"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](107, _c0, ctx.selectedPeriod !== "ytd", ctx.selectedPeriod === "ytd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 69, "YTD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 71, "MoneyFlows.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.pieChartDatasets)("labels", ctx.pieChartLabels)("type", ctx.pieChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 73, "MarketStatus.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.marketSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 75, "GainersLosersUnchanged.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.marketPieChartDatasets)("labels", ctx.marketPieChartLabels)("type", ctx.marketPieChartType);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_1__.MarketSummaryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%] {\n  border-top: 2px solid #ccc;\n  padding-top: 20px;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: blue;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  padding-top: 230px;\n}\n@media (max-width: 768px) {\n  .section-title[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 5%;\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    padding: 10px;\n  }\n}\n@media (max-width: 991px) {\n  .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    padding: 10px;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n@media (max-width: 768px) {\n  .btn-primary[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.btn-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #343a40;\n}\n@media (max-width: 768px) {\n  .btn-light[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.btn-primary.active[_ngcontent-%COMP%], .btn-light.active[_ngcontent-%COMP%] {\n  border-color: #007bff;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  [dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  [dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  [dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 0;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 85%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b2NrLW1hcmtldC9zdG9jay1tYXJrZXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBUEY7SUFRSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBRko7QUFDRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUhKO0FBS0k7RUFQRjtJQVFJLFlBQUE7RUFGSjtBQUNGO0FBS0U7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBSEo7QUFLSTtFQUNFLGdCQUFBO0FBSE47QUFLTTtFQUhGO0lBSUksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQUZOO0FBQ0Y7QUFLSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFITjtBQUtNO0VBSkY7SUFLSSxrQkFBQTtFQUZOO0FBQ0Y7QUFLSTtFQUNFLFdBQUE7QUFITjtBQUtNO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBSFI7QUFLUTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSFY7QUFLVTtFQUxGO0lBTUksWUFBQTtFQUZWO0FBQ0Y7QUFLUTtFQUNFLFlBQUE7QUFIVjtBQU1RO0VBQ0UsVUFBQTtBQUpWO0FBT1E7RUFDRSxXQUFBO0FBTFY7QUFRUTtFQUNFLGlCQUFBO0FBTlY7O0FBWUE7RUFDRSxrQkFBQTtBQVRGO0FBVUU7RUFGRjtJQUdJLGdCQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUNFLHlCQ3JHYztBRDhGaEI7QUFTRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQVBKO0FBU0k7RUFKRjtJQUtJLGVBQUE7SUFDQSxhQUFBO0VBTko7QUFDRjtBQU9JO0VBUkY7SUFTSSxnQkFBQTtJQUNBLGFBQUE7RUFKSjtBQUNGOztBQVFBO0VBQ0UseUJDdEhjO0VEdUhkLFlBQUE7QUFMRjtBQU9FO0VBSkY7SUFLSSxtQkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFKRjtBQU1FO0VBSkY7SUFLSSxtQkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQVFJO0VBQ0UsMkJBQUE7QUFMTjtBQVFJO0VBQ0UsZ0JBQUE7QUFOTjtBQVFNO0VBSEY7SUFJSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBTE47QUFDRjtBQVNNO0VBQ0UsZ0JBQUE7QUFQUjtBQVNRO0VBSEY7SUFJSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBTlI7QUFDRjtBQVNNO0VBQ0UsaUJBQUE7QUFQUjtBQVNRO0VBSEY7SUFJSSxrQkFBQTtFQU5SO0FBQ0Y7QUFXVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQVRaOztBQWdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUFiRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDsgXHJcbiAgfVxyXG5cclxuICAuY29sLW1kLTYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGllLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hcmtldC1zdGF0dXMge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgICAuY29sLW1kLTYge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXJrZXQtc3VtbWFyeS10YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICAgIHRkLCB0aCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtcHJpbWFyeSB7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc2VjdGlvbi10aXRsZXtcclxuICBwYWRkaW5nLXRvcDogMjMwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIH1cclxuICBcclxufVxyXG4uam9icyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgXHJcbiAgLmpvYnMtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSwgLmJ0bi1saWdodCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5LmFjdGl2ZSwgLmJ0bi1saWdodC5hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAucm93IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbWQtNiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFya2V0LXN0YXR1cyB7XHJcbiAgICAgIC5jb2wtbWQtNiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFya2V0LXN1bW1hcnktdGFibGUge1xyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuam9icyB7XHJcbiAgICBwYWRkaW5nLXRvcDogODUlO1xyXG4gIH1cclxuICBcclxufSIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8531:
/*!************************************************************************************!*\
  !*** ./src/app/components/home/stocks-information/stocks-information.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StocksInformationComponent: () => (/* binding */ StocksInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);






const _c0 = a0 => ({
  "active": a0
});
const _c1 = a0 => ({
  id: "paginationInsider",
  itemsPerPage: 10,
  currentPage: a0
});
const _c2 = a0 => ({
  id: "paginationFinancial",
  itemsPerPage: 10,
  currentPage: a0
});
const _c3 = a0 => ({
  id: "paginationAudit",
  itemsPerPage: 10,
  currentPage: a0
});
const _c4 = a0 => ({
  id: "paginationAnn",
  itemsPerPage: 10,
  currentPage: a0
});
function StocksInformationComponent_div_23_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const insider_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insider_r2.stockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insider_r2.transType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insider_r2.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insider_r2.closePrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 5, insider_r2.transDate, "shortDate"));
  }
}
function StocksInformationComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, StocksInformationComponent_div_23_tr_21_Template, 12, 8, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "pagination-controls", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function StocksInformationComponent_div_23_Template_pagination_controls_pageChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.insiderTradingPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Company"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "Type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "Volume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 12, "ClosePrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 14, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 16, ctx_r2.insiderTradingData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx_r2.insiderTradingPage)));
  }
}
function StocksInformationComponent_div_24_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td")(9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksInformationComponent_div_24_tr_18_Template_button_click_9_listener() {
      const statement_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.downloadPdf(statement_r6.id, statement_r6.isin, "financialStatement"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const statement_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](statement_r6.stockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](statement_r6.type1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, statement_r6.lastUpdated, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "Download"), " ");
  }
}
function StocksInformationComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StocksInformationComponent_div_24_tr_18_Template, 12, 9, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pagination-controls", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function StocksInformationComponent_div_24_Template_pagination_controls_pageChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.financialStatementsPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "Company"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "Type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "LastUpdated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "Download"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 13, ctx_r2.financialStatementsData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c2, ctx_r2.financialStatementsPage)));
  }
}
function StocksInformationComponent_div_25_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td")(9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksInformationComponent_div_25_tr_18_Template_button_click_9_listener() {
      const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.downloadPdf(report_r9.id, report_r9.isin, "auditReport"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const report_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r9.stockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r9.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, report_r9.annDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "Download"), " ");
  }
}
function StocksInformationComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StocksInformationComponent_div_25_tr_18_Template, 12, 9, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function StocksInformationComponent_div_25_Template_pagination_controls_pageChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.auditReportsPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "Company"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "Header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "Download"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 13, ctx_r2.auditReportsData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c3, ctx_r2.auditReportsPage)));
  }
}
function StocksInformationComponent_div_26_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td")(9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksInformationComponent_div_26_tr_18_Template_button_click_9_listener() {
      const announcement_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.downloadPdf(announcement_r12.id, announcement_r12.isin, "announcement"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const announcement_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](announcement_r12.stockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](announcement_r12.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, announcement_r12.annDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "Download"), " ");
  }
}
function StocksInformationComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StocksInformationComponent_div_26_tr_18_Template, 12, 9, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pagination-controls", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function StocksInformationComponent_div_26_Template_pagination_controls_pageChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.announcementsPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "Company"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "Header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "Download"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 13, ctx_r2.announcementsData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c4, ctx_r2.announcementsPage)));
  }
}
class StocksInformationComponent {
  constructor(marketSummaryService) {
    this.marketSummaryService = marketSummaryService;
    this.currentSummary = 'insiderActions';
    this.insiderTradingData = [];
    this.financialStatementsData = [];
    this.auditReportsData = [];
    this.announcementsData = [];
    this.insiderTradingPage = 1;
    this.financialStatementsPage = 1;
    this.auditReportsPage = 1;
    this.announcementsPage = 1;
  }
  ngOnInit() {
    this.loadInsiderTradings();
    this.loadFinancialStatements();
    this.loadAuditReports();
    this.loadAnnouncements();
  }
  changeSummary(summary) {
    this.currentSummary = summary;
  }
  loadInsiderTradings() {
    this.marketSummaryService.getInsiderTrading().subscribe(data => {
      this.insiderTradingData = data;
    });
  }
  loadFinancialStatements() {
    this.marketSummaryService.getAllFinancialStatements().subscribe(data => {
      this.financialStatementsData = data;
    });
  }
  loadAuditReports() {
    this.marketSummaryService.getAllAuditReports().subscribe(data => {
      this.auditReportsData = data;
    });
  }
  loadAnnouncements() {
    this.marketSummaryService.getAllAnnouncements().subscribe(data => {
      this.announcementsData = data;
    });
  }
  downloadPdf(id, isin, type) {
    let downloadObservable;
    switch (type) {
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
  static #_ = this.ɵfac = function StocksInformationComponent_Factory(t) {
    return new (t || StocksInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StocksInformationComponent,
    selectors: [["app-stocks-information"]],
    decls: 28,
    vars: 37,
    consts: [["id", "stocks-information"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner"], [1, "summary-tabs", "mx-2"], [1, "btn", "btn-light", 3, "click", "ngClass"], ["class", "summary-details mx-2 my-2", 4, "ngIf"], [1, "empty-space"], [1, "summary-details", "mx-2", "my-2"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["id", "paginationInsider", 3, "pageChange"], ["id", "paginationFinancial", 3, "pageChange"], [1, "btn", "btn-primary", 3, "click"], ["id", "paginationAudit", 3, "pageChange"], ["id", "paginationAnn", 3, "pageChange"]],
    template: function StocksInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksInformationComponent_Template_button_click_11_listener() {
          return ctx.changeSummary("insiderActions");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksInformationComponent_Template_button_click_14_listener() {
          return ctx.changeSummary("financialStatements");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksInformationComponent_Template_button_click_17_listener() {
          return ctx.changeSummary("auditReports");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksInformationComponent_Template_button_click_20_listener() {
          return ctx.changeSummary("announcements");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, StocksInformationComponent_div_23_Template, 24, 21, "div", 8)(24, StocksInformationComponent_div_24_Template, 21, 18, "div", 8)(25, StocksInformationComponent_div_25_Template, 21, 18, "div", 8)(26, StocksInformationComponent_div_26_Template, 21, 18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 15, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 17, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 19, "Companies Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c0, ctx.currentSummary === "insiderActions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 21, "InsiderActions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c0, ctx.currentSummary === "financialStatements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 23, "CompaniesFinancialStatements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c0, ctx.currentSummary === "auditReports"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 25, "AuditReports"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c0, ctx.currentSummary === "announcements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 27, "Announcements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "insiderActions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "financialStatements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "auditReports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSummary === "announcements");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".empty-space[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: #e6e9ee;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  padding-top: 7%;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n}\n\n.summary-tabs[_ngcontent-%COMP%] {\n  display: flex;\n}\n.summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n  background-color: #f8f9fa;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.summary-tabs[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n\n.summary-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: black;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 85%;\n  }\n  .summary-tabs[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 2000px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 10%;\n  }\n}\n@media (max-width: 1500px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 20%;\n  }\n}\n@media (max-width: 1000px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 30%;\n  }\n}\n@media (max-width: 640px) {\n  .jobs[_ngcontent-%COMP%] {\n    padding-top: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b2Nrcy1pbmZvcm1hdGlvbi9zdG9ja3MtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EseUJDRGM7QURDaEI7O0FBRUE7RUFDRSx5QkNKYztFREtkLGVBQUE7QUFDRjtBQUFFO0VBQ0Usc0JBQUE7RUFFQSxhQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0FBQUY7QUFHRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQURKO0FBR0k7RUFDRSx5QkN2QlU7RUR3QlYsWUFBQTtBQUROOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQUtFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUk7RUFFRSxZQUFBO0FBTE47QUFRSTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQU5OOztBQVlFO0VBQ0UsaUJBQUE7QUFUSjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjs7QUFZQTtFQUNFO0lBQ0UsZ0JBQUE7RUFURjtFQVdBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUFURjtBQUNGO0FBYUE7RUFDRTtJQUNFLGdCQUFBO0VBWEY7QUFDRjtBQWFBO0VBQ0U7SUFDRSxnQkFBQTtFQVhGO0FBQ0Y7QUFjQTtFQUNFO0lBQ0UsZ0JBQUE7RUFaRjtBQUNGO0FBY0E7RUFDRTtJQUNFLGdCQUFBO0VBWkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5lbXB0eS1zcGFjZSB7XHJcbiAgaGVpZ2h0OiA2MHB4OyAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG59XHJcbi5qb2JzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgLmpvYnMtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IC01JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS10YWJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS1kZXRhaWxzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgdGgsIHRkIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgXHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuc3VtbWFyeS10YWJzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuc3VtbWFyeS1kZXRhaWxzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuam9icyB7XHJcbiAgICBwYWRkaW5nLXRvcDogODUlO1xyXG4gIH1cclxuICAuc3VtbWFyeS10YWJze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDsgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMDBweCkge1xyXG4gIC5qb2JzIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAuam9icyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5qb2JzIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5qb2JzIHtcclxuICAgIHBhZGRpbmctdG9wOiA4MCU7XHJcbiAgfVxyXG59IiwiXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM3MTk2ZTk7XHJcbiRHcmVlbk9sZCAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJE5hdnlCYWNrIDogIzI3NDI2NDtcclxuJE5hdnlUZXh0IDogcmdiKDksIDcxLCAxMTIpO1xyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogT3BlbiBTYW5zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4401:
/*!*************************************************************************!*\
  !*** ./src/app/components/services/utilities/date-formatter.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormatterService: () => (/* binding */ DateFormatterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class DateFormatterService {
  constructor() {}
  getFormattedDate(dateString) {
    const language = localStorage.getItem('language');
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? language === 'ar' ? 'م' : 'pm' : language === 'ar' ? 'ص' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}${ampm}`;
  }
  static #_ = this.ɵfac = function DateFormatterService_Factory(t) {
    return new (t || DateFormatterService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DateFormatterService,
    factory: DateFormatterService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8825:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/stock-details/bonus-assemblies/bonus-assemblies.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BonusAssembliesComponent: () => (/* binding */ BonusAssembliesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);




function BonusAssembliesComponent_ng_container_8_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bonusShare_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r1.bsCompName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r1.bsDistibution);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r1.bsMatDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bonusShare_r1.bsDistDate);
  }
}
function BonusAssembliesComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BonusAssembliesComponent_ng_container_8_tr_17_Template, 9, 4, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "CompanyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "Distribution"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "MaturityDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, "DistributionDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.bonusSharesData);
  }
}
function BonusAssembliesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "There's no information available"), " ");
  }
}
function BonusAssembliesComponent_ng_container_16_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assembly_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r3.genIsinName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 5, assembly_r3.genIsinDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r3.genIsinAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r3.genIsinTiming);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r3.genIsinType);
  }
}
function BonusAssembliesComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BonusAssembliesComponent_ng_container_16_tr_20_Template, 12, 8, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "CompanyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "Timing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 14, "Type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.assembliesData);
  }
}
function BonusAssembliesComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "There's no information available"), " ");
  }
}
function BonusAssembliesComponent_ng_container_25_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const insiderTrading_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insiderTrading_r4.stockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insiderTrading_r4.transType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insiderTrading_r4.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insiderTrading_r4.closePrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 5, insiderTrading_r4.transDate, "shortDate"));
  }
}
function BonusAssembliesComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BonusAssembliesComponent_ng_container_25_tr_20_Template, 12, 8, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "CompanyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "TransType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, "Volume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "ClosePrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 14, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.insiderTradingData);
  }
}
function BonusAssembliesComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "There's no information available"), " ");
  }
}
function BonusAssembliesComponent_ng_container_33_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BonusAssembliesComponent_ng_container_33_tr_14_Template_button_click_7_listener() {
      const statement_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.downloadPdf(statement_r6.id, statement_r6.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const statement_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](statement_r6.type1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, statement_r6.lastUpdated, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Download"), " ");
  }
}
function BonusAssembliesComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BonusAssembliesComponent_ng_container_33_tr_14_Template, 10, 8, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "LastUpdated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Download"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.financialStatementsData);
  }
}
function BonusAssembliesComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "There's no information available"), " ");
  }
}
function BonusAssembliesComponent_ng_container_41_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BonusAssembliesComponent_ng_container_41_tr_14_Template_button_click_7_listener() {
      const report_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.downloadAuditPdf(report_r8.id, report_r8.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const report_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r8.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, report_r8.annDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Download"), " ");
  }
}
function BonusAssembliesComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BonusAssembliesComponent_ng_container_41_tr_14_Template, 10, 8, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Download"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.auditReportsData);
  }
}
function BonusAssembliesComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "There's no information available"), " ");
  }
}
function BonusAssembliesComponent_ng_container_49_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BonusAssembliesComponent_ng_container_49_tr_14_Template_button_click_7_listener() {
      const announcement_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.downloadAnnouncementPdf(announcement_r10.id, announcement_r10.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const announcement_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](announcement_r10.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, announcement_r10.annDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Download"), " ");
  }
}
function BonusAssembliesComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BonusAssembliesComponent_ng_container_49_tr_14_Template, 10, 8, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Download"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.announcementsData);
  }
}
function BonusAssembliesComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "There's no information available"), " ");
  }
}
class BonusAssembliesComponent {
  constructor(marketSummaryService) {
    this.marketSummaryService = marketSummaryService;
    this.bonusSharesData = [];
    this.assembliesData = [];
    this.insiderTradingData = [];
    this.financialStatementsData = [];
    this.auditReportsData = [];
    this.announcementsData = [];
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnChanges(changes) {
    if (changes['stockIsin'] && changes['stockIsin'].currentValue) {
      this.loadData();
    }
  }
  loadData() {
    this.loadBonusShares();
    this.loadAssemblies();
    this.loadInsiderTradings();
    this.loadFinancialStatements();
    this.loadAuditReports();
    this.loadAnnouncements();
  }
  loadBonusShares() {
    this.marketSummaryService.getStockBonusShares(this.stockIsin).subscribe(data => {
      this.bonusSharesData = data;
    });
  }
  loadInsiderTradings() {
    this.marketSummaryService.getStockInsiderTrading(this.stockIsin).subscribe(data => {
      this.insiderTradingData = data;
    });
  }
  loadAssemblies() {
    this.marketSummaryService.getStockAssemblies(this.stockIsin).subscribe(data => {
      this.assembliesData = data.map(item => ({
        ...item,
        genIsinDate: this.parseDateString(item.genIsinDate)
      }));
    });
  }
  loadFinancialStatements() {
    this.marketSummaryService.getCompaniesFinancialStatements(this.stockIsin).subscribe(data => {
      this.financialStatementsData = data;
    });
  }
  loadAuditReports() {
    this.marketSummaryService.getAuditReportsForStock(this.stockIsin).subscribe(data => {
      this.auditReportsData = data;
    });
  }
  loadAnnouncements() {
    this.marketSummaryService.getAnnouncementsForStock(this.stockIsin).subscribe(data => {
      this.announcementsData = data;
    });
  }
  downloadPdf(id, isin) {
    this.marketSummaryService.downloadFinancialStatementPdf(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${isin}_FinancialStatement.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  downloadAuditPdf(id, isin) {
    this.marketSummaryService.downloadAuditReportPdf(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${isin}_AuditReport.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  downloadAnnouncementPdf(id, isin) {
    this.marketSummaryService.downloadAnnouncementPdf(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${isin}_Announcement.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  parseDateString(dateString) {
    const [day, month, year] = dateString.split('/').map(part => parseInt(part, 10));
    return new Date(year, month - 1, day);
  }
  static #_ = this.ɵfac = function BonusAssembliesComponent_Factory(t) {
    return new (t || BonusAssembliesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BonusAssembliesComponent,
    selectors: [["app-bonus-assemblies"]],
    inputs: {
      stockIsin: "stockIsin"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 52,
    vars: 33,
    consts: [["noBonusShares", ""], ["noAssemblies", ""], ["noInsiderActions", ""], ["noFinancialStatements", ""], ["noAuditReports", ""], ["noAnnouncements", ""], [1, "container", "mt-4", "bonus-assemblies-container", 3, "dir"], [1, "row"], [1, "col-12", "col-md-6"], [1, "table-title"], [1, "table-container"], [4, "ngIf", "ngIfElse"], [1, "row", "insider-actions-container"], [1, "col-12", "col-md-6", "contai"], [1, "table", "table-bordered", "table-responsive"], [4, "ngFor", "ngForOf"], [1, "no-content-message", "text-center"], [1, "btn", "btn-primary", 3, "click"]],
    template: function BonusAssembliesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7)(3, "div", 8)(4, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BonusAssembliesComponent_ng_container_8_Template, 18, 13, "ng-container", 11)(9, BonusAssembliesComponent_ng_template_9_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BonusAssembliesComponent_ng_container_16_Template, 21, 16, "ng-container", 11)(17, BonusAssembliesComponent_ng_template_17_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12)(20, "div", 8)(21, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BonusAssembliesComponent_ng_container_25_Template, 21, 16, "ng-container", 11)(26, BonusAssembliesComponent_ng_template_26_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8)(29, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BonusAssembliesComponent_ng_container_33_Template, 15, 10, "ng-container", 11)(34, BonusAssembliesComponent_ng_template_34_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13)(37, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, BonusAssembliesComponent_ng_container_41_Template, 15, 10, "ng-container", 11)(42, BonusAssembliesComponent_ng_template_42_Template, 3, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13)(45, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, BonusAssembliesComponent_ng_container_49_Template, 15, 10, "ng-container", 11)(50, BonusAssembliesComponent_ng_template_50_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const noBonusShares_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        const noAssemblies_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        const noInsiderActions_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        const noFinancialStatements_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
        const noAuditReports_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        const noAnnouncements_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 19, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 21, "BonusShares"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bonusSharesData && ctx.bonusSharesData.length > 0)("ngIfElse", noBonusShares_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 23, "GeneralAssemblies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.assembliesData && ctx.assembliesData.length > 0)("ngIfElse", noAssemblies_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 25, "InsiderActions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.insiderTradingData && ctx.insiderTradingData.length > 0)("ngIfElse", noInsiderActions_r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 27, "CompaniesFinancialStatements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.financialStatementsData && ctx.financialStatementsData.length > 0)("ngIfElse", noFinancialStatements_r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 29, "AuditReports"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auditReportsData && ctx.auditReportsData.length > 0)("ngIfElse", noAuditReports_r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 31, "Announcements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.announcementsData && ctx.announcementsData.length > 0)("ngIfElse", noAnnouncements_r16);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".bonus-assemblies-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.bonus-assemblies-container[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: bold;\n  color: #000000;\n}\n.bonus-assemblies-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  width: auto;\n}\n.bonus-assemblies-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -4px;\n  border-collapse: collapse;\n}\n.bonus-assemblies-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .bonus-assemblies-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.bonus-assemblies-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n\n.insider-actions-container[_ngcontent-%COMP%] {\n  padding-top: 2%;\n}\n.insider-actions-container[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: bold;\n  color: #000000;\n}\n.insider-actions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n.insider-actions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -4px;\n  border-collapse: collapse;\n}\n.insider-actions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .insider-actions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.insider-actions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.contai[_ngcontent-%COMP%] {\n  margin-top: 3%;\n}\n\n@media (max-width: 767px) {\n  .table-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .table-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n  }\n  .no-content-message[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay1kZXRhaWxzL2JvbnVzLWFzc2VtYmxpZXMvYm9udXMtYXNzZW1ibGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ047QUFFSTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUFETjtBQUVNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUVRO0VBRUUsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFEVjtBQUlRO0VBQ0UseUJBQUE7QUFGVjs7QUFRRTtFQUNFLGVBQUE7QUFMSjtBQU1JO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFKTjtBQU9JO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBTE47QUFPTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBTFI7QUFPUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUxWO0FBUVE7RUFDRSx5QkFBQTtBQU5WOztBQVlJO0VBQ0UsaUJBQUE7QUFUTjs7QUFZRTtFQUNFLGNBQUE7QUFUSjs7QUFXRTtFQUNFO0lBQ0ksbUJBQUE7RUFSTjtFQVdFO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtFQVROO0VBWUU7SUFDSSxlQUFBO0VBVk47RUFhRTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQVhOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9udXMtYXNzZW1ibGllcy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxuICAgIC50YWJsZS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGFibGUtY29udGFpbmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vICAgcGFkZGluZzogMTVweDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgXHJcbiAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmluc2lkZXItYWN0aW9ucy1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAudGFibGUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIFxyXG4gICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBbZGlyPVwicnRsXCJdIHtcclxuICAgIGg0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWl7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vLWNvbnRlbnQtbWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9845:
/*!*********************************************************************!*\
  !*** ./src/app/components/stock-details/stock-details.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockDetailsComponent: () => (/* binding */ StockDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _services_utilities_date_formatter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/utilities/date-formatter.service */ 4401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _bonus_assemblies_bonus_assemblies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bonus-assemblies/bonus-assemblies.component */ 8825);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 852);










const _c0 = a0 => ({
  "loader": a0
});
const _c1 = (a0, a1) => ({
  "text-success": a0,
  "text-danger": a1
});
function StockDetailsComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", stock_r2.isin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stock_r2.englishName);
  }
}
function StockDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "table", 24)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tbody")(44, "tr")(45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 27, "Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 29, "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 31, "open"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 33, "close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 35, "change"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 37, "lastPrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 39, "tradesCount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 41, "askVolume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 43, "bidVolume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 45, "highBidPrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 47, "lowAskPrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 49, "value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 51, "volume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.englishName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](53, _c1, ctx_r2.stockDetails.change > 0, ctx_r2.stockDetails.change < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.stockDetails.change, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.lastPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.tradesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.askVolume);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.bidVolume);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.highBidPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.lowAskPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockDetails.volume);
  }
}
function StockDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "canvas", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r2.lineChartData)("labels", ctx_r2.lineChartLabels)("options", ctx_r2.lineChartOptions)("type", ctx_r2.lineChartType)("legend", ctx_r2.lineChartLegend);
  }
}
function StockDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28)(5, "div")(6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div")(24, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div")(30, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div")(36, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 13, "Additional Information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 15, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockAdditionalDetails == null ? null : ctx_r2.stockAdditionalDetails.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 17, "Telephone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockAdditionalDetails == null ? null : ctx_r2.stockAdditionalDetails.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 19, "Fax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockAdditionalDetails == null ? null : ctx_r2.stockAdditionalDetails.fax);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 21, "Capital"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockAdditionalDetails == null ? null : ctx_r2.stockAdditionalDetails.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 23, "Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.stockAdditionalDetails == null ? null : ctx_r2.stockAdditionalDetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 25, "Board Members"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r2.stockAdditionalDetails == null ? null : ctx_r2.stockAdditionalDetails.boardMembers, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function StockDetailsComponent_ng_container_22_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dividend_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dividend_r4.divCompName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dividend_r4.divCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dividend_r4.divAddess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dividend_r4.divNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dividend_r4.divValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dividend_r4.divMatDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dividend_r4.divPayDate);
  }
}
function StockDetailsComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23)(2, "table", 24)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, StockDetailsComponent_ng_container_22_tr_27_Template, 15, 7, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, "Company"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, "Currency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 12, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 14, "Number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 16, "Value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 18, "MaturityDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 20, "PayDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.dividendsData);
  }
}
function StockDetailsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "There's no information available"), " ");
  }
}
function StockDetailsComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StockDetailsComponent_div_29_div_1_Template_div_click_0_listener() {
      const news_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.selectNews(news_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const news_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](news_r6.newsHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](news_r6.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 3, "News.ReadMore"));
  }
}
function StockDetailsComponent_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StockDetailsComponent_div_29_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StockDetailsComponent_div_29_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, "News.Previous"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 10, "News.Page"), " ", ctx_r2.currentPage, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 12, "News.Of"), " ", ctx_r2.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 14, "News.Next"), " ");
  }
}
function StockDetailsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StockDetailsComponent_div_29_div_1_Template, 8, 5, "div", 33)(2, StockDetailsComponent_div_29_div_2_Template, 11, 16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.paginatedStockNews);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.totalPages > 1);
  }
}
function StockDetailsComponent_div_30_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r2.selectedArticle.newsAttachment, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Download Attachment"));
  }
}
function StockDetailsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StockDetailsComponent_div_30_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deselectNews());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StockDetailsComponent_div_30_div_7_Template, 4, 4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "News.Back"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedArticle.newsHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r2.selectedArticle.newsDetails, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedArticle.newsAttachment);
  }
}
class StockDetailsComponent {
  constructor(route, router, marketSummaryService, dateFormatterService) {
    this.route = route;
    this.router = router;
    this.marketSummaryService = marketSummaryService;
    this.dateFormatterService = dateFormatterService;
    this.chartData = [];
    this.chartLabels = [];
    this.loading = true;
    this.stockNews = [];
    this.dividendsData = [];
    this.paginatedStockNews = [];
    this.currentPage = 1;
    this.pageSize = 3;
    this.lineChartData = [{
      data: [],
      label: 'Stock Prices'
    }];
    this.lineChartLabels = [];
    this.lineChartOptions = {
      responsive: true
    };
    this.lineChartLegend = true;
    this.lineChartType = 'line';
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(params => {
      this.isin = params['isin'];
      return this.marketSummaryService.getStocksGridData();
    })).subscribe(stocks => {
      this.allStocks = stocks;
      this.updateStockDetails(this.isin);
      this.updateStockChart(this.isin);
      this.updateAdditionalStockDetails(this.isin);
      this.updateNews(this.isin);
      this.getDividendsData();
    });
  }
  getDividendsData() {
    this.marketSummaryService.getDividendsForStock(this.isin).subscribe(data => {
      this.dividendsData = data;
    });
  }
  updateStockDetails(isin) {
    this.loading = true;
    this.marketSummaryService.getStockDetails(isin).subscribe(details => {
      this.stockDetails = details;
      this.loading = false;
    });
  }
  updateStockChart(isin) {
    this.loading = true;
    this.marketSummaryService.getStockFullDetails(isin).subscribe(data => {
      this.chartData = data.map(item => item.lastPrice);
      this.chartLabels = data.map(item => new Date(item.tradeDate).toDateString());
      this.lineChartData = [{
        data: this.chartData,
        label: 'Stock Prices',
        fill: true,
        tension: 0.5,
        borderColor: 'lightBlue',
        pointRadius: 0
      }];
      this.lineChartLabels = this.chartLabels;
      this.loading = false;
    });
  }
  updateAdditionalStockDetails(isin) {
    this.loading = true;
    this.marketSummaryService.getStockDataInfo(isin).subscribe(details => {
      this.stockAdditionalDetails = details;
      this.loading = false;
    });
  }
  updateNews(isin) {
    this.loading = true;
    this.marketSummaryService.getNewsForStock(isin).subscribe(news => {
      this.stockNews = news.map(newsItem => ({
        ...newsItem,
        formattedDate: this.dateFormatterService.getFormattedDate(newsItem.newsDate)
      }));
      this.totalPages = Math.ceil(this.stockNews.length / this.pageSize);
      this.paginateNews();
      this.loading = false;
    });
  }
  paginateNews() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedStockNews = this.stockNews.slice(start, end);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateNews();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateNews();
    }
  }
  onStockChange(newIsin) {
    this.isin = newIsin;
    this.router.navigate(['/stock-details', this.isin]).then(() => {
      window.location.reload();
    });
    // this.updateStockDetails(newIsin);
    // this.updateStockChart(newIsin);
    // this.updateAdditionalStockDetails(newIsin);
    // this.updateNews(newIsin);
    //  this.router.navigate(['/stock-details', this.isin]);
  }
  selectNews(news) {
    this.selectedArticle = news;
  }
  deselectNews() {
    this.selectedArticle = null;
  }
  static #_ = this.ɵfac = function StockDetailsComponent_Factory(t) {
    return new (t || StockDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_utilities_date_formatter_service__WEBPACK_IMPORTED_MODULE_1__.DateFormatterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: StockDetailsComponent,
    selectors: [["app-stock-details"]],
    decls: 32,
    vars: 28,
    consts: [["noDividends", ""], ["id", "market-watch", 1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "jobs-inner"], [1, "dropdown-container"], ["for", "stockSelector", 1, "bigger-text", 3, "dir"], ["id", "stockSelector", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "table-responsive", 4, "ngIf"], [1, "info-chart-container"], ["class", "chart-container", 4, "ngIf"], [3, "ngClass"], ["class", "details-section-container", 4, "ngIf"], [1, "info-news-container"], [1, "dividends-column"], [1, "bigger-text"], [1, "dividends-table-container"], [4, "ngIf", "ngIfElse"], [1, "news-column"], ["class", "news-container", 4, "ngIf"], ["class", "news-details", 4, "ngIf"], [3, "stockIsin"], [3, "value"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "chart-container"], ["baseChart", "", 3, "datasets", "labels", "options", "type", "legend"], [1, "details-section-container"], [1, "details-section"], [3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "no-content-message", "text-center"], [1, "news-container"], ["class", "news-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-controls", 4, "ngIf"], [1, "news-item", 3, "click"], [1, "pagination-controls"], [3, "click", "disabled"], [1, "news-details"], [3, "click"], ["class", "news-attachment", 4, "ngIf"], [1, "news-attachment"], ["download", "", 3, "href"]],
    template: function StockDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function StockDetailsComponent_Template_select_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.isin, $event) || (ctx.isin = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function StockDetailsComponent_Template_select_change_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onStockChange($event.target.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, StockDetailsComponent_option_10_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, StockDetailsComponent_div_11_Template, 71, 56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, StockDetailsComponent_div_13_Template, 2, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, StockDetailsComponent_div_15_Template, 41, 27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, StockDetailsComponent_ng_container_22_Template, 28, 22, "ng-container", 17)(23, StockDetailsComponent_ng_template_23_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18)(26, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, StockDetailsComponent_div_29_Template, 3, 2, "div", 19)(30, StockDetailsComponent_div_30_Template, 8, 6, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-bonus-assemblies", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const noDividends_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 16, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 18, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 20, "SelectStock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.isin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allStocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stockDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c0, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 22, "Dividends"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dividendsData && ctx.dividendsData.length > 0)("ngIfElse", noDividends_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 24, "News.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stockIsin", ctx.isin);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.BaseChartDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _bonus_assemblies_bonus_assemblies_component__WEBPACK_IMPORTED_MODULE_2__.BonusAssembliesComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  padding-top: 10%;\n  margin-top: 30px;\n  padding-bottom: 35%;\n}\n.jobs[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.jobs[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  cursor: pointer;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.info-chart-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  .info-chart-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 10px;\n}\n.chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n\n.details-section-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 10px;\n  height: 300px;\n  overflow: auto;\n}\n\n.details-section[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.details-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.bigger-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #000;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-news-container[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.info-news-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background-color: #fff;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: #f4f4f4;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 1.2em;\n  margin-bottom: 5px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  margin: 5px 0;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #cccccc;\n  cursor: not-allowed;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #555;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   .news-attachment[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   .news-attachment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   .news-attachment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n@media (max-width: 768px) {\n  .info-news-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%] {\n    padding-right: 0;\n    margin-bottom: 20px;\n  }\n  .info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .jobs-inner[_ngcontent-%COMP%] {\n    margin-top: 70%;\n  }\n}\n\n\n.loader[_ngcontent-%COMP%] {\n  width: 50px;\n  aspect-ratio: 1;\n  display: grid;\n  border-radius: 50%;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 0 70%, rgb(0, 0, 0) 0) 50%/8% 100%, linear-gradient(90deg, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0) 0 70%, rgba(0, 0, 0, 0.75) 0) 50%/100% 8%;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_l23 1s infinite steps(12);\n}\n\n.loader[_ngcontent-%COMP%]::before, .loader[_ngcontent-%COMP%]::after {\n  content: \"\";\n  grid-area: 1/1;\n  border-radius: 50%;\n  background: inherit;\n  opacity: 0.915;\n  transform: rotate(30deg);\n}\n\n.loader[_ngcontent-%COMP%]::after {\n  opacity: 0.83;\n  transform: rotate(60deg);\n}\n\n@keyframes _ngcontent-%COMP%_l23 {\n  100% {\n    transform: rotate(1turn);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay1kZXRhaWxzL3N0b2NrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkNEYztFREVkLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBRE47QUFLRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUhKO0FBS0k7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFITjtBQU1JO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBSk47QUFPSTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBUUk7RUFDRSxZQUFBO0FBTk47QUFTSTtFQUNFLFVBQUE7QUFQTjs7QUFZQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFURjtBQVdFO0VBTkY7SUFPSSxzQkFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFSSjs7QUFZQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVEY7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFURjs7QUFhRTtFQUNFLGlCQUFBO0FBVko7QUFZRTtFQUNFLGlCQUFBO0FBVko7QUFZRTtFQUNFLG1CQUFBO0FBVko7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBWEY7QUFhRTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFYTjtBQWFNO0VBQ0UsbUJBQUE7QUFYUjtBQWVRO0VBQ0UseUJBQUE7QUFiVjtBQWdCUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQWRWO0FBcUJFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBbkJOO0FBc0JJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBcEJOO0FBc0JNO0VBQ0UseUJBQUE7QUFwQlI7QUF1Qk07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXJCUjtBQXdCTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBdEJSO0FBeUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBdkJSO0FBeUJRO0VBQ0UseUJBQUE7QUF2QlY7QUE0Qkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBMUJOO0FBNEJNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUExQlI7QUE0QlE7RUFDRSx5QkFBQTtBQTFCVjtBQTZCUTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUEzQlY7QUErQk07RUFDRSxXQUFBO0FBN0JSO0FBa0NNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQWhDUjtBQWtDUTtFQUNFLHlCQUFBO0FBaENWO0FBb0NNO0VBQ0UsV0FBQTtBQWxDUjtBQXFDTTtFQUNFLFdBQUE7QUFuQ1I7QUFzQ007RUFDRSxnQkFBQTtBQXBDUjtBQXNDUTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFwQ1Y7QUFzQ1U7RUFDRSxjQUFBO0FBcENaO0FBMkNFO0VBeEpGO0lBeUpJLHNCQUFBO0VBeENGO0VBMENFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQXhDSjtFQTJDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQXpDSjtBQUNGOztBQTRDQTtFQUNFO0lBQ0UsZUFBQTtFQXpDRjtBQUNGO0FBNENBLHFDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlOQUNFO0VBRUYsNEJBQUE7RUFDQSxvQ0FBQTtBQTVDRjs7QUE4Q0E7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBM0NGOztBQTZDQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtBQTFDRjs7QUE0Q0E7RUFDRTtJQUFNLHdCQUFBO0VBeENOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmpvYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzUlO1xyXG5cclxuICAuZHJvcGRvd24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1kYW5nZXIge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8tY2hhcnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gIGNhbnZhcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0YWlscy1zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmRldGFpbHMtc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmRldGFpbHMtc2VjdGlvbiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5iaWdnZXItdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuaW5mby1uZXdzLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLm5ld3MtY29sdW1uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mby1uZXdzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxuICAuZGl2aWRlbmRzLWNvbHVtbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIFxyXG4gICAgLmRpdmlkZW5kcy10YWJsZS1jb250YWluZXIge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhYmxlIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQsIHRoIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uZXdzLWNvbHVtbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIC5uZXdzLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld3MtaXRlbSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1jb250cm9scyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uZXdzLWRldGFpbHMge1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uZXdzLWF0dGFjaG1lbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDU2YjM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIC5kaXZpZGVuZHMtY29sdW1uIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubmV3cy1jb2x1bW4ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5qb2JzLWlubmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEhUTUw6IDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj4gKi9cclxuLmxvYWRlciB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAxO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZyAscmdiKDAgMCAwLzUwJSkgMzAlLCMwMDAwIDAgNzAlLHJnYigwIDAgMC8xMDAlKSAwKSA1MCUvOCUgMTAwJSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2IoMCAwIDAvMjUlKSAzMCUsIzAwMDAgMCA3MCUscmdiKDAgMCAwLzc1JSApIDApIDUwJS8xMDAlIDglO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYW5pbWF0aW9uOiBsMjMgMXMgaW5maW5pdGUgc3RlcHMoMTIpO1xyXG59XHJcbi5sb2FkZXI6OmJlZm9yZSxcclxuLmxvYWRlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZ3JpZC1hcmVhOiAxLzE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgb3BhY2l0eTogMC45MTU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG59XHJcbi5sb2FkZXI6OmFmdGVyIHtcclxuICBvcGFjaXR5OiAwLjgzO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxufVxyXG5Aa2V5ZnJhbWVzIGwyMyB7XHJcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pfVxyXG59XHJcbiIsIlxyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNzE5NmU5O1xyXG4kR3JlZW5PbGQgICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiROYXZ5QmFjayA6ICMyNzQyNjQ7XHJcbiROYXZ5VGV4dCA6IHJnYig5LCA3MSwgMTEyKTtcclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IE9wZW4gU2FucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6616:
/*!******************************************************************!*\
  !*** ./src/app/components/stock-details/stock-details.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory),
/* harmony export */   StockDetailsModule: () => (/* binding */ StockDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _stock_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-details.component */ 9845);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _bonus_assemblies_bonus_assemblies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bonus-assemblies/bonus-assemblies.component */ 8825);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);













function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class StockDetailsModule {
  static #_ = this.ɵfac = function StockDetailsModule_Factory(t) {
    return new (t || StockDetailsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: StockDetailsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StockDetailsModule, {
    declarations: [_stock_details_component__WEBPACK_IMPORTED_MODULE_0__.StockDetailsComponent, _bonus_assemblies_bonus_assemblies_component__WEBPACK_IMPORTED_MODULE_1__.BonusAssembliesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.BaseChartDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule]
  });
})();

/***/ }),

/***/ 213:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 6711);


class AnalyticsService {
  constructor($gaService) {
    this.$gaService = $gaService;
  }
  sendAnalyticEvent(action, category, label) {
    this.$gaService.event(action, category, label);
  }
  sendAnalyticPageView(path, title) {
    this.$gaService.pageView(path, title);
  }
  static #_ = this.ɵfac = function AnalyticsService_Factory(t) {
    return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnalyticsService,
    factory: AnalyticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9961:
/*!***************************************************!*\
  !*** ./src/app/services/data/contract.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactService: () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ContactService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://www.pioneers-securities.com/webdataapi/api/Contact';
  }
  sendContactForm(contactData) {
    return this.http.post(this.apiUrl, contactData);
  }
  static #_ = this.ɵfac = function ContactService_Factory(t) {
    return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ContactService,
    factory: ContactService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7558:
/*!*********************************************************!*\
  !*** ./src/app/services/data/market-summary.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketSummaryService: () => (/* binding */ MarketSummaryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class MarketSummaryService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'https://www.pioneers-securities.com/webdataapi';
    this.language = localStorage.getItem("language") ?? "en";
  }
  getMarketSummary() {
    return this.http.get(`${this.baseUrl}/api/MarketSummaries`);
  }
  getMarketMoneyFlow() {
    return this.http.get(`${this.baseUrl}/api/MarketMoneyFlows`);
  }
  getEgxSummary() {
    return this.http.get(`${this.baseUrl}/api/EgxSummary`);
  }
  getInvestors() {
    return this.http.get(`${this.baseUrl}/api/investors`);
  }
  getEgx100(period) {
    return this.http.get(`${this.baseUrl}/api/EgxCharts/GetEgx100?period=${period}`);
  }
  getEgx70(period) {
    return this.http.get(`${this.baseUrl}/api/EgxCharts/GetEgx70?period=${period}`);
  }
  getEgx50(period) {
    return this.http.get(`${this.baseUrl}/api/EgxCharts/GetEgx50?period=${period}`);
  }
  getEgx30Cap(period) {
    return this.http.get(`${this.baseUrl}/api/EgxCharts/GetEgx30Cap?period=${period}`);
  }
  getEgx30(period) {
    return this.http.get(`${this.baseUrl}/api/EgxCharts/GetEgx30?period=${period}`);
  }
  getArabMarketIndicators() {
    return this.http.get(`${this.baseUrl}/api/MarketIndicators/GetArabMarketIndicators`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getInternationalMarketIndicators() {
    return this.http.get(`${this.baseUrl}/api/MarketIndicators/GetInternationalMarketIndicators`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getStocks() {
    return this.http.get(`${this.baseUrl}/api/StocksData`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getStocksGridData() {
    return this.http.get(`${this.baseUrl}/api/StocksData/GetGridData`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getStockDetails(isin) {
    return this.http.get(`${this.baseUrl}/api/StocksData/GetStockDetails/${isin}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getSectorsActivity(period) {
    return this.http.get(`${this.baseUrl}/api/Sectors/GetSectorsActivity?period=${period}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getCurrencies() {
    return this.http.get(`${this.baseUrl}/api/Currencies`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getStockFullDetails(isin) {
    return this.http.get(`${this.baseUrl}/api/StocksData/GetExternalStockData/${isin}?interval=3m`);
  }
  getStockDataInfo(isin) {
    return this.http.get(`${this.baseUrl}/api/StocksData/GetStockDataInfo/${isin}`);
  }
  getNewsForStock(isin) {
    return this.http.get(`${this.baseUrl}/api/News/GetNewsForStock/${isin}`);
  }
  getDividendsForStock(isin) {
    return this.http.get(`${this.baseUrl}/api/DividendsTables/GetDividendsForStock/${isin}`);
  }
  getGenAssembliesIsins() {
    return this.http.get(`${this.baseUrl}/api/GenAssembliesIsins`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getStockAssemblies(isin) {
    return this.http.get(`${this.baseUrl}/api/GenAssembliesIsins/GetAssembliesForStock/${isin}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getBonusShares() {
    return this.http.get(`${this.baseUrl}/api/BonusShares`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getStockBonusShares(isin) {
    return this.http.get(`${this.baseUrl}/api/BonusShares/GetBonusShareForStock/${isin}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getDividendsTables() {
    return this.http.get(`${this.baseUrl}/api/DividendsTables`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getInsiderTrading() {
    return this.http.get(`${this.baseUrl}/api/InsiderTradings`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getStockInsiderTrading(isin) {
    return this.http.get(`${this.baseUrl}/api/InsiderTradings/GetStockInsiderTradings/${isin}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getCompaniesFinancialStatements(isin) {
    return this.http.get(`${this.baseUrl}/api/CompaniesFinancialStatementsAnnualIsins/${isin}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getAuditReportsForStock(isin) {
    return this.http.get(`${this.baseUrl}/api/CompaniesAuditReports/${isin}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getAnnouncementsForStock(isin) {
    return this.http.get(`${this.baseUrl}/api/CompaniesAnnouncements/${isin}`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getAllAnnouncements() {
    return this.http.get(`${this.baseUrl}/api/CompaniesAnnouncements`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getAllAuditReports() {
    return this.http.get(`${this.baseUrl}/api/CompaniesAuditReports`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  getAllFinancialStatements() {
    return this.http.get(`${this.baseUrl}/api/CompaniesFinancialStatementsAnnualIsins`, {
      headers: {
        "accept-language": this.language
      }
    });
  }
  downloadFinancialStatementPdf(id) {
    return this.http.get(`${this.baseUrl}/api/CompaniesFinancialStatementsAnnualIsins/download/${id}`, {
      responseType: 'blob'
    });
  }
  downloadAuditReportPdf(id) {
    return this.http.get(`${this.baseUrl}/api/CompaniesAuditReports/${id}/download`, {
      responseType: 'blob'
    });
  }
  downloadAnnouncementPdf(id) {
    return this.http.get(`${this.baseUrl}/api/CompaniesAnnouncements/${id}/download`, {
      responseType: 'blob'
    });
  }
  static #_ = this.ɵfac = function MarketSummaryService_Factory(t) {
    return new (t || MarketSummaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MarketSummaryService,
    factory: MarketSummaryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 460:
/*!**********************************************************!*\
  !*** ./src/app/services/data/reports-service.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsService: () => (/* binding */ ReportsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ReportsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://www.pioneers-securities.com/webdataapi/api/reports';
    this.language = localStorage.getItem("language") ?? "en";
  }
  getReports(reportType) {
    return this.http.get(`${this.apiUrl}/${reportType}/${this.language}`);
  }
  downloadReportFile(fileName, reportType) {
    return this.http.get(`${this.apiUrl}/download/${reportType}/${this.language}/${fileName}`, {
      responseType: 'blob'
    });
  }
  static #_ = this.ɵfac = function ReportsService_Factory(t) {
    return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ReportsService,
    factory: ReportsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9263:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



class LanguageService {
  // language: "ar" | "en";
  constructor(translateService, location) {
    this.translateService = translateService;
    this.location = location;
  }
  initLanguage() {
    // this.translateService.addLangs(["en", "ar"])
    // let language = navigator.language || (navigator as any).userLanguage;
    // language = language.split("-").includes("ar") ? "ar" : "en"
    // this.translateService.setDefaultLang(language)
    let language = localStorage.getItem("language") ?? "en";
    this.translateService.setDefaultLang(language);
    // Change the URL without navigate:
    // this.location.go(language)
    // this.language=language
  }
  changeLanguage(language) {
    this.translateService.setDefaultLang(language);
    localStorage.setItem("language", language);
    // this.location.go(language)
    // this.language=language
  }
  static #_ = this.ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  trackAnalyticID: "G-4ML1VNCP9T",
  recaptchaSiteKey: '6Ldh3yUqAAAAALC4nc1qWsNOk7C6F4j8kql0SSEJ'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/// <reference types="@angular/localize" />




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map