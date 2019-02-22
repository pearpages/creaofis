(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/bss-business/fesm5/bss-business.js":
/*!*********************************************************************************!*\
  !*** /Users/pearpages/Desktop/creaofis/dist/bss-business/fesm5/bss-business.js ***!
  \*********************************************************************************/
/*! exports provided: BssBusinessService, BssBusinessComponent, BssBusinessModule, RemoteDataKind, NotAsked, Pending, Success, Failure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BssBusinessService", function() { return BssBusinessService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BssBusinessComponent", function() { return BssBusinessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BssBusinessModule", function() { return BssBusinessModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteDataKind", function() { return RemoteDataKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAsked", function() { return NotAsked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pending", function() { return Pending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Failure", function() { return Failure; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BssBusinessService = /** @class */ (function () {
    function BssBusinessService() {
    }
    BssBusinessService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BssBusinessService.ctorParameters = function () { return []; };
    /** @nocollapse */ BssBusinessService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BssBusinessService_Factory() { return new BssBusinessService(); }, token: BssBusinessService, providedIn: "root" });
    return BssBusinessService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BssBusinessComponent = /** @class */ (function () {
    function BssBusinessComponent() {
    }
    /**
     * @return {?}
     */
    BssBusinessComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    BssBusinessComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bss-bss-business',
                    template: "\n    <p>\n      bss-business works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    BssBusinessComponent.ctorParameters = function () { return []; };
    return BssBusinessComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BssBusinessModule = /** @class */ (function () {
    function BssBusinessModule() {
    }
    BssBusinessModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [BssBusinessComponent],
                    imports: [],
                    exports: [BssBusinessComponent]
                },] }
    ];
    return BssBusinessModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var RemoteDataKind = {
    NotAsked: 'NotAsked',
    Pending: 'Pending',
    Success: 'Success',
    Failure: 'Failure',
};
var NotAsked = /** @class */ (function () {
    function NotAsked() {
        this.kind = RemoteDataKind.NotAsked;
    }
    return NotAsked;
}());
var Pending = /** @class */ (function () {
    function Pending() {
        this.kind = RemoteDataKind.Pending;
    }
    return Pending;
}());
/**
 * @template A
 */
var  /**
 * @template A
 */
Success = /** @class */ (function () {
    function Success(value) {
        this.value = value;
        this.kind = RemoteDataKind.Success;
    }
    return Success;
}());
/**
 * @template E
 */
var  /**
 * @template E
 */
Failure = /** @class */ (function () {
    function Failure(value) {
        this.value = value;
        this.kind = RemoteDataKind.Failure;
    }
    return Failure;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=bss-business.js.map

/***/ }),

/***/ "../../dist/cui-ui/fesm5/cui-ui.js":
/*!*********************************************************************!*\
  !*** /Users/pearpages/Desktop/creaofis/dist/cui-ui/fesm5/cui-ui.js ***!
  \*********************************************************************/
/*! exports provided: CuiUiModule, ɵa, ɵf, ɵg, ɵe, ɵd, ɵc, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuiUiModule", function() { return CuiUiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CuiCheckedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return CuiCityForecastFailureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CuiCityForecastNotAskedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CuiCityForecastPendingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CuiCityForecastSuccessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CuiCityForecastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CuiSnakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var bss_business__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bss-business */ "../../dist/bss-business/fesm5/bss-business.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CuiCheckedComponent = /** @class */ (function () {
    function CuiCheckedComponent() {
        this.checked = 'checked';
    }
    /**
     * @return {?}
     */
    CuiCheckedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CuiCheckedComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'cui-checked',
                    template: "\n    <input type=\"checkbox\" disabled [checked]=\"checked\" />\n  "
                }] }
    ];
    /** @nocollapse */
    CuiCheckedComponent.ctorParameters = function () { return []; };
    CuiCheckedComponent.propDecorators = {
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CuiCheckedComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CuiSnakeComponent = /** @class */ (function () {
    function CuiSnakeComponent() {
    }
    /**
     * @return {?}
     */
    CuiSnakeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CuiSnakeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'cui-snake',
                    template: "\n    <iframe src=\"https://pearpages.com/games/snake\" width=\"600px\" height=\"600px\" frameborder=\"0\"></iframe>\n  "
                }] }
    ];
    /** @nocollapse */
    CuiSnakeComponent.ctorParameters = function () { return []; };
    return CuiSnakeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CuiCityForecastComponent = /** @class */ (function () {
    function CuiCityForecastComponent() {
        this.remoteDataKind = bss_business__WEBPACK_IMPORTED_MODULE_2__["RemoteDataKind"];
        this.weatherResponse = new bss_business__WEBPACK_IMPORTED_MODULE_2__["NotAsked"]();
    }
    /**
     * @param {?} weatherResponse
     * @return {?}
     */
    CuiCityForecastComponent.prototype.getGenericError = /**
     * @param {?} weatherResponse
     * @return {?}
     */
    function (weatherResponse) {
        if (weatherResponse.kind === bss_business__WEBPACK_IMPORTED_MODULE_2__["RemoteDataKind"].Failure) {
            return weatherResponse.value;
        }
        return null;
    };
    /**
     * @param {?} weatherResponse
     * @return {?}
     */
    CuiCityForecastComponent.prototype.getWeatherData = /**
     * @param {?} weatherResponse
     * @return {?}
     */
    function (weatherResponse) {
        if (weatherResponse.kind === bss_business__WEBPACK_IMPORTED_MODULE_2__["RemoteDataKind"].Success) {
            return weatherResponse.value;
        }
        return null;
    };
    CuiCityForecastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'cui-city-forecast',
                    template: "\n    <div class=\"cui-city-forecast\" [ngSwitch]=\"weatherResponse.kind\">\n      <cui-city-forecast-pending *ngSwitchCase=\"remoteDataKind.Pending\"></cui-city-forecast-pending>\n      <cui-city-forecast-success\n        *ngSwitchCase=\"remoteDataKind.Success\"\n        [weatherData]=\"getWeatherData(weatherResponse)\"\n      ></cui-city-forecast-success>\n      <cui-city-forecast-failure\n        *ngSwitchCase=\"remoteDataKind.Failure\"\n        [genericError]=\"getGenericError(weatherResponse)\"\n      ></cui-city-forecast-failure>\n      <cui-city-forecast-not-asked *ngSwitchDefault></cui-city-forecast-not-asked>\n    </div>\n  ",
                    styles: ["\n      .cui-city-forecast {\n        min-height: 630px;\n        width: 310px;\n        border: 1px dotted #ddd;\n        border-radius: 6px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n      }\n    "]
                }] }
    ];
    CuiCityForecastComponent.propDecorators = {
        weatherResponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CuiCityForecastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CuiCityForecastSuccessComponent = /** @class */ (function () {
    function CuiCityForecastSuccessComponent() {
    }
    /**
     * @return {?}
     */
    CuiCityForecastSuccessComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CuiCityForecastSuccessComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'cui-city-forecast-success',
                    template: "\n    <div class=\"cui-city-forecast-success\">\n      <h4 class=\"cui-city-forecast-success__title\">\n        Forecast for {{ weatherData.name }} ({{ weatherData.sys.country }}) ID: {{ weatherData.id }} COD:\n        {{ weatherData.cod }}\n      </h4>\n      <dl class=\"cui-city-forecast-success__info\">\n        <dt class=\"cui-city-forecast-success__info-label\">Coord</dt>\n        <dl>lon: {{ weatherData.coord.lon }}, lat: {{ weatherData.coord.lat }}</dl>\n        <dt class=\"cui-city-forecast-success__info-label\">Weather</dt>\n        <dd>\n          <dl *ngFor=\"let weather of weatherData.weather\">\n            <dt class=\"cui-city-forecast-success__info-label\">id</dt>\n            <dd>{{ weather.id }}</dd>\n            <dt class=\"cui-city-forecast-success__info-label\">main</dt>\n            <dd>{{ weather.main }}</dd>\n            <dt class=\"cui-city-forecast-success__info-label\">description</dt>\n            <dd>{{ weather.description }}</dd>\n            <dt class=\"cui-city-forecast-success__info-label\">icon</dt>\n            <dd>{{ weather.icon }}</dd>\n          </dl>\n        </dd>\n        <dt class=\"cui-city-forecast-success__info-label\">base</dt>\n        <dd>{{ weatherData.base }}</dd>\n        <dt class=\"cui-city-forecast-success__info-label\">main</dt>\n        <dd>\n          <dl>\n            <dt>temp</dt>\n            <dd>{{ weatherData.main.temp }}</dd>\n            <dt>pressure</dt>\n            <dd>{{ weatherData.main.pressure }}</dd>\n            <dt>humidity</dt>\n            <dd>{{ weatherData.main.humidity }}</dd>\n            <dt>temp_min</dt>\n            <dd>{{ weatherData.main.temp_min }}</dd>\n            <dt>temp_max</dt>\n            <dd>{{ weatherData.main.temp_max }}</dd>\n          </dl>\n        </dd>\n        <dt class=\"cui-city-forecast-success__info-label\">visibility</dt>\n        <dd>{{ weatherData.visibility }}</dd>\n        <dt class=\"cui-city-forecast-success__info-label\">wind</dt>\n        <dd>{{ weatherData.wind.speed }}</dd>\n        <dt class=\"cui-city-forecast-success__info-label\">clouds</dt>\n        <dd>{{ weatherData.clouds.all }}</dd>\n        <dt class=\"cui-city-forecast-success__info-label\">dt</dt>\n        <dd>{{ weatherData.dt }}</dd>\n        <dt class=\"cui-city-forecast-success__info-label\">sys</dt>\n        <dd>\n          <dl>\n            <dt>type/id</dt>\n            <dd>{{ weatherData.sys.type }}/{{ weatherData.sys.id }}</dd>\n            <dt>message</dt>\n            <dd>{{ weatherData.sys.message }}</dd>\n            <dt>sunrise</dt>\n            <dd>{{ weatherData.sys.sunrise | date }}</dd>\n            <dt>sunset</dt>\n            <dd>{{ weatherData.sys.sunset | date }}</dd>\n          </dl>\n        </dd>\n      </dl>\n    </div>\n  ",
                    styles: [".cui-city-forecast-success{font-size:10px}.cui-city-forecast-success__title{font-size:12px}.cui-city-forecast-success__info-label{font-size:12px;font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    CuiCityForecastSuccessComponent.ctorParameters = function () { return []; };
    CuiCityForecastSuccessComponent.propDecorators = {
        weatherData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CuiCityForecastSuccessComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CuiCityForecastFailureComponent = /** @class */ (function () {
    function CuiCityForecastFailureComponent() {
    }
    /**
     * @return {?}
     */
    CuiCityForecastFailureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CuiCityForecastFailureComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'cui-city-forecast-failure',
                    template: "\n    {{ genericError.message }}\n  "
                }] }
    ];
    /** @nocollapse */
    CuiCityForecastFailureComponent.ctorParameters = function () { return []; };
    CuiCityForecastFailureComponent.propDecorators = {
        genericError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CuiCityForecastFailureComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CuiCityForecastPendingComponent = /** @class */ (function () {
    function CuiCityForecastPendingComponent() {
    }
    /**
     * @return {?}
     */
    CuiCityForecastPendingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CuiCityForecastPendingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'cui-city-forecast-pending',
                    template: "\n    Fetching data...\n  "
                }] }
    ];
    /** @nocollapse */
    CuiCityForecastPendingComponent.ctorParameters = function () { return []; };
    return CuiCityForecastPendingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CuiCityForecastNotAskedComponent = /** @class */ (function () {
    function CuiCityForecastNotAskedComponent() {
    }
    /**
     * @return {?}
     */
    CuiCityForecastNotAskedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CuiCityForecastNotAskedComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'cui-city-forecast-not-asked',
                    template: "\n    Component just loaded.\n  "
                }] }
    ];
    /** @nocollapse */
    CuiCityForecastNotAskedComponent.ctorParameters = function () { return []; };
    return CuiCityForecastNotAskedComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var exportedComponents = [
    CuiCheckedComponent,
    CuiSnakeComponent,
    CuiCityForecastComponent,
    CuiCityForecastSuccessComponent,
    CuiCityForecastPendingComponent,
    CuiCityForecastFailureComponent,
    CuiCityForecastNotAskedComponent
];
var CuiUiModule = /** @class */ (function () {
    function CuiUiModule() {
    }
    CuiUiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(exportedComponents),
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(exportedComponents)
                },] }
    ];
    return CuiUiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=cui-ui.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fun/clx-fun.module": [
		"./src/app/fun/clx-fun.module.ts",
		"fun-clx-fun-module"
	],
	"./weather/clx-weather.module": [
		"./src/app/weather/clx-weather.module.ts",
		"weather-clx-weather-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_landing_clx_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/landing/clx-landing.component */ "./src/app/shared/landing/clx-landing.component.ts");




var routes = [
    {
        path: 'fun',
        loadChildren: './fun/clx-fun.module#ClxFunModule'
    },
    {
        path: 'weather',
        loadChildren: './weather/clx-weather.module#ClxWeatherModule'
    },
    {
        path: '**',
        component: _shared_landing_clx_landing_component__WEBPACK_IMPORTED_MODULE_3__["ClxLandingComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span [routerLink]=\"['/']\">Creaofis POC</span>\n  <a mat-button [routerLink]=\"['/fun']\" routerLinkActive=\"router-link-active\">fun</a>\n  <a mat-button [routerLink]=\"['/weather']\" routerLinkActive=\"router-link-active\">weather</a>\n</mat-toolbar>\n<main class=\"clx-main\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clx-main {\n  padding: 10px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWFycGFnZXMvRGVza3RvcC9jcmVhb2Zpcy9wcm9qZWN0cy9jbHgtY3JlYW9maXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9jbHgtY3JlYW9maXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2x4LW1haW4ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // left in order to have some test running
        this.title = 'creaofis';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'clx-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _shared_clx_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/clx-shared.module */ "./src/app/shared/clx-shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_11__["appReducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                !_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
                _shared_clx_shared_module__WEBPACK_IMPORTED_MODULE_7__["ClxSharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm5/router-store.js");

// TODO: create interfaces
var configReducers = function (state, action) {
    if (state === void 0) { state = { data: 'to be filled in the future' }; }
    switch (action.type) {
        default:
            return state;
    }
};
var appReducers = {
    config: configReducers,
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
};


/***/ }),

/***/ "./src/app/shared/clx-shared.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/clx-shared.module.ts ***!
  \*********************************************/
/*! exports provided: ClxSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClxSharedModule", function() { return ClxSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var cui_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cui-ui */ "../../dist/cui-ui/fesm5/cui-ui.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _landing_clx_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/clx-landing.component */ "./src/app/shared/landing/clx-landing.component.ts");







var material2 = [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]];
var ClxSharedModule = /** @class */ (function () {
    function ClxSharedModule() {
    }
    ClxSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_landing_clx_landing_component__WEBPACK_IMPORTED_MODULE_6__["ClxLandingComponent"]],
            imports: material2.concat([_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], cui_ui__WEBPACK_IMPORTED_MODULE_3__["CuiUiModule"]]),
            exports: material2.concat([_landing_clx_landing_component__WEBPACK_IMPORTED_MODULE_6__["ClxLandingComponent"], cui_ui__WEBPACK_IMPORTED_MODULE_3__["CuiUiModule"]])
        })
    ], ClxSharedModule);
    return ClxSharedModule;
}());



/***/ }),

/***/ "./src/app/shared/landing/clx-landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/landing/clx-landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Realizar un pequeño sistema en donde haciendo uso de la siguiente API <strong>https://openweathermap.org/api</strong>,\n  y usando la última versión de Angular se demuestren la utilización de los siguientes conceptos:\n</p>\n\n<ul>\n  <li><cui-checked></cui-checked>Features Modules</li>\n  <li>\n    <cui-checked></cui-checked>Creación de Componentes Genéricos reutilizable.\n    <ul>\n      <li><cui-checked></cui-checked>Exportar a Librería su UI y behaviors</li>\n      <li>\n        <cui-checked></cui-checked>Implementar en el proyecto en al menos dos instancias del componente donde se pueda\n        observar diferente aspecto y la reutilización del mismo.\n      </li>\n    </ul>\n  </li>\n  <li><cui-checked [checked]=\"false\"></cui-checked>Implementación de NGRX.</li>\n  <li><cui-checked></cui-checked>Implementación de RXJS.</li>\n  <li>\n    <cui-checked [checked]=\"false\"></cui-checked>El sistema debería de tener como mínimo 2 funcionalidades diferentes\n    por ejemplo cambio de ciudad.\n  </li>\n  <li><cui-checked [checked]=\"false\"></cui-checked>Opcional Test Unitario del módulo desarrollado.</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/landing/clx-landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/landing/clx-landing.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbHgtY3JlYW9maXMvc3JjL2FwcC9zaGFyZWQvbGFuZGluZy9jbHgtbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/landing/clx-landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/landing/clx-landing.component.ts ***!
  \*********************************************************/
/*! exports provided: ClxLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClxLandingComponent", function() { return ClxLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ClxLandingComponent = /** @class */ (function () {
    function ClxLandingComponent() {
    }
    ClxLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'clx-landing',
            template: __webpack_require__(/*! ./clx-landing.component.html */ "./src/app/shared/landing/clx-landing.component.html"),
            styles: [__webpack_require__(/*! ./clx-landing.component.scss */ "./src/app/shared/landing/clx-landing.component.scss")]
        })
    ], ClxLandingComponent);
    return ClxLandingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pearpages/Desktop/creaofis/projects/clx-creaofis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map