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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_stock_details_stock_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stock-details/stock-details.component */ 9845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [
// Route for the home page without language parameter
{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  pathMatch: 'full'
},
// // Route for home page with optional language parameter
{
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'stock-details/:isin',
  component: _components_stock_details_stock_details_component__WEBPACK_IMPORTED_MODULE_1__.StockDetailsComponent
},
// // Routes with optional language parameter
// { path: ':language/proyectos', component: ArchiveComponent },
{
  path: 'tradingrules',
  component: _components_stock_details_stock_details_component__WEBPACK_IMPORTED_MODULE_1__.StockDetailsComponent
}
// Wildcard route
// { path: '**', redirectTo: '' }
];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 3908);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 2864);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _components_stock_details_stock_details_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stock-details/stock-details.module */ 6616);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 6970);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ 2423);
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
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _components_stock_details_stock_details_module__WEBPACK_IMPORTED_MODULE_5__.StockDetailsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOptionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule,
    // AnimateOnScrollModule.forRoot(),
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
    }),
    // NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
      }
    }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _components_stock_details_stock_details_module__WEBPACK_IMPORTED_MODULE_5__.StockDetailsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOptionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule,
    // AnimateOnScrollModule.forRoot(),
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule]
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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);



class FooterComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 60,
    vars: 1,
    consts: [[1, "footer-left-bar", "d-none", "d-md-block"], ["href", "https://www.facebook.com/PioneersSecurities", "target", "_blank", 3, "click"], [1, "fab", "fa-facebook"], ["href", "https://x.com/PioSec/", "target", "_blank", 3, "click"], [1, "fab", "fa-twitter"], ["href", "https://whatsapp.com/channel/0029Va21eln1iUxR3gxiq01l", "target", "_blank", 3, "click"], [1, "fab", "fa-whatsapp"], ["href", "https://t.me/+qj0TIQiOvihmM2E0", "target", "_blank", 3, "click"], [1, "fab", "fa-telegram"], ["href", "https://www.instagram.com/pioneers.securities/?fbclid=IwY2xjawEm09xleHRuA2FlbQIxMAABHTD61PWK2qLYhVCqnQTcutViJueRMdRaOLmd2bBDA4FFL8xEab7U3KAtYg_aem_q-a2x3RxJVaCu_SEle33GQ", "target", "_blank", 3, "click"], [1, "fab", "fa-instagram"], ["href", "https://open.spotify.com/show/4bScgs3LywR2KFj4lotZ3S?si=47dc17ad801f4905", "target", "_blank", 3, "click"], [1, "fab", "fa-spotify"], ["href", "https://www.tiktok.com/@pioneerssecurities?fbclid=IwY2xjawEm075leHRuA2FlbQIxMAABHX3TWgKXNCzjyxf1W7YBbEwPAFexw1ltgjYuOwqXAcXI9wW7PpJqa2D7rg_aem_3fIWGQsik_WQOyU17yj9tg", "target", "_blank", 3, "click"], [1, "fab", "fa-tiktok"], ["href", "https://www.linkedin.com/company/pioneerssecurities/", "target", "_blank", 3, "click"], [1, "fab", "fa-linkedin-in"], [1, "footer-right-bar", "d-none", "d-md-block"], ["href", "mailto:helpdesk@pioneers-securities.com", "target", "_blank", 3, "click"], [1, "footer-icons"], [1, "footer-credits", "text-center"], ["href", "https://www.linkedin.com/company/pioneerssecurities/", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div")(2, "ul", 0)(3, "li")(4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "facebook");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "x");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "whatsapp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "telegram");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_16_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "whatsapp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_19_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "whatsapp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_22_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "tiktok");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_25_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_linkedin", "footer", "github");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17)(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_28_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "footer", "email");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "helpdesk@pioneers-securities.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19)(31, "ul")(32, "li")(33, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_33_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "facebook");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_36_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "x");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_39_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "whatsapp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_42_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "telegram");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_45_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "whatsapp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_48_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "whatsapp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_51_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "tiktok");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_54_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_linkedin", "footer", "github");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 20)(57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_57_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_andresjose", "footer", "click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Built by Pioneers Securities software team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateFooter", undefined);
      }
    },
    styles: ["\n\nfooter[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #40af95;\n}\nfooter[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  background-color: #e6e9ee;\n  display: flex;\n  justify-content: center;\n}\nfooter[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin: 10px;\n}\nfooter[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\n\n@media (min-width: 991px) {\n  .footer-icons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNJLGNER1k7QUNIaEI7QUFFSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJETFE7QUNLaEI7QUFHSTtFQUNJLGdCQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFGUjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGNEcEJJO0FDa0JoQjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQUtZO0VBQ0ksbUJBQUE7QUFIaEI7QUFRSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFOUjtBQVFRO0VBQ0ksd0JBQUE7QUFOWjtBQVNRO0VBQ0ksMEZEcENEO0VDcUNDLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0R0REk7QUMrQ2hCO0FBVUk7RUFDSSwwRkRuREc7RUNvREgsZUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBVFI7QUFhUTtFQUNJLGNEdkVJO0VDeUVKLDBEQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdFQUFBO0VBQ0Esb0JBQUE7QUFYWjtBQWFZO0VBQ0kscUJBQUE7RUFDQSxjRDlFQTtBQ21FaEI7QUFlRTtFQUNFLG9CQUFBO0VBQ0EseUJEM0ZZO0VDNEZaLGFBQUE7RUFDQSx1QkFBQTtBQWJKO0FBY0k7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFaTjtBQWFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFYUjtBQWNJO0VBQ0UsZUFBQTtFQUNBLGNEcEdVO0FDd0ZoQjs7QUFnQkE7RUFDRTtJQUNFLHdCQUFBO0VBYkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5mb290ZXJ7XHJcbiAgICBjb2xvcjogJExpZ2h0U2xhdGU7XHJcblxyXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciwgLmZvb3Rlci1yaWdodC1iYXI6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0U2xhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1sZWZ0LWJhciBsaSwgLmZvb3Rlci1yaWdodC1iYXIgbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWxlZnQtYmFye1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IC0xNnB4O1xyXG4gICAgICAgIGxlZnQ6IDUxcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJExpZ2h0U2xhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1yaWdodC1iYXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAtbW96LWxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICAgICAgICAgIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb290ZXItY3JlZGl0c3tcclxuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG5cclxuXHJcblxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAuZm9vdGVyLWljb25zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAuZm9vdGVyLWljb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("animateFooter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
        transform: "translateY(100%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.component */ 540);
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
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule],
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













const _c0 = (a0, a1) => ({
  "green": a0,
  "red": a1
});
const _c1 = a0 => ({
  "pointer-events": a0
});
const _c2 = a0 => ({
  "color": a0
});
function HeaderComponent_div_22_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_22_li_2_Template_li_click_0_listener() {
      const stock_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onSelectStock(stock_r3.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r3.englishName, " ");
  }
}
function HeaderComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HeaderComponent_div_22_li_2_Template, 2, 1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.filteredStocks.slice(0, 10));
  }
}
function HeaderComponent_ng_container_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r5.englishName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", stock_r5.open, " ", stock_r5.close, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, stock_r5.change >= 0 ? "green" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stock_r5.change, "% ");
  }
}
function HeaderComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HeaderComponent_ng_container_25_span_1_Template, 7, 7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.stockNews);
  }
}
function HeaderComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "No news available");
  }
}
function HeaderComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "First content");
  }
}
function HeaderComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "First content");
  }
}
function HeaderComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "First content");
  }
}
function HeaderComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_img_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 40);
  }
}
function HeaderComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 36);
  }
}
function HeaderComponent_img_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 35);
  }
}
function HeaderComponent_span_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 36);
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
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl();
    this.cvName = "";
    this.currentDate = new Date();
    this.isMarketOpen = false;
    this.searchQuery = '';
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
    }, 1000);
  }
  checkMarketStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    this.isMarketOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 14 || day >= 1 && day <= 5 && hour == 14 && minutes <= 30;
  }
  navigateTo(destination) {
    switch (destination) {
      case 'eTrade':
        window.open('https://www.pioneers-securities.com/Etrade/', '_blank');
        break;
      case 'ultimateTrade':
        window.open('https://www.pioneers-securities.com/Etrade/', '_blank');
        break;
      case 'openAccount':
        window.open('https://ultimate.pioneers-securities.com/Ultimate/Account/Login', '_blank');
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
    decls: 160,
    vars: 99,
    consts: [["noNews", ""], ["nav", "ngbNav"], [1, "navbar", "main-navbar", "on-top"], [1, "status-bar", 3, "dir"], [1, "status-content"], [1, "datetime"], [1, "indicator", 3, "ngClass"], [1, "link-button", 3, "click"], [1, "open-account-button", 3, "click"], [1, "search-container"], ["type", "text", 3, "placeholder", "formControl"], [1, "search-icon-button", 3, "click"], ["src", "assets/icons/search.svg", "alt", "Search"], ["class", "search-results", 4, "ngIf"], [1, "ticker-bar"], [4, "ngIf", "ngIfElse"], [1, "container", 3, "dir"], [1, "navbar-brand", "text-light", 3, "routerLink"], ["src", "assets/images/pioLogo.png", "width", "25"], [1, "nav-center-wrapper"], ["ngbNav", "", 1, "menu-ul"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownForm1", "ngbDropdownToggle", "", 1, "language-container", "language-container-full-nav"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English", 4, "ngIf"], ["class", "flag-text", 4, "ngIf"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/eg-flag.gif", "alt", "Arabic", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "arrow-language"], ["d", "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1"], [1, "language-container", "language-container-selector", "active", 2, "border-bottom-left-radius", "0px !important", "border-bottom-right-radius", "0px !important", 3, "click"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/eg-flag.gif", "alt", "Arabic"], [1, "flag-text"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-check2", "arrow-active"], ["d", "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"], [1, "language-container", "language-container-selector", 2, "margin-top", "1px !important", "border-top-left-radius", "0px !important", "border-top-right-radius", "0px !important", 3, "click"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click"], [1, "language-container"], ["src", "https://www.worldometers.info/img/flags/eg-flag.gif", "alt", "Arabic"], [1, "flag-text", 2, "direction", "rtl"], ["src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English"], [1, "search-results"], [3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [2, "color", "#000"], [3, "ngStyle"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 2)(1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigateTo("eTrade"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigateTo("ultimateTrade"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigateTo("openAccount"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.search());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, HeaderComponent_div_22_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14)(24, "marquee");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, HeaderComponent_ng_container_25_Template, 2, 1, "ng-container", 15)(26, HeaderComponent_ng_template_26_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19)(33, "ul", 20, 1)(35, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("banner"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, HeaderComponent_ng_template_41_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("news"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, HeaderComponent_ng_template_48_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("trading-rules"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, HeaderComponent_ng_template_55_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_56_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_57_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("agenda"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, HeaderComponent_ng_template_62_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_63_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_64_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("market-statistics"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, HeaderComponent_ng_template_69_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_70_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_71_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("market-watch"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, HeaderComponent_ng_template_76_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_77_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_78_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("contact-us"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, HeaderComponent_ng_template_83_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 26)(85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, HeaderComponent_img_86_Template, 1, 0, "img", 28)(87, HeaderComponent_span_87_Template, 1, 0, "span", 29)(88, HeaderComponent_img_88_Template, 1, 0, "img", 30)(89, HeaderComponent_span_89_Template, 1, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 33)(93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_93_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.changeLanguage("ar"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_99_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.changeLanguage("en"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 41)(106, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_106_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 43)(108, "aside", 44)(109, "nav")(110, "ol")(111, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_111_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_112_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("banner"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_116_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_117_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("market-statistics"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_121_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_122_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("news"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_126_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_127_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("market-watch"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_131_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_132_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("trading-rules"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_136_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_137_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("agenda"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_141_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_142_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scroll("contact-us"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "li")(147, "div", 46)(148, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_148_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.changeLanguage("ar"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_154_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.changeLanguage("en"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        const noNews_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 51, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 53, ctx.currentDate, "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](94, _c0, ctx.isMarketOpen, !ctx.isMarketOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 56, "eTrade"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 58, "ultimateTrade"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 60, "openAccount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 62, "search"), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredStocks.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("direction", ctx.languageFormControl.value === "ar" ? "right" : "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stockNews.length > 0)("ngIfElse", noNews_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 64, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 66, "Header.Item1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 68, "Header.Item3"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 70, "Header.Item4"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 72, "Header.Item7"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 74, "Header.Item5"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 76, "Header.Item2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](82, 78, "Header.Item6"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](97, _c1, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](115, 80, "Header.Item1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](120, 82, "Header.Item5"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](125, 84, "Header.Item3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](130, 86, "Header.Item2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](135, 88, "Header.Item4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](140, 90, "Header.Item7"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](145, 92, "Header.Item6"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "en");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLinkBase, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n  padding-right: 40px;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin-left: -35px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background-color: white;\n  border: 1px solid #ccc;\n  z-index: 1000;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  color: #000;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.main-navbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir(ltr) {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n\n.main-navbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir(rtl) {\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  font-weight: 800;\n}\n\n.main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #e6e9ee;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #e6e9ee;\n  height: 100%;\n  position: relative;\n  right: -753px;\n  margin-left: auto;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #0d0e12;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #40af95;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 15px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #40af95;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #40af95;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #0d0e12 !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  display: block;\n  width: 36px;\n  height: 1.5px;\n  background: #40af95;\n  transition: all 0.15s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: #40af95;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  bottom: 8px;\n  transition: bottom 0.05s 0.05s ease-in-out, transform 0.05s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  top: 8px;\n  transition: top 0.05s 0.05s ease-in-out, transform 0.05s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 0.05s ease-in-out, transform 0.05s 0.05s ease-in-out;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 0.05s ease-in-out, transform 0.05s 0.05s ease-in-out;\n}\n\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 120px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 130px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n}\n@media (max-width: 991px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .language-container-full-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 991px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n\n  .dropdown-toggle::after {\n  display: none;\n}\n\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n\n.status-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #e6e6e6;\n  padding: 10px 0;\n  text-align: center;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 10px;\n  color: #000;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .open-account-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #303C55;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%]:hover, .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .open-account-button[_ngcontent-%COMP%]:hover {\n  color: #ff4500;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 200px;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #021016;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  border: none;\n  background-color: #112240;\n  color: white;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]:hover {\n  background-color: #030f16;\n}\n\n@media (max-width: 768px) {\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .open-account-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n    flex: 3 6 20%;\n    text-align: center;\n  }\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n    flex: 3 6 2%;\n    text-align: center;\n    width: 1px;\n    height: 25px;\n    border-radius: 100%;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n}\n@media (max-width: 500px) {\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .open-account-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%], .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n    flex: 3 6 20%;\n    text-align: center;\n  }\n  .status-bar[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n    flex: 3 6 2%;\n    text-align: center;\n    width: 1px;\n    height: 25px;\n    border-radius: 100%;\n  }\n  .nav-shadow[_ngcontent-%COMP%] {\n    height: 235px;\n  }\n}\n.news-ticker[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #0d0e12;\n  color: #40af95;\n  padding: 5px 0;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  border-top: 1px solid #40af95;\n}\n.news-ticker[_ngcontent-%COMP%]   marquee[_ngcontent-%COMP%] {\n  color: #0d0e12;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRE47QUFHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRFI7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFITjtBQUtNO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFIUjtBQUtRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBSFY7QUFLVTtFQUNFLHlCQUFBO0FBSFo7O0FBWUE7RUFDRSwwRkRuRFM7QUMwQ1g7O0FBV0E7RUFDRSxtSkR2RFM7RUN3RFQsZ0JBQUE7QUFSRjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxtQkR0RVk7QUMrRGhCO0FBVU07RUFDRSxnQkFBQTtBQVJSO0FBV007RUFDRSxnQkFBQTtBQVRSO0FBV007RUFDRSxpQkFBQTtBQVRSO0FBYUk7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtBQVhSO0FBYVU7RUFDRSx3QkFBQTtBQVhaO0FBYVU7RUFDRSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsaUJBQUE7QUFYWjtBQWFVO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBWFo7QUFhVTtFQUNFLGFBQUE7QUFYWjtBQVlZO0VBQ0UsV0FBQTtBQVZkO0FBZ0JJO0VBQ0ksNkRBQUE7RUFDQSxVQUFBO0FBZFI7QUFnQkk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCRHJJUTtFQ3NJUixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwRkQvSEc7RUNnSUgscURBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUFkUjtBQWVRO0VBQ0ksYUFBQTtFQUVBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNEbEpJO0FDcUloQjtBQWNZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFaaEI7QUFhZ0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFYcEI7QUFZb0I7RUFDSSxjQUFBO0VBQ0EsY0QzSlI7RUM0SlEsZUFBQTtFQUNBLGtCQUFBO0FBVnhCO0FBWW9CO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7QUFWeEI7QUFnQkk7RUFDRSw0QkFBQTtBQWROO0FBZ0JJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFkUjtBQWVRO0VBQ0ksY0R2TEk7QUMwS2hCO0FBZ0JJO0VBQ0ksY0QzTFE7RUM0TFIsZUFBQTtBQWRSO0FBZ0JJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWROO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBZE47QUFnQk07OztFQUdFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CRC9NUTtFQ2dOUixpQ0FBQTtBQWRSO0FBaUJNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFmUjtBQWlCUTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxtQkQ3Tk07QUM2TWhCO0FBbUJRO0VBQ0UsV0FBQTtFQUNBLHVFQUFBO0FBakJWO0FBb0JRO0VBQ0UsUUFBQTtFQUNBLG9FQUFBO0FBbEJWO0FBcUJRO0VBQ0UsdUJBQUE7QUFuQlY7QUFvQlU7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx1RUFBQTtBQWxCWjtBQW9CVTtFQUNFLE1BQUE7RUFDQSx3QkFBQTtFQUNBLG9FQUFBO0FBbEJaOztBQTJCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksYUFBQTtFQUNBLGtEQUFBO0VBQ0EsNkRBQUE7QUF4Qko7O0FBMkJBO0VBRVE7SUFDSSxTQUFBO0lBQ0Esc0JBQUE7RUF6QlY7RUE0QkU7SUFDSSxhQUFBO0VBMUJOO0FBQ0Y7QUE2QkE7RUFDSTtJQUNJLGFBQUE7RUEzQk47RUE2QkU7SUFDSSxhQUFBO0VBM0JOO0VBNkJFO0lBQ0UsYUFBQTtFQTNCSjtBQUNGO0FBOEJBO0VBQ0k7O0lBRUksYUFBQTtFQTVCTjtFQThCRTtJQUNJLGFBQUE7RUE1Qk47QUFDRjtBQStCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBGRDlTTztBQ2lSWDs7QUFnQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTdCSjs7QUFnQ0E7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBN0JKOztBQWdDQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUE3Qko7O0FBZ0NBO0VBQ0ksOEJBQUE7QUE3Qko7O0FBNENBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxhQUFBO0FBekNKOztBQTRDQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrREFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7O0FBNkNJO0VBQ0ksbUJBQUE7QUExQ1I7O0FBNkNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUExQ0o7QUE0Q0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSwwRkR0WUs7QUM0Vlg7QUE0Q007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBMUNSO0FBNkNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTNDUjtBQTZDUTtFQUNFLHVCQUFBO0FBM0NWO0FBOENRO0VBQ0UscUJBQUE7QUE1Q1Y7QUFnRE07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjRHhhUTtFQ3lhUixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBOUNSO0FBZ0RRO0VBQ0UsY0FBQTtBQTlDVjtBQWtETTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFoRFI7QUFrRFE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFoRFY7QUFvRE07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJEcGNRO0VDcWNSLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFsRFI7QUFvRFE7RUFDRSx5QkFBQTtBQWxEVjs7QUF3REU7RUFDRTtJQUNFLGVBQUE7SUFDQSxTQUFBO0VBckRKO0VBdURJO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VBckROO0VBdURJO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQXJETjtFQTJERTtJQUNJLGFBQUE7RUF6RE47QUFDRjtBQTJERTtFQUVFO0lBQ0UsZUFBQTtJQUNBLFNBQUE7RUExREo7RUE0REk7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUExRE47RUE0REk7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBMUROO0VBZ0VFO0lBQ0ksYUFBQTtFQTlETjtBQUNGO0FBa0VFO0VBQ0UsV0FBQTtFQUNBLG1CRGpnQlk7RUNrZ0JaLGNEaGdCWTtFQ2lnQlosY0FBQTtFQUNBLDBGRDlmTztFQytmUCw2QkFBQTtBQWhFSjtBQWtFSTtFQUNFLGNEeGdCVTtBQ3djaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM0MGFmOTU7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7IFxyXG4gICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7IFxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtaWNvbi1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDsgXHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlOyBcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICB6LWluZGV4OiAxMDAwOyBcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IFxyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWFpbi1uYXZiYXIgOmRpcihsdHIpe1xyXG4gIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbn1cclxuLm1haW4tbmF2YmFyIDpkaXIocnRsKXtcclxuICBmb250LWZhbWlseTogJE1haW5Gb250O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDBcclxufVxyXG4ubWFpbi1uYXZiYXIge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogJE5hdnk7XHJcbiAgICBcclxuICAgIC5tZW51LXVse1xyXG4gICAgICBsaXtcclxuICAgICAgICBtYXJnaW46IDBweCAxM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBsaTpmaXJzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAubWVudS1yZXNwb25zaXZlIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgb3V0bGluZTogMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICBhe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3YtYnRue1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGFuZ3VhZ2UtY29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3J7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXNpZGUtc2hvdyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgYXNpZGUge1xyXG4gICAgICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IC03NTNweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMiwgMTIsIDI3LCAwLjcpIC0xMHB4IDBweCAzMHB4IC0xNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuICAgICAgICAgICAgb2wge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDIwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3YtYnRue1xyXG4gICAgICBwYWRkaW5nOiA3cHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LW51bWJlciB7XHJcbiAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubmF2LXRleHR7XHJcbiAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB6LWluZGV4OiAxMTtcclxuICAgIFxyXG4gICAgICAuaGFtYnVyZ2VyLW1lbnUsXHJcbiAgICAgIC5oYW1idXJnZXItbWVudTphZnRlcixcclxuICAgICAgLmhhbWJ1cmdlci1tZW51OmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkR3JlZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0OyBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5oYW1idXJnZXItbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIFxyXG4gICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkR3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNXMgMC4wNXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjA1cyBlYXNlLWluLW91dDsgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA1cyAwLjA1cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuMDVzIGVhc2UtaW4tb3V0OyBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAmLmFuaW1hdGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDVzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMC4wNXMgMC4wNXMgZWFzZS1pbi1vdXQ7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjA1cyAwLjA1cyBlYXNlLWluLW91dDsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4ub24tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG59XHJcblxyXG4ubmF2LXNoYWRvdyB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTEwcHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAubWFpbi1uYXZiYXIge1xyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gLjdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdi1zaGFkb3cge1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgbmF2IC5uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9IFxyXG4gICAgLm5hdi1zaGFkb3cge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICAubGFuZ3VhZ2UtY29udGFpbmVyLWZ1bGwtbmF2IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm1lbnUtd3JhcHBlcixcclxuICAgIC5tZW51LXJlc3BvbnNpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2LXNoYWRvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZsYWctdGV4dCB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICMxNzJhNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3Ige1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMwYTE5MmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlOmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzU4ZTJjNDtcclxuLy8gICAgIHdpZHRoOiA2MSU7XHJcbi8vICAgICBoZWlnaHQ6IDFweDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4vLyB9XHJcbi5hcnJvdy1sYW5ndWFnZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGZpbGw6ICM2NGZmZGE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2Q2ZjYgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYigyIDEyIDI3IC8gNzAlKTtcclxufVxyXG5cclxuLmFycm93LWFjdGl2ZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGZpbGw6ICM2NGZmZGE7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlIHtcclxuICAgIC5hcnJvdy1hY3RpdmUge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcbiAgICB9XHJcbn1cclxuLnN0YXR1cy1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIC5zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBnYXA6IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgXHJcbiAgICAgIC5kYXRldGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgXHJcbiAgICAgICAgJi5ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJi5yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubGluay1idXR0b24sIC5vcGVuLWFjY291bnQtYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogJExpZ2h0ZXN0TmF2eTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5zZWFyY2gtYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICBcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMjEwMTY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5zZWFyY2gtYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwZjE2O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zdGF0dXMtYmFyIC5zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICAuZGF0ZXRpbWUsICAubGluay1idXR0b24sIC5vcGVuLWFjY291bnQtYnV0dG9uLCAuc2VhcmNoLWJhciwgLnNlYXJjaC1idXR0b24sIC5zZWFyY2gtYmFyIHtcclxuICAgICAgICBmbGV4OiAzIDYgMjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaW5kaWNhdG9ye1xyXG4gICAgICAgIGZsZXg6IDMgNiAyJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAubmF2LXNoYWRvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBcclxuICAgIC5zdGF0dXMtYmFyIC5zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gIFxyXG4gICAgICAuZGF0ZXRpbWUsICAubGluay1idXR0b24sIC5vcGVuLWFjY291bnQtYnV0dG9uLCAuc2VhcmNoLWJhciwgLnNlYXJjaC1idXR0b24sIC5zZWFyY2gtYmFyIHtcclxuICAgICAgICBmbGV4OiAzIDYgMjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaW5kaWNhdG9ye1xyXG4gICAgICAgIGZsZXg6IDMgNiAyJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAubmF2LXNoYWRvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMzVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm5ld3MtdGlja2VyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgICBjb2xvcjogJEdyZWVuO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRHcmVlbjtcclxuICBcclxuICAgIG1hcnF1ZWUge1xyXG4gICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);




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
    decls: 41,
    vars: 39,
    consts: [[1, "empty-space"], [1, "jobs", 3, "dir"], [1, "container"], [1, "jobs-inner"], [1, "row", "mx-2"], [1, "col-md-6"], [1, "img-fluid", 3, "src", "alt"], [1, "row", "mt-4", "mx-2"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7)(18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5)(23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7)(30, "div", 5)(31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 13, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 15, "WhoWeAre.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 17, "WhoWeAre.Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 19, "WhoWeAre.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 21, "WhoWeAre.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 23, "Mission.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 25, "Mission.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 27, "Mission.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 29, "Mission.Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 31, "Vision.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 33, "Vision.Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 35, "Vision.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 37, "Vision.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.about-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #303C55;\n  font-family: \"Times New Roman\", Times, serif;\n}\n.about-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n.about-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #112240;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  height: 100px;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDSSx5QkREWTtBQ0NoQjtBQUVJO0VBQ0ksc0JBQUE7QUFBUjs7QUFNSTtFQUNJLGNEVFE7RUNVUiw0Q0FBQTtBQUhSO0FBS0k7RUFDSSxXQUFBO0FBSFI7QUFLSTtFQUNJLGNEakJRO0FDY2hCOztBQU1BO0VBQ0ksV0FBQTtBQUhKOztBQU1BO0VBQ0kseUJEMUJZO0VDMkJaLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5qb2JzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gICAgXHJcbiAgICAuam9icy1pbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmFib3V0LWRldGFpbHMge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiAkTGlnaHRlc3ROYXZ5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9IFxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICB9XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbXB0eS1zcGFjZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgICBwYWRkaW5nOiAwOyBcclxufVxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "table", 11)(3, "thead")(4, "tr")(5, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdditionalTablesComponent_div_20_tr_18_Template, 9, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pagination-controls", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assembly_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r5.genIsinName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assembly_r5.genIsinDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "table", 11)(3, "thead")(4, "tr")(5, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AdditionalTablesComponent_div_21_tr_21_Template, 11, 5, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "pagination-controls", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 16, ctx_r2.genAssemblies, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c1, ctx_r2.genAssembliesPageSize, ctx_r2.genAssembliesPage)));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "table", 11)(3, "thead")(4, "tr")(5, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AdditionalTablesComponent_div_22_tr_27_Template, 15, 7, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "pagination-controls", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 22, ctx_r2.dividends, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](25, _c1, ctx_r2.dividendsPageSize, ctx_r2.dividendsPage)));
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
      this.genAssemblies = data;
    });
  }
  loadBonusShares() {
    this.marketSummaryService.getBonusShares().subscribe(data => {
      this.bonusShares = data;
    });
  }
  changeSummary(type) {
    this.currentSummary = type;
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
  static #_ = this.ɵfac = function AdditionalTablesComponent_Factory(t) {
    return new (t || AdditionalTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AdditionalTablesComponent,
    selectors: [["app-additional-tables"]],
    decls: 23,
    vars: 30,
    consts: [["id", "agenda"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner"], [1, "summary-tabs", "mx-2"], [1, "btn", "btn-light", 3, "click", "ngClass"], ["class", "summary-details mx-2 my-2", 4, "ngIf"], [1, "summary-details", "mx-2", "my-2"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [3, "pageChange"]],
    template: function AdditionalTablesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["\n\n.market-summary-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #e6e9ee;\n  color: white;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: -5%;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n\n.market-type-filter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100px;\n  max-width: 100%;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2FkZGl0aW9uYWwtdGFibGVzL2FkZGl0aW9uYWwtdGFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDRSxhQUFBO0VBQ0EseUJERmM7RUNHZCxZQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQUtJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTU07RUFDRSx5QkQ1QlE7QUN3QmhCO0FBT007RUFFRSx1QkFBQTtFQUNBLFlBQUE7QUFOUjtBQVNNO0VBQ0UsWUFBQTtBQVBSO0FBVU07RUFDRSxVQUFBO0FBUlI7QUFhRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNFLFdBQUE7QUFYTjtBQWdCSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQWROO0FBZ0JNO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBZFI7QUFpQk07RUFDRSx5QkRwRVE7QUNxRGhCO0FBa0JNO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBaEJSO0FBbUJNO0VBQ0UsWUFBQTtBQWpCUjtBQW9CTTtFQUNFLFVBQUE7QUFsQlI7O0FBd0JBO0VBQ0UseUJEekZjO0FDb0VoQjtBQXVCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFyQko7O0FBd0JBO0VBQ0UsV0FBQTtBQXJCRjs7QUF3QkE7RUFDRSx5QkRwR2M7RUNxR2QsWUFBQTtBQXJCRjs7QUF3QkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQXJCSjs7QUF5QkU7RUFDRSxpQkFBQTtBQXRCSjtBQXdCRTtFQUNFLGlCQUFBO0FBdEJKOztBQTBCQTtFQUNFLGtCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtCQUFBO0FBdkJGIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tYXJrZXQtc3VtbWFyeS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAuc3VtbWFyeS10YWJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnktZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LXN1Y2Nlc3Mge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFya2V0LXRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFya2V0LXRhYmxlIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1kYW5nZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5qb2JzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICAvLyBwYWRkaW5nLXRvcDogMSU7XHJcbiAgLmpvYnMtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC01JTtcclxuICB9XHJcbn1cclxuLnN1bW1hcnktdGFicyAuYnRuIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnN1bW1hcnktdGFicyAuYnRuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hcmtldC10eXBlLWZpbHRlciB7XHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxuICAgIG1heC13aWR0aDogMTAwJTsgXHJcbiAgfVxyXG59XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5zdW1tYXJ5LXRhYnN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLnN1bW1hcnktZGV0YWlsc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxudHIgdGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudHIgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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




function BannerComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
}
function BannerComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
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
    decls: 11,
    vars: 2,
    consts: [["id", "banner", 1, "section", "banner"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container-fluid", "p-0"], [1, "row", "no-gutters", "position-relative"], [1, "col-12", "position-relative", "photos-container"], ["src", "assets/images/banner_ar.png", "class", "img-fluid w-100 container empty-space", "alt", "First Photo", 4, "ngIf"], ["src", "assets/images/banner_en.png", "class", "img-fluid w-100 container empty-space", "alt", "First Photo", 4, "ngIf"], [1, "clickable-photo-container"], ["href", "https://apps.apple.com/tc/app/pioneers-egypt/id1196384460", 1, "clickable-photo", "mb-2"], ["src", "assets/images/AppStore.png", "alt", "App Store", 1, "clickable-photo-img"], ["href", "https://play.google.com/store/apps/details?id=tea.mobile.view.pioneersApp&hl=en_US", 1, "clickable-photo", "mb-2"], ["src", "assets/images/GooglePlay.png", "alt", "Google Play", 1, "clickable-photo-img"], ["src", "assets/images/banner_ar.png", "alt", "First Photo", 1, "img-fluid", "w-100", "container", "empty-space"], ["src", "assets/images/banner_en.png", "alt", "First Photo", 1, "img-fluid", "w-100", "container", "empty-space"]],
    template: function BannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BannerComponent_img_4_Template, 1, 0, "img", 4)(5, BannerComponent_img_5_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.language == "en");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".home-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  \n}\n\n.trade-text[_ngcontent-%COMP%] {\n  font-size: 2.5rem; \n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n}\n.photos-container[_ngcontent-%COMP%]{\n  margin-bottom: 20px;\n}\n.empty-space[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n\n.trade-text[_ngcontent-%COMP%]:hover {\n  color: brown; \n}\n\n.banner[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block; \n}\n\n.clickable-photo-container[_ngcontent-%COMP%] {\n  position: absolute; \n  bottom: 20px; \n  left: 58%; \n  z-index: 5; \n  display: flex;\n  flex-direction: column;\n}\n\n.clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #112240;\n  width: 150px; \n  height: auto;\n  \n\n}\n\n@media (max-width: 768px) {\n  .clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px; \n  }\n  .empty-space[_ngcontent-%COMP%]{\n    margin-top: 250px;\n  }\n  \n}\n@media (max-width: 827px) {\n  .empty-space[_ngcontent-%COMP%]{\n    margin-top: 250px;\n  }\n  \n}\n@media (max-width: 1000px) {\n  .empty-space[_ngcontent-%COMP%]{\n    margin-top: 230px;\n  }\n}\n@media (max-width: 576px) {\n  .clickable-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px; \n  }\n  .empty-space[_ngcontent-%COMP%]{\n    margin-top: 250px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQzs7QUFFbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgXHJcbn1cclxuXHJcbi50cmFkZS10ZXh0IHtcclxuICBmb250LXNpemU6IDIuNXJlbTsgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucGhvdG9zLWNvbnRhaW5lcntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5lbXB0eS1zcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLnRyYWRlLXRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiBicm93bjsgXHJcbn1cclxuXHJcbi5iYW5uZXIgLnJvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFubmVyIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7IFxyXG59XHJcblxyXG4uY2xpY2thYmxlLXBob3RvLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBib3R0b206IDIwcHg7IFxyXG4gIGxlZnQ6IDU4JTsgXHJcbiAgei1pbmRleDogNTsgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2xpY2thYmxlLXBob3RvIGltZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjI0MDtcclxuICB3aWR0aDogMTUwcHg7IFxyXG4gIGhlaWdodDogYXV0bztcclxuICAvKiBtaW4td2lkdGg6IDEwMHB4OyAgKi9cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNsaWNrYWJsZS1waG90byBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxuICB9XHJcbiAgLmVtcHR5LXNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjdweCkge1xyXG4gIC5lbXB0eS1zcGFjZXtcclxuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xyXG4gIH1cclxuICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmVtcHR5LXNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMjMwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5jbGlja2FibGUtcGhvdG8gaW1nIHtcclxuICAgIHdpZHRoOiA2MHB4OyBcclxuICB9XHJcbiAgLmVtcHR5LXNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r1.key);
  }
}
function ContactUsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", city_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](city_r2);
  }
}
function ContactUsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ContactUs.RequiredField"), " ");
  }
}
function ContactUsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r2.message));
  }
}
class ContactUsComponent {
  constructor(router, analyticsService, contactService, fb) {
    this.router = router;
    this.analyticsService = analyticsService;
    this.contactService = contactService;
    this.fb = fb;
    this.cities = {
      'Egypt': ['Cairo', 'Alexandria', 'Giza', '...'],
      'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca', '...']
    };
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
    this.language = localStorage.getItem("Language");
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
    decls: 83,
    vars: 62,
    consts: [["id", "contact-us", 1, "section", "contact-us", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "section-box"], [1, "section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "row"], [1, "col-lg-6"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-12"], ["matInput", "", "formControlName", "name", "type", "text", 1, "form", "form-control", "mb-2", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "message", "rows", "12", 1, "form", "form-control", "mb-2", 3, "placeholder"], [1, "col-md-6"], ["matInput", "", "formControlName", "email", "type", "text", 1, "form", "form-control", "mb-2", 3, "placeholder"], ["matInput", "", "formControlName", "phone", "type", "text", 1, "form", "form-control", "mb-2", 3, "placeholder"], [1, "dropdown", "w-100"], ["formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "city"], [3, "resolved", "siteKey"], ["type", "submit", 1, "mx-auto", "btn", "btn-primary", 3, "disabled"], ["class", "mt-3 alert", 3, "ngClass", 4, "ngIf"], [1, "contact-info"], [1, "map", "mt-3"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.025116393362!2d31.33142618046898!3d30.093467010177545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815114875a8ff%3A0xe3df564430059452!2zUGlvbmVlcnMgc2VjdXJpdGllcyDYqNin2YrZiNmG2YrYsdiyINmE2KrYr9in2YjZhCDYp9mE2KfZiNix2KfZgiDYp9mE2YXYp9mE2YrYqQ!5e0!3m2!1sen!2seg!4v1720950282800!5m2!1sen!2seg`, "width", "100%", "height", "250", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "text-danger"], [3, "value"], [1, "mt-3", "alert", 3, "ngClass"]],
    template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div")(5, "h3", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ContactUsComponent_div_19_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7)(21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ContactUsComponent_div_24_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ContactUsComponent_div_28_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7)(30, "div", 12)(31, "mat-form-field", 15)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ContactUsComponent_mat_option_36_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ContactUsComponent_div_38_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 12)(40, "mat-form-field", 15)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ContactUsComponent_mat_option_45_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ContactUsComponent_div_46_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "re-captcha", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resolved", function ContactUsComponent_Template_re_captcha_resolved_47_listener($event) {
          return ctx.onCaptchaResolved($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ContactUsComponent_div_51_Template, 3, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 5)(53, "div", 22)(54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p")(58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p")(64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " 19973");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "p")(69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " helpdesk@pioneers-securities.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p")(74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " 202-24190126");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 23)(79, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "iframe", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 28, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 30, "ContactUs.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 32, "ContactUs.YourName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("name").invalid && (ctx.contactForm.get("name").dirty || ctx.contactForm.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 34, "ContactUs.YourMessage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("message").invalid && (ctx.contactForm.get("message").dirty || ctx.contactForm.get("message").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 36, "ContactUs.Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("email").invalid && (ctx.contactForm.get("email").dirty || ctx.contactForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 38, "ContactUs.Phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("phone").invalid && (ctx.contactForm.get("phone").dirty || ctx.contactForm.get("phone").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 40, "ContactUs.Country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 42, ctx.cities));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("country").invalid && (ctx.contactForm.get("country").dirty || ctx.contactForm.get("country").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 44, "ContactUs.City"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cityOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactForm.get("city").invalid && (ctx.contactForm.get("city").dirty || ctx.contactForm.get("city").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("siteKey", ctx.siteKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.contactForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 46, "ContactUs.SubmitMessage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 48, "ContactUs.ContactInformation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 50, "ContactUs.Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](62, 52, "ContactUs.Location"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 54, "ContactUs.Hotline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](71, 56, "ContactUs.EmailAddress"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 58, "ContactUs.PhoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](81, 60, "ContactUs.OurLocation"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__.RecaptchaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: ["\n\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover, .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #40af95;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #0d0e12;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n\ntd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: #112240;\n  border-color: #112240;\n}\n\n@media (max-width: 1300px) {\n  .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n\n[dir=rtl][_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0dJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFEUjtBQUdRO0VBQ0ksa0RBQUE7RUFDQSwwREFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkRoQkk7RUNpQkosZUFBQTtBQURaO0FBR1k7RUFDSSwyQkFBQTtBQURoQjtBQUdZO0VBQ0ksa0RBQUE7QUFEaEI7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0R2QkE7QUNxQmhCO0FBS1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjRC9CQTtBQzRCaEI7QUFNWTtFQUNJLGVBQUE7RUFDQSxjRHJDQTtBQ2lDaEI7QUFPWTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFPZ0I7RUFDSSxlQUFBO0VBQ0EsY0RwREo7RUNxREksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBGRC9DVDtBQzBDWDtBQU1vQjtFQUNJLHFCQUFBO0FBSnhCOztBQWFJO0VBQ0ksZUFBQTtBQVZSOztBQWNBO0VBQ0kseUJEMUVZO0VDMkVaLHFCRDNFWTtBQ2dFaEI7O0FBY0E7RUFFUTtJQUNJLFlBQUE7RUFaVjtBQUNGO0FBa0JRO0VBQ0ksbUJBQUE7QUFoQlo7QUFpQlk7RUFGSjtJQUdRLHNCQUFBO0VBZGQ7QUFDRjtBQWdCUTtFQUNJLG1CQUFBO0FBZFo7QUFlWTtFQUZKO0lBR1EsbUJBQUE7RUFaZDtBQUNGO0FBZVk7RUFDSSxtQkFBQTtBQWJoQjtBQWVZO0VBQ0ksbUJBQUE7QUFiaEI7QUFrQlk7RUFGSjtJQUdRLGtCQUFBO0VBZmQ7QUFDRjtBQWdCWTtFQUNJLG1CQUFBO0FBZGhCO0FBaUJnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBZnBCO0FBZ0JvQjtFQUhKO0lBSVEsYUFBQTtFQWJ0QjtBQUNGOztBQXNCSTtFQUNJLGlCQUFBO0FBbkJSOztBQXlCSTtFQUNJLGlCQUFBO0FBdEJSIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tb3JlLXByb3llY3Rze1xyXG4gICAgLnByb3llY3QtY29se1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICAgICAgLm1vcmUtcHJveWVjdC1ib3gge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwxMiwyNywwLjcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vdGhlci1wcm95ZWN0LXRpdGxle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm90aGVyLXByb3llY3QtZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJExpZ2h0U2xhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tb3JlLXByb3llY3RzLXNraWxsc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRTbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgICAgICAgICAgICAgICAgICAudW5kZXJsaW5le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG50ZCB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICBib3JkZXItY29sb3I6ICRMaWdodE5hdnk7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEzMDBweCl7XHJcbiAgICAubW9yZS1wcm95ZWN0c3tcclxuICAgICAgICAucHJveWVjdC1jb2x7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0LXVzIHtcclxuICAgIC5zZWN0aW9uLWJveCB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLWxnLTYge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXAge1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAgIFxyXG4gICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
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
    styles: ["\n\n.contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 60px;\n  font-weight: 600;\n  color: #0d0e12;\n  margin: auto;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  margin: 10px 0 40px;\n  font-size: 16px;\n  color: #40af95;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  text-align: center;\n}\n\n.branches-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-btn[_ngcontent-%COMP%] {\n  background-color: #40af95;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 5px;\n  border-color: #40af95;\n  cursor: pointer;\n  transition: background-color 0.3s, box-shadow 0.3s;\n  box-shadow: 0 4px 6px rgba(248, 247, 247, 0.1);\n  margin-top: 2%;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-btn[_ngcontent-%COMP%]:hover {\n  background-color: #328a75;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);\n}\n.branches-section[_ngcontent-%COMP%]   .branches-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  transition: opacity 0.5s ease-out, height 0.5s ease-out;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%] {\n  background-color: #f0f4f8;\n  border: 1px solid #0d0e12;\n  border-radius: 5px;\n  border-color: #40af95;\n  padding: 20px;\n  margin: 10px;\n  width: calc(33.333% - 20px);\n  text-align: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 10px;\n  color: #40af95;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 5px;\n  color: #40af95;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  cursor: pointer;\n  color: #0d0e12;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #40af95;\n  text-decoration: none;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.branches-section[_ngcontent-%COMP%]   .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: #328a75;\n  text-decoration: underline;\n}\n\n@media (max-width: 768px) {\n  .branches-container[_ngcontent-%COMP%]   .branch-item[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0RYWTtFQ1laLFlBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0RoQlk7RUNpQlosMEZEYk87RUNjUCxrQkFBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUhGO0FBS0U7RUFDRSx5QkQzQlk7RUM0QlosV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkQvQlk7RUNnQ1osZUFBQTtFQUNBLGtEQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0FBSEo7QUFJSTtFQUNFLHlCQUFBO0VBQ0EseUNBQUE7QUFGTjtBQUtJO0VBQ0Usa0JBQUE7QUFITjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdURBQUE7QUFMSjtBQU9JO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJEekRVO0VDMERWLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7QUFMTjtBQU9NO0VBQ0Usc0JBQUE7RUFDQSx5Q0FBQTtBQUxSO0FBUU07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRHpFUTtBQ21FaEI7QUFVUTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRGhGTTtBQ3dFaEI7QUFXUTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjRHpGTTtBQ2dGaEI7QUFXVTtFQUNFLGNEMUZJO0VDMkZKLHFCQUFBO0FBVFo7QUFXWTtFQUNFLDBCQUFBO0FBVGQ7QUFjUTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQVpWOztBQW1CQTtFQUVJO0lBQ0Usd0JBQUE7RUFqQko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uY29udGFjdCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXByZS10aXRsZSB7XHJcbiAgICBtYXJnaW46IDEwcHggMCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICRHcmVlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYnJhbmNoZXMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5icmFuY2hlcy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEdyZWVuOyBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkR3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDI0OCwgMjQ3LCAyNDcsIDAuMSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJEdyZWVuLCAxMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJyYW5jaGVzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0LCBoZWlnaHQgMC41cyBlYXNlLW91dDtcclxuXHJcbiAgICAuYnJhbmNoLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGY4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkTGlnaHRlc3RTbGF0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRHcmVlbjtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB3aWR0aDogY2FsYygzMy4zMzMlIC0gMjBweCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5icmFuY2gtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJyYW5jaC1kZXRhaWxzIHtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogZGFya2VuKCRHcmVlbiwgMTAlKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJyYW5jaGVzLWNvbnRhaW5lciB7XHJcbiAgICAuYnJhbmNoLWl0ZW0ge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proyects/proyects.component */ 9717);
/* harmony import */ var _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-proyects/more-proyects.component */ 5237);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 2098);
/* harmony import */ var _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-market/stock-market.component */ 4377);
/* harmony import */ var _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./market-summary/market-summary.component */ 2081);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news.component */ 3477);
/* harmony import */ var _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sectors/sectors.component */ 8269);
/* harmony import */ var _market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./market-watch/market-watch.component */ 2659);
/* harmony import */ var _additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./additional-tables/additional-tables.component */ 8941);














class HomeComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 13,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-banner")(2, "app-stock-market")(3, "app-market-summary")(4, "app-market-watch")(5, "app-sectors")(6, "app-about")(7, "app-proyects")(8, "app-more-proyects")(9, "app-additional-tables")(10, "app-news")(11, "app-contact-us")(12, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_3__.ProyectsComponent, _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_4__.MoreProyectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__.ContactUsComponent, _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_7__.StockMarketComponent, _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_8__.MarketSummaryComponent, _news_news_component__WEBPACK_IMPORTED_MODULE_9__.NewsComponent, _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_10__.SectorsComponent, _market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_11__.MarketWatchComponent, _additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_12__.AdditionalTablesComponent],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2865);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs/jobs.component */ 2019);
/* harmony import */ var _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-proyects/more-proyects.component */ 5237);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proyects/proyects.component */ 9717);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 2098);
/* harmony import */ var _general_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general/dropdown/dropdown.component */ 9034);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock-market/stock-market.component */ 4377);
/* harmony import */ var _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./market-summary/market-summary.component */ 2081);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/news.component */ 3477);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sectors/sectors.component */ 8269);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./market-watch/market-watch.component */ 2659);
/* harmony import */ var _additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./additional-tables/additional-tables.component */ 8941);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7580);

































function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOptionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_26__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_28__.NgxPaginationModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__.RecaptchaModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
      }
    }), _general_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownSelectorComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__.JobsComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__.ProyectsComponent, _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__.MoreProyectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__.ContactUsComponent, _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_9__.StockMarketComponent, _market_summary_market_summary_component__WEBPACK_IMPORTED_MODULE_10__.MarketSummaryComponent, _news_news_component__WEBPACK_IMPORTED_MODULE_11__.NewsComponent, _sectors_sectors_component__WEBPACK_IMPORTED_MODULE_12__.SectorsComponent, _market_watch_market_watch_component__WEBPACK_IMPORTED_MODULE_13__.MarketWatchComponent, _additional_tables_additional_tables_component__WEBPACK_IMPORTED_MODULE_14__.AdditionalTablesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_31__.BaseChartDirective, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOptionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_26__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_28__.NgxPaginationModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__.RecaptchaModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule, _general_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownSelectorComponent]
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
    styles: ["\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #e6e9ee;\n}\n\n.about-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #303C55;\n  font-family: \"Times New Roman\", Times, serif;\n}\n.about-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n.about-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #112240;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2pvYnMvam9icy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBQ0kseUJERFk7QUNDaEI7QUFDSTtFQUNJLHNCQUFBO0FBQ1I7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUJEUlk7QUNTaEI7O0FBR0k7RUFDSSxjRFhRO0VDWVIsNENBQUE7QUFBUjtBQUVJO0VBQ0ksV0FBQTtBQUFSO0FBRUk7RUFDSSxjRG5CUTtBQ21CaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM0MGFmOTU7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmpvYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgICAuam9icy1pbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG4uZW1wdHktc3BhY2Uge1xyXG4gICAgaGVpZ2h0OiA1MHB4OyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgfVxyXG5cclxuLmFib3V0LWRldGFpbHMge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiAkTGlnaHRlc3ROYXZ5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9IFxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "table", 9)(3, "thead")(4, "tr")(5, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody")(27, "tr")(28, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 11);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "table", 9)(3, "thead")(4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MarketSummaryComponent_div_16_th_6_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MarketSummaryComponent_div_16_td_11_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MarketSummaryComponent_div_16_td_16_Template, 2, 5, "td", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "table", 9)(3, "thead")(4, "tr")(5, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MarketSummaryComponent_div_17_tr_18_Template, 11, 10, "tr", 12);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "table", 9)(3, "thead")(4, "tr")(5, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MarketSummaryComponent_div_25_tr_18_Template, 9, 12, "tr", 12);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MarketSummaryComponent_div_26_Template_mat_select_selectionChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.filterInternationalMarkets($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Europe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "US");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Asia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Egypt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "table", 9)(16, "thead")(17, "tr")(18, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MarketSummaryComponent_div_26_tr_34_Template, 11, 13, "tr", 12);
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
    decls: 27,
    vars: 38,
    consts: [["id", "market-statistics"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "jobs-inner"], [1, "summary-tabs", "mx-2"], [1, "btn", "btn-light", 3, "click", "ngClass"], ["class", "summary-details mx-2 my-2", 4, "ngIf"], [1, "summary-details", "mx-2", "my-2"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "text-success"], [1, "text-danger"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "market-type-filter", "mb-3"], ["appearance", "fill"], ["id", "marketType", 3, "selectionChange"], ["value", "Europe"], ["value", "US"], ["value", "Asia"], ["value", "Egypt"]],
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
    styles: ["\n\n.market-summary-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #e6e9ee;\n  color: white;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #112240;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-summary-container[_ngcontent-%COMP%]   .market-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: -5%;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.summary-tabs[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n\n.market-type-filter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100px;\n  max-width: 100%;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL21hcmtldC1zdW1tYXJ5L21hcmtldC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDRSxhQUFBO0VBQ0EseUJERmM7RUNHZCxZQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQUtJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTU07RUFDRSx5QkQ1QlE7QUN3QmhCO0FBT007RUFFRSx1QkFBQTtFQUNBLFlBQUE7QUFOUjtBQVNNO0VBQ0UsWUFBQTtBQVBSO0FBVU07RUFDRSxVQUFBO0FBUlI7QUFhRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNFLFdBQUE7QUFYTjtBQWdCSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQWROO0FBZ0JNO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBZFI7QUFpQk07RUFDRSx5QkRwRVE7QUNxRGhCO0FBa0JNO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBaEJSO0FBbUJNO0VBQ0UsWUFBQTtBQWpCUjtBQW9CTTtFQUNFLFVBQUE7QUFsQlI7O0FBd0JBO0VBQ0UseUJEekZjO0FDb0VoQjtBQXVCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFyQko7O0FBd0JBO0VBQ0UsV0FBQTtBQXJCRjs7QUF3QkE7RUFDRSx5QkRwR2M7RUNxR2QsWUFBQTtBQXJCRjs7QUF3QkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQXJCSjs7QUF5QkU7RUFDRSxpQkFBQTtBQXRCSjtBQXdCRTtFQUNFLGlCQUFBO0FBdEJKOztBQTBCQTtFQUNFLGtCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtCQUFBO0FBdkJGIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tYXJrZXQtc3VtbWFyeS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAuc3VtbWFyeS10YWJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnktZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LXN1Y2Nlc3Mge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFya2V0LXRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFya2V0LXRhYmxlIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1kYW5nZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5qb2JzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmF2eTtcclxuICBcclxuICAuam9icy1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTUlO1xyXG4gIH1cclxufVxyXG4uc3VtbWFyeS10YWJzIC5idG4ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS10YWJzIC5idG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWFya2V0LXR5cGUtZmlsdGVyIHtcclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwcHg7IFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyBcclxuICB9XHJcbn1cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLnN1bW1hcnktdGFic3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuc3VtbWFyeS1kZXRhaWxze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG50ciB0aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ciB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);






const _c0 = (a0, a1) => ({
  "text-success": a0,
  "text-danger": a1
});
function MarketWatchComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isAscending ? "\u25B2" : "\u25BC");
  }
}
function MarketWatchComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_tr_72_Template_tr_click_0_listener() {
      const stock_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.navigateToDetails(stock_r3.isin));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stock_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.englishName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c0, stock_r3.change > 0, stock_r3.change < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.lastPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.highBidPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.lowAskPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.tradesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 14, stock_r3.askVolume, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 17, stock_r3.bidVolume, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](27, 20, stock_r3.value, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 23, stock_r3.volume, "1.0-0"));
  }
}
function MarketWatchComponent_li_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 15)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_li_79_Template_a_click_1_listener() {
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.setPage(page_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.currentPage === page_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r5);
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
    return new (t || MarketWatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MarketWatchComponent,
    selectors: [["app-market-watch"]],
    decls: 84,
    vars: 70,
    consts: [["id", "market-watch"], [1, "jobs", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner"], [1, "market-watch", "mx-2", "my-5"], [1, "text-center"], [1, "table-responsive"], [1, "table", "table-bordered"], [3, "click"], [4, "ngIf"], ["style", "cursor: pointer; transition: background-color 0.3s ease;", 3, "click", 4, "ngFor", "ngForOf"], ["aria-label", "Page navigation"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["aria-label", "Next", 1, "page-link", 3, "click"], [2, "cursor", "pointer", "transition", "background-color 0.3s ease", 3, "click"], [3, "ngClass"], [1, "page-link", 3, "click"]],
    template: function MarketWatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "table", 9)(17, "thead")(18, "tr")(19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_19_listener() {
          return ctx.sortData("englishName");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MarketWatchComponent_span_22_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_23_listener() {
          return ctx.sortData("symbol");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MarketWatchComponent_span_26_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_27_listener() {
          return ctx.sortData("open");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MarketWatchComponent_span_30_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_31_listener() {
          return ctx.sortData("close");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MarketWatchComponent_span_34_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_35_listener() {
          return ctx.sortData("change");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, MarketWatchComponent_span_38_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_39_listener() {
          return ctx.sortData("lastPrice");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, MarketWatchComponent_span_42_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_43_listener() {
          return ctx.sortData("highBidPrice");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, MarketWatchComponent_span_46_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_47_listener() {
          return ctx.sortData("lowAskPrice");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, MarketWatchComponent_span_50_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_51_listener() {
          return ctx.sortData("tradesCount");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, MarketWatchComponent_span_54_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_55_listener() {
          return ctx.sortData("askVolume");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, MarketWatchComponent_span_58_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_59_listener() {
          return ctx.sortData("bidVolume");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, MarketWatchComponent_span_62_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_63_listener() {
          return ctx.sortData("value");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, MarketWatchComponent_span_66_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_th_click_67_listener() {
          return ctx.sortData("volume");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, MarketWatchComponent_span_70_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, MarketWatchComponent_tr_72_Template, 31, 29, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "nav", 13)(74, "ul", 14)(75, "li", 15)(76, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_a_click_76_listener() {
          return ctx.setPage(ctx.currentPage - 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, MarketWatchComponent_li_79_Template, 3, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li", 15)(81, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketWatchComponent_Template_a_click_81_listener() {
          return ctx.setPage(ctx.currentPage + 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 36, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 38, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 40, "Header.Item2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 42, ctx.borsaDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 44, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "englishName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 46, "symbol"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 48, "open"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 50, "close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 52, "change"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 54, "lastPrice"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "lastPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 56, "highBidPrice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "highBidPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 58, "lowAskPrice"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "lowAskPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 60, "tradesCount"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "tradesCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 62, "askVolume"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "askVolume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 64, "bidVolume"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "bidVolume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 66, "value"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 68, "volume"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSortColumn === "volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayedStocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.currentPage === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getPaginationPages());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.currentPage === ctx.totalPages);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["\n\n.market-watch[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.market-watch[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border-left: none;\n  size: 50px;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], .market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.market-watch[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.market-watch[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.market-watch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #112240;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #112240;\n  border-color: #112240;\n  color: white;\n}\n.market-watch[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: Gray;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  padding-top: 4%;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: -5%;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .summary-tabs[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n    margin-bottom: -15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL21hcmtldC13YXRjaC9tYXJrZXQtd2F0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNFLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRk47QUFLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUhOO0FBTUk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFKTjtBQU9JO0VBQ0Usa0JBQUE7QUFMTjtBQVlJO0VBQ0UsZ0JBQUE7QUFWTjtBQWFJO0VBQ0UsWUFBQTtBQVhOO0FBY0k7RUFDRSxVQUFBO0FBWk47QUFnQkU7RUFDRSxTQUFBO0FBZEo7QUFpQkU7RUFDRSxTQUFBO0FBZko7QUFrQkU7RUFDRSxnQkFBQTtBQWhCSjtBQWtCTTtFQUNFLGNEakVRO0FDaURoQjtBQXFCTTtFQUNFLHlCRHZFUTtFQ3dFUixxQkR4RVE7RUN5RVIsWUFBQTtBQW5CUjtBQXFCTTtFQUNFLFdBQUE7QUFuQlI7O0FBeUJBO0VBQ0UseUJEcEZjO0VDcUZkLGVBQUE7QUF0QkY7QUF1QkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBckJKOztBQTBCRTtFQUNFLGlCQUFBO0FBdkJKO0FBMEJFO0VBQ0UsaUJBQUE7QUF4Qko7O0FBa0NBO0VBR0k7SUFDRSxtQkFBQTtFQWpDSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tYXJrZXQtd2F0Y2gge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgdGgsIHRkIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgc2l6ZTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICB0aCwgdGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHRoOmZpcnN0LWNoaWxkLCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAvLyAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRyOmZpcnN0LWNoaWxkIHRoLCB0cjpmaXJzdC1jaGlsZCB0ZCB7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1kYW5nZXIge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLnBhZ2UtaXRlbSB7XHJcbiAgICAgIC5wYWdlLWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICAgIC8vICY6aG92ZXIge1xyXG4gICAgICAgIC8vICAgY29sb3I6ICROYXZ5O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfVxyXG4gICAgICAmLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJExpZ2h0TmF2eTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgJi5kaXNhYmxlZCAucGFnZS1saW5rIHtcclxuICAgICAgICBjb2xvcjogR3JheTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmpvYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICAuam9icy1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTUlO1xyXG4gIH1cclxufVxyXG5cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLnN1bW1hcnktdGFicyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC5zdW1tYXJ5LWRldGFpbHMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbi8vICAgLmpvYnMtaW5uZXIge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcclxuLy8gICB9XHJcbi8vIH1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmpvYnMge1xyXG4gICBcclxuICAgIC5qb2JzLWlubmVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 1)(5, "h3", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "31032024_034624\u0627\u0644\u0628\u0627\u0628 \u0627\u0644\u062D\u0627\u062F\u064A \u0639\u0634\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0626\u062D\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0644\u0642\u0627\u0646\u0648\u0646 \u0633\u0648\u0642 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644.pdf");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "31032024_034616\u0643\u062A\u0627\u0628 \u062F\u0631\u0648\u064A \u0631\u0642\u0645 4 \u0628\u0634\u0623\u0646 \u062D\u0645\u0627\u064A\u0629 \u0633\u0631\u064A\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u0639\u0627\u0645\u0644\u064A\u0646 \u0645\u0646 \u0627\u0644\u0625\u062D\u062A\u064A\u0627\u0644.pdf");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "31032024_034533\u0643\u062A\u0627\u0628 \u062F\u0648\u0631\u064A \u0628\u0634\u0623\u0646 \u0634\u0631\u0627\u0621 \u062D\u0642 \u0627\u0644\u0627\u0643\u062A\u062A\u0627\u0628 2014.pdf");
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
    styles: ["\n\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover, .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #40af95;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #0d0e12;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n\ntd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (max-width: 1300px) {\n  .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL21vcmUtcHJveWVjdHMvbW9yZS1wcm95ZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0dJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFEUjtBQUdRO0VBQ0ksa0RBQUE7RUFFQSwwREFBQTtFQUlBLGFBQUE7RUFJQSw4QkFBQTtFQUlBLG1CQUFBO0VBR0Esc0JBQUE7RUFJQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLHlCRGpDSTtFQ2tDSixlQUFBO0FBRFo7QUFHWTtFQUdJLDJCQUFBO0FBRGhCO0FBR1k7RUFDSSxrREFBQTtBQURoQjtBQUlZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjRDFDQTtBQ3dDaEI7QUFLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEbERBO0FDK0NoQjtBQU1ZO0VBQ0ksZUFBQTtFQUNBLGNEeERBO0FDb0RoQjtBQU9ZO0VBSUksYUFBQTtFQUlBLHFCQUFBO0VBSUEsWUFBQTtFQUdBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxoQjtBQU9nQjtFQUNJLGVBQUE7RUFDQSxjRGxGSjtFQ21GSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEZEN0VUO0FDd0VYO0FBTW9CO0VBQ0kscUJBQUE7QUFKeEI7O0FBYUk7RUFDSSxlQUFBO0FBVlI7O0FBZUE7RUFFUTtJQUNJLFlBQUE7RUFiVjtBQUNGO0FBZ0JBO0VBQ0EsaUJBQUE7QUFkQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubW9yZS1wcm95ZWN0c3tcclxuICAgIC5wcm95ZWN0LWNvbHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgIC5tb3JlLXByb3llY3QtYm94IHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiYSgyLDEyLDI3LDAuNyk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggLTE1cHggcmdiYSgyLDEyLDI3LDAuNyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm90aGVyLXByb3llY3QtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub3RoZXItcHJveWVjdC1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1vcmUtcHJveWVjdHMtc2tpbGxze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkU2xhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLnVuZGVybGluZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxudGQge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMzAwcHgpe1xyXG4gICAgLm1vcmUtcHJveWVjdHN7XHJcbiAgICAgICAgLnByb3llY3QtY29se1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbltkaXI9XCJydGxcIl0ge1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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








function NewsComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_li_15_Template_li_click_0_listener() {
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
function NewsComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_div_1_Template_div_click_0_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_div_1_Template_a_click_10_listener() {
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
function NewsComponent_div_16_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_ng_container_8_Template_button_click_1_listener() {
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
function NewsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsComponent_div_16_div_1_Template, 13, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 17)(3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(ctx_r2.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NewsComponent_div_16_ng_container_8_Template, 3, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changePage(ctx_r2.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_16_Template_button_click_11_listener() {
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
function NewsComponent_div_17_div_13_Template(rf, ctx) {
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
function NewsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsComponent_div_17_Template_div_click_1_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NewsComponent_div_17_div_13_Template, 4, 4, "div", 36);
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
    decls: 18,
    vars: 12,
    consts: [["nav", "ngbNav"], ["id", "news"], [1, "empty-space"], [1, "jobs"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container"], [1, "section-box"], [1, "section-title", 3, "dir"], [1, "jobs-inner", 3, "dir"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "news-container"], ["ngbNav", "", 1, "nav-tabs"], ["ngbNavItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "news-list", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], ["class", "news-detail-container", 4, "ngIf"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", ""], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "news-list"], ["class", "news-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "news-item", 3, "click"], [1, "news-image"], ["alt", "Article Image", 3, "src"], [1, "news-content"], [1, "news-title"], [1, "news-date"], [1, "news-summary"], [1, "news-read-more", 3, "click"], [3, "click"], [1, "news-detail-container"], [1, "back-button", 3, "click"], [1, "news-detail-image"], [1, "news-detail-content"], [1, "news-detail-title"], [1, "news-detail-date"], [1, "news-detail-summary", 3, "innerHTML"], [4, "ngIf"], ["target", "_blank", 1, "download-button", 3, "href"]],
    template: function NewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div")(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "ul", 9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NewsComponent_li_15_Template, 3, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NewsComponent_div_16_Template, 14, 12, "div", 11)(17, NewsComponent_div_17_Template, 14, 13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 6, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "News.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedArticle);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLinkBase, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: ["\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #e6e9ee;\n}\n\n.news-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  direction: rtl;\n  text-align: right;\n  cursor: pointer;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-image[_ngcontent-%COMP%] {\n  flex: 0 0 100px;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%] {\n  flex: 2;\n  padding-right: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #007bff;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-summary[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.news-container[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-read-more[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_fadeIn 0.5s;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  cursor: pointer;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  color: #112240;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  margin-bottom: 20px;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_imageGrow 0.5s;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-content[_ngcontent-%COMP%]   .news-detail-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #007bff;\n  font-size: 2em;\n  text-align: center;\n}\n.news-container[_ngcontent-%COMP%]   .news-detail-container[_ngcontent-%COMP%]   .news-detail-content[_ngcontent-%COMP%]   .news-detail-summary[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1.6;\n  direction: rtl;\n  text-align: right;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_imageGrow {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 8px 12px;\n  border: none;\n  background-color: rgb(228, 224, 224);\n  color: black;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: gray;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n\n.download-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 20px;\n  padding: 10px 20px;\n  background-color: #112240;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n.download-button[_ngcontent-%COMP%]:hover {\n  background-color: #060d18;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0NBO0VBQ0kseUJBQUE7QUFDSjtBQUFJO0VBQ0ksc0JBQUE7QUFFUjs7QUFDQTtFQUNJLFlBQUE7RUFDQSx5QkRQWTtBQ1NoQjs7QUFBQTtFQUNJLGFBQUE7QUFHSjtBQURJO0VBQ0UsbUJBQUE7QUFHTjtBQUFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRU47QUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNNO0VBQ0UsZUFBQTtBQUNSO0FBQVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRVY7QUFFTTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFBVjtBQUdRO0VBQ0UsY0FBQTtBQURWO0FBSVE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBRlY7QUFRSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0FBTk47QUFRTTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRHpFUTtBQ21FaEI7QUFTTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUFI7QUFTUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVBWO0FBV007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQVdRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBVFY7QUFZUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFWVjs7QUFnQkU7RUFDRTtJQUNFLFVBQUE7RUFiSjtFQWVFO0lBQ0UsVUFBQTtFQWJKO0FBQ0Y7QUFnQkU7RUFDRTtJQUNFLHFCQUFBO0VBZEo7RUFnQkU7SUFDRSxtQkFBQTtFQWRKO0FBQ0Y7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWlCRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQWZKOztBQWtCRTtFQUNFLHNCQUFBO0FBZko7O0FBa0JFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBZko7O0FBa0JFO0VBQ0UseUJEM0pZO0VDNEpaLFlBQUE7QUFmSjs7QUFpQkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkRsS1k7RUNtS1osWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQWRKO0FBZ0JJO0VBQ0UseUJBQUE7QUFkTiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5qb2JzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gICAgLmpvYnMtaW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuLmVtcHR5LXNwYWNlIHtcclxuICAgIGhlaWdodDogNzBweDsgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gIH1cclxuLm5ld3MtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgXHJcbiAgICAubmF2LXRhYnMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5ld3MtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmV3cy1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgICAgLm5ld3MtaW1hZ2Uge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDBweDsgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvOyBcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubmV3cy1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAyO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBcclxuICAgICAgICAubmV3cy10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm5ld3Mtc3VtbWFyeSB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubmV3cy1yZWFkLW1vcmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG4gICAgLm5ld3MtZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcclxuICBcclxuICAgICAgLmJhY2stYnV0dG9uIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm5ld3MtZGV0YWlsLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogaW1hZ2VHcm93IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5uZXdzLWRldGFpbC1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIFxyXG4gICAgICAgIC5uZXdzLWRldGFpbC10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLm5ld3MtZGV0YWlsLXN1bW1hcnkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBpbWFnZUdyb3cge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyNCwgMjI0KTtcclxuICAgIFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBidXR0b246aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBidXR0b24uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRMaWdodE5hdnksIDEwJSk7XHJcbiAgICB9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
    decls: 29,
    vars: 33,
    consts: [[1, "empty-space"], [1, "jobs", 3, "dir"], [1, "container"], [1, "section-title"], [1, "jobs-inner"], [1, "row", "space-row"], [1, "col-3", "w-50", "h-25", "p-2", "position-relative"], [1, "img-fluid", "border", "rounded", 3, "src", "alt"], [1, "col-3", "w-50", "h-25", "p-2"], [1, "space-row"]],
    template: function ProyectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 2)(5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 11, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 13, "CoreValues.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 15, "Integrity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 17, "Integrity.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 19, "Loyalty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 21, "Loyalty.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 23, "Creativity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 25, "Creativity.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 27, "Passion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 29, "Passion.Image"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 31, "CoreValues.Description"));
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["\n\nh3[_ngcontent-%COMP%] {\n  color: #112240;\n}\n\n.other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #0d0e12;\n}\n\n.space-row[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 25px;\n  margin-bottom: -1%;\n  font-size: larger;\n}\n\n.value-heading[_ngcontent-%COMP%] {\n  top: 42%;\n  left: 32%;\n  color: rgb(231, 224, 224);\n  font-weight: bold;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.empty-space[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  height: 50px;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb3llY3RzL3Byb3llY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjREZZO0FDRWhCOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCRHpCWTtBQ3lCaEI7QUFFSTtFQUNJLHNCQUFBO0FBQVI7O0FBSUE7RUFDSSx5QkRqQ1k7RUNrQ1osWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREo7O0FBR0E7RUFDQSxpQkFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiAkTGlnaHROYXZ5O1xyXG59XHJcblxyXG4ub3RoZXItcHJveWVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG59XHJcblxyXG4uc3BhY2Utcm93IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMSU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnZhbHVlLWhlYWRpbmcge1xyXG4gICAgdG9wOiA0MiU7XHJcbiAgICBsZWZ0OiAzMiU7XHJcbiAgICBjb2xvcjogcmdiKDIzMSwgMjI0LCAyMjQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5qb2JzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG5cclxuICAgIC5qb2JzLWlubmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wdHktc3BhY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7IFxyXG4gICAgaGVpZ2h0OiA1MHB4OyBcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgICBwYWRkaW5nOiAwOyBcclxufVxyXG5bZGlyPVwicnRsXCJdIHtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    styles: ["\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  padding-top: 5%;\n  background-color: #fff;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 2%;\n  font-weight: bold;\n  color: rgb(9, 71, 112);\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  background-color: #f5f5f5;\n  border-color: #f5f5f5;\n  color: rgb(0, 0, 0);\n}\n.btn.selected[_ngcontent-%COMP%] {\n  background-color: #112240;\n  border-color: #112240;\n  color: rgb(255, 255, 255);\n}\n\n.sector-filter-buttons[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.sector-filter-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.summary-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n}\n.summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .sector-filter-buttons[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 1%;\n}\n[dir=rtl][_ngcontent-%COMP%]   .sector-filter-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .summary-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.currency-table[_ngcontent-%COMP%] {\n  padding-top: 7.5%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlY3RvcnMvc2VjdG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBQ0kseUJERFk7QUNDaEI7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBRUEsc0JBQUE7QUFGUjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBTUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFLSTtFQUNJLHlCRHhCUTtFQ3lCUixxQkR6QlE7RUMwQlIseUJBQUE7QUFIUjs7QUFPQTtFQUNJLG1CQUFBO0FBSko7QUFNSTtFQUNJLGtCQUFBO0FBSlI7O0FBUUE7RUFDSSxtQkFBQTtBQUxKO0FBT0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFMUjtBQU9RO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBTFo7QUFRUTtFQUNJLG1CQUFBO0FBTlo7QUFTUTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQVBaOztBQWNJO0VBQ0ksaUJBQUE7QUFYUjtBQWNJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQVpSO0FBYVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFYWjtBQWlCWTtFQUNJLGlCQUFBO0FBZmhCOztBQW9CQTtFQUNJLGlCQUFBO0FBakJKIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICNlNmU5ZWU7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogIzBkMGUxMjtcclxuJFdoaXRlICAgICAgICA6ICMxOTFlMjU7XHJcbiRHcmVlbiAgICAgICAgOiAjNDBhZjk1O1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5qb2JzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogLTUlO1xyXG5cclxuICAgIC5qb2JzLWlubmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoOSwgNzEsIDExMik7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG5cclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWN0b3ItZmlsdGVyLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN1bW1hcnktZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cclxuICAgICAgICB0aCwgdGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSVEwgU3BlY2lmaWMgU3R5bGVzXHJcbltkaXI9XCJydGxcIl0ge1xyXG4gICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0b3ItZmlsdGVyLWJ1dHRvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdW1tYXJ5LWRldGFpbHMge1xyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jdXJyZW5jeS10YWJsZXtcclxuICAgIHBhZGRpbmctdG9wOiA3LjUlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/market-summary.service */ 7558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);






const _c0 = (a0, a1) => ({
  "btn-light": a0,
  "btn-primary": a1
});
function StockMarketComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "table")(2, "tbody")(3, "tr")(4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr")(13, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr")(22, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr")(31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr")(38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 13, "Gainers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.marketSummary.gainers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 15, ctx_r0.marketSummary.gainers / ctx_r0.marketSummary.stockCount * 100, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 18, "Losers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.marketSummary.losers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 20, ctx_r0.marketSummary.losers / ctx_r0.marketSummary.stockCount * 100, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 23, "Unchanged"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.marketSummary.stockCount - ctx_r0.marketSummary.gainers - ctx_r0.marketSummary.losers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](29, 25, (ctx_r0.marketSummary.stockCount - ctx_r0.marketSummary.gainers - ctx_r0.marketSummary.losers) / ctx_r0.marketSummary.stockCount * 100, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 28, "Value"), " (Mn)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](36, 30, ctx_r0.marketSummary.totalValue, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 33, "Volume"), " (Mn)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](43, 35, ctx_r0.marketSummary.totalVolume, "1.0-0"));
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
    return new (t || StockMarketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_market_summary_service__WEBPACK_IMPORTED_MODULE_0__.MarketSummaryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StockMarketComponent,
    selectors: [["app-stock-market"]],
    decls: 69,
    vars: 110,
    consts: [["id", "market-statistics"], [1, "jobs"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "container", 3, "dir"], [1, "container", 3, "dir"], [1, "section-title"], [1, "jobs-inner"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "row", "mx-2"], [1, "col-md-6", "text-center"], [1, "btn", "btn-sm", 3, "click", "ngClass"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "type"], [1, "pie-container"], ["baseChart", "", 3, "datasets", "labels", "type"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "row", "mx-2", "market-status"], [1, "col-md-6"], ["class", "market-summary-table", 4, "ngIf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "pie-container"], [1, "market-summary-table"], [1, "text-success"], [1, "text-danger"], [1, "text-primary"], ["colspan", "2", 1, "text-dark"]],
    template: function StockMarketComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_16_listener() {
          return ctx.onStockChange("Egx100");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_19_listener() {
          return ctx.onStockChange("Egx70");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_22_listener() {
          return ctx.onStockChange("Egx30Cap");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_25_listener() {
          return ctx.onStockChange("Egx30");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_30_listener() {
          return ctx.onPeriodChange("d");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_33_listener() {
          return ctx.onPeriodChange("w");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_36_listener() {
          return ctx.onPeriodChange("1m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_39_listener() {
          return ctx.onPeriodChange("3m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_42_listener() {
          return ctx.onPeriodChange("6m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_45_listener() {
          return ctx.onPeriodChange("12m");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockMarketComponent_Template_button_click_48_listener() {
          return ctx.onPeriodChange("ytd");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 7)(52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 12)(58, "div", 13)(59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, StockMarketComponent_div_62_Template, 44, 38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 13)(64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 41, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 43, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 45, "Header.Item5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 47, "EGX.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](77, _c0, ctx.selectedStock !== "Egx100", ctx.selectedStock === "Egx100"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 49, "EGX100"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](80, _c0, ctx.selectedStock !== "Egx70", ctx.selectedStock === "Egx70"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 51, "EGX70"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](83, _c0, ctx.selectedStock !== "Egx30Cap", ctx.selectedStock === "Egx30Cap"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 53, "EGX30Cap"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](86, _c0, ctx.selectedStock !== "Egx30", ctx.selectedStock === "Egx30"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 55, "EGX30"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("type", ctx.lineChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](89, _c0, ctx.selectedPeriod !== "d", ctx.selectedPeriod === "d"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 57, "Daily"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](92, _c0, ctx.selectedPeriod !== "w", ctx.selectedPeriod === "w"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 59, "W"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](95, _c0, ctx.selectedPeriod !== "1m", ctx.selectedPeriod === "1m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 61, "1M"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](98, _c0, ctx.selectedPeriod !== "3m", ctx.selectedPeriod === "3m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 63, "3M"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](101, _c0, ctx.selectedPeriod !== "6m", ctx.selectedPeriod === "6m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 65, "6M"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](104, _c0, ctx.selectedPeriod !== "12m", ctx.selectedPeriod === "12m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 67, "1Y"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](107, _c0, ctx.selectedPeriod !== "ytd", ctx.selectedPeriod === "ytd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 69, "YTD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 71, "MoneyFlows.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.pieChartDatasets)("labels", ctx.pieChartLabels)("type", ctx.pieChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 73, "MarketStatus.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.marketSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 75, "GainersLosersUnchanged.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.marketPieChartDatasets)("labels", ctx.marketPieChartLabels)("type", ctx.marketPieChartType);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%] {\n  border-top: 2px solid #ccc;\n  padding-top: 20px;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: blue;\n}\n.container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n}\n.jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 5%;\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .jobs-inner[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 10px;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: white;\n}\n@media (max-width: 768px) {\n  .btn-primary[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.btn-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #343a40;\n}\n@media (max-width: 768px) {\n  .btn-light[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.btn-primary.active[_ngcontent-%COMP%], .btn-light.active[_ngcontent-%COMP%] {\n  border-color: #007bff;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  [dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  [dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  [dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .market-status[_ngcontent-%COMP%]   .market-summary-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b2NrLW1hcmtldC9zdG9jay1tYXJrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUZKO0FBSUk7RUFQRjtJQVFJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFESjtBQUNGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRko7QUFJSTtFQVBGO0lBUUksWUFBQTtFQURKO0FBQ0Y7QUFJRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7QUFGTjtBQUlNO0VBSEY7SUFJSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBRE47QUFDRjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUZOO0FBSU07RUFKRjtJQUtJLGtCQUFBO0VBRE47QUFDRjtBQUlJO0VBQ0UsV0FBQTtBQUZOO0FBSU07RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFGUjtBQUlRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFGVjtBQUlVO0VBTEY7SUFNSSxZQUFBO0VBRFY7QUFDRjtBQUlRO0VBQ0UsWUFBQTtBQUZWO0FBS1E7RUFDRSxVQUFBO0FBSFY7QUFNUTtFQUNFLFdBQUE7QUFKVjtBQU9RO0VBQ0UsaUJBQUE7QUFMVjs7QUFZQTtFQUNFLHlCRC9GYztBQ3NGaEI7QUFXRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQVRKO0FBV0k7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsYUFBQTtFQVJKO0FBQ0Y7O0FBWUE7RUFDRSx5QkQ1R2M7RUM2R2QsWUFBQTtBQVRGO0FBV0U7RUFKRjtJQUtJLG1CQUFBO0VBUkY7QUFDRjs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQVJGO0FBVUU7RUFKRjtJQUtJLG1CQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0FBUEY7O0FBWUk7RUFDRSwyQkFBQTtBQVROO0FBWUk7RUFDRSxnQkFBQTtBQVZOO0FBWU07RUFIRjtJQUlJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFUTjtBQUNGO0FBYU07RUFDRSxnQkFBQTtBQVhSO0FBYVE7RUFIRjtJQUlJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFWUjtBQUNGO0FBYU07RUFDRSxpQkFBQTtBQVhSO0FBYVE7RUFIRjtJQUlJLGtCQUFBO0VBVlI7QUFDRjtBQWVVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBYloiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogI2U2ZTllZTtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjMGQwZTEyO1xyXG4kV2hpdGUgICAgICAgIDogIzE5MWUyNTtcclxuJEdyZWVuICAgICAgICA6ICM0MGFmOTU7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwOyAvLyBFbnN1cmUgd3JhcHBpbmcgb24gc21hbGxlciBzY3JlZW5zXHJcbiAgfVxyXG5cclxuICAuY29sLW1kLTYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGllLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hcmtldC1zdGF0dXMge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgICAuY29sLW1kLTYge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXJrZXQtc3VtbWFyeS10YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgICAgIHRkLCB0aCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtcHJpbWFyeSB7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmpvYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICROYXZ5O1xyXG5cclxuICAuam9icy1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnksIC5idG4tbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeS5hY3RpdmUsIC5idG4tbGlnaHQuYWN0aXZlIHtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTYge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmtldC1zdGF0dXMge1xyXG4gICAgICAuY29sLW1kLTYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgXHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hcmtldC1zdW1tYXJ5LXRhYmxlIHtcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const statement_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](statement_r5.type1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 6, statement_r5.lastUpdated, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("download", "", statement_r5.isin, "_FinancialStatement.pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", statement_r5.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, "Download"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BonusAssembliesComponent_ng_container_33_tr_14_Template, 10, 11, "tr", 15);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const report_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r6.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 6, report_r6.annDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("download", "", report_r6.isin, "_report.pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", report_r6.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, "Download"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BonusAssembliesComponent_ng_container_41_tr_14_Template, 10, 11, "tr", 15);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const announcement_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](announcement_r7.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 6, announcement_r7.annDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("download", "", announcement_r7.isin, "_Announcement.pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", announcement_r7.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, "Download"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BonusAssembliesComponent_ng_container_49_tr_14_Template, 10, 11, "tr", 15);
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
      this.assembliesData = data;
    });
  }
  loadFinancialStatements() {
    this.marketSummaryService.getCompaniesFinancialStatements(this.stockIsin).subscribe(data => {
      this.financialStatementsData = data.map(statement => ({
        ...statement,
        downloadUrl: this.createDownloadUrl(this.base64ToArrayBuffer(statement.dataContent))
      }));
    });
  }
  loadAuditReports() {
    this.marketSummaryService.getAuditReportsForStock(this.stockIsin).subscribe(data => {
      this.auditReportsData = data.map(report => ({
        ...report,
        downloadUrl: this.createDownloadUrl(this.base64ToArrayBuffer(report.annContent))
      }));
    });
  }
  loadAnnouncements() {
    this.marketSummaryService.getAnnouncementsForStock(this.stockIsin).subscribe(data => {
      this.announcementsData = data.map(announcement => ({
        ...announcement,
        downloadUrl: this.createDownloadUrl(this.base64ToArrayBuffer(announcement.annContent))
      }));
    });
  }
  createDownloadUrl(data) {
    const blob = new Blob([data], {
      type: 'application/pdf'
    });
    return URL.createObjectURL(blob);
  }
  revokeUrl(url) {
    URL.revokeObjectURL(url);
  }
  base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
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
    consts: [["noBonusShares", ""], ["noAssemblies", ""], ["noInsiderActions", ""], ["noFinancialStatements", ""], ["noAuditReports", ""], ["noAnnouncements", ""], [1, "container", "mt-4", "bonus-assemblies-container", 3, "dir"], [1, "row"], [1, "col-12", "col-md-6"], [1, "table-title"], [1, "table-container"], [4, "ngIf", "ngIfElse"], [1, "row", "insider-actions-container"], [1, "col-12", "col-md-6", "contai"], [1, "table", "table-bordered", "table-responsive"], [4, "ngFor", "ngForOf"], [1, "no-content-message", "text-center"], [1, "btn", "btn-primary", 3, "href", "download"]],
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
        const noBonusShares_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        const noAssemblies_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        const noInsiderActions_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        const noFinancialStatements_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
        const noAuditReports_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        const noAnnouncements_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 19, "Direction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 21, "BonusShares"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bonusSharesData && ctx.bonusSharesData.length > 0)("ngIfElse", noBonusShares_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 23, "GeneralAssemblies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.assembliesData && ctx.assembliesData.length > 0)("ngIfElse", noAssemblies_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 25, "InsiderActions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.insiderTradingData && ctx.insiderTradingData.length > 0)("ngIfElse", noInsiderActions_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 27, "CompaniesFinancialStatements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.financialStatementsData && ctx.financialStatementsData.length > 0)("ngIfElse", noFinancialStatements_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 29, "AuditReports"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auditReportsData && ctx.auditReportsData.length > 0)("ngIfElse", noAuditReports_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 31, "Announcements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.announcementsData && ctx.announcementsData.length > 0)("ngIfElse", noAnnouncements_r13);
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
    styles: ["\n\n.jobs[_ngcontent-%COMP%] {\n  background-color: #e6e9ee;\n  padding-top: 10%;\n  margin-top: 30px;\n  padding-bottom: 35%;\n}\n.jobs[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.jobs[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  cursor: pointer;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n.jobs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.info-chart-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n@media (max-width: 768px) {\n  .info-chart-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 10px;\n}\n.chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n\n.details-section-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 10px;\n  height: 300px;\n  overflow: auto;\n}\n\n.details-section[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.details-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.bigger-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #000;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-news-container[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.info-news-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background-color: #fff;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n.info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%]   .dividends-table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: #f4f4f4;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 1.2em;\n  margin-bottom: 5px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  margin: 5px 0;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #cccccc;\n  cursor: not-allowed;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #555;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   .news-attachment[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   .news-attachment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]   .news-details[_ngcontent-%COMP%]   .news-attachment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n@media (max-width: 768px) {\n  .info-news-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .info-news-container[_ngcontent-%COMP%]   .dividends-column[_ngcontent-%COMP%] {\n    padding-right: 0;\n    margin-bottom: 20px;\n  }\n  .info-news-container[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .jobs-inner[_ngcontent-%COMP%] {\n    margin-top: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay1kZXRhaWxzL3N0b2NrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNFLHlCRERjO0VDRWQsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFBTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBRko7QUFJSTs7RUFFRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUZOO0FBS0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFITjtBQU1JO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBSk47QUFPSTtFQUNFLFlBQUE7QUFMTjtBQVFJO0VBQ0UsVUFBQTtBQU5OOztBQVdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVJGO0FBVUU7RUFORjtJQU9JLHNCQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVBKOztBQVdBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVlFO0VBQ0UsaUJBQUE7QUFUSjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjtBQVdFO0VBQ0UsbUJBQUE7QUFUSjs7QUFhQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBVko7QUFZSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVZOO0FBWU07RUFDRSxtQkFBQTtBQVZSO0FBY1E7RUFDRSx5QkFBQTtBQVpWO0FBZVE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFiVjtBQW9CRTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtBQWxCSjtBQW9CSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWxCTjtBQXFCSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQW5CTjtBQXFCTTtFQUNFLHlCQUFBO0FBbkJSO0FBc0JNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFwQlI7QUF1Qk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQXJCUjtBQXdCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQXRCUjtBQXdCUTtFQUNFLHlCQUFBO0FBdEJWO0FBMkJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXpCTjtBQTJCTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBekJSO0FBMkJRO0VBQ0UseUJBQUE7QUF6QlY7QUE0QlE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBMUJWO0FBOEJNO0VBQ0UsV0FBQTtBQTVCUjtBQWlDTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUEvQlI7QUFpQ1E7RUFDRSx5QkFBQTtBQS9CVjtBQW1DTTtFQUNFLFdBQUE7QUFqQ1I7QUFvQ007RUFDRSxXQUFBO0FBbENSO0FBcUNNO0VBQ0UsZ0JBQUE7QUFuQ1I7QUFxQ1E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBbkNWO0FBcUNVO0VBQ0UsY0FBQTtBQW5DWjtBQTBDRTtFQXhKRjtJQXlKSSxzQkFBQTtFQXZDRjtFQXlDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUF2Q0o7RUEwQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUF4Q0o7QUFDRjs7QUEyQ0E7RUFDRTtJQUNFLGVBQUE7RUF4Q0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjZTZlOWVlO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICMwZDBlMTI7XHJcbiRXaGl0ZSAgICAgICAgOiAjMTkxZTI1O1xyXG4kR3JlZW4gICAgICAgIDogIzQwYWY5NTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uam9icyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJE5hdnk7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNSU7XHJcblxyXG4gIC5kcm9wZG93bi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mby1jaGFydC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgY2FudmFzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWxzLXNlY3Rpb24tY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZGV0YWlscy1zZWN0aW9uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZGV0YWlscy1zZWN0aW9uIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmJpZ2dlci10ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5pbmZvLW5ld3MtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAubmV3cy1jb2x1bW4ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbmZvLW5ld3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIFxyXG4gIC5kaXZpZGVuZHMtY29sdW1uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgXHJcbiAgICAuZGl2aWRlbmRzLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUge1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCwgdGgge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5ld3MtY29sdW1uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgLm5ld3MtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAubmV3cy1pdGVtIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9uLWNvbnRyb2xzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld3MtZGV0YWlscyB7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5ld3MtYXR0YWNobWVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNTZiMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgLmRpdmlkZW5kcy1jb2x1bW4ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXdzLWNvbHVtbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmpvYnMtaW5uZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNzAlO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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