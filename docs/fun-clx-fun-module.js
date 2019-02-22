(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fun-clx-fun-module"],{

/***/ "./src/app/fun/clx-fun-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/fun/clx-fun-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ClxFunRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClxFunRoutingModule", function() { return ClxFunRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fun_clx_fun_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fun/clx-fun.component */ "./src/app/fun/fun/clx-fun.component.ts");




var routes = [{ path: '', component: _fun_clx_fun_component__WEBPACK_IMPORTED_MODULE_3__["ClxFunComponent"] }];
var ClxFunRoutingModule = /** @class */ (function () {
    function ClxFunRoutingModule() {
    }
    ClxFunRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClxFunRoutingModule);
    return ClxFunRoutingModule;
}());



/***/ }),

/***/ "./src/app/fun/clx-fun.module.ts":
/*!***************************************!*\
  !*** ./src/app/fun/clx-fun.module.ts ***!
  \***************************************/
/*! exports provided: ClxFunModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClxFunModule", function() { return ClxFunModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _clx_fun_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clx-fun-routing.module */ "./src/app/fun/clx-fun-routing.module.ts");
/* harmony import */ var _fun_clx_fun_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fun/clx-fun.component */ "./src/app/fun/fun/clx-fun.component.ts");
/* harmony import */ var _shared_clx_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/clx-shared.module */ "./src/app/shared/clx-shared.module.ts");






var ClxFunModule = /** @class */ (function () {
    function ClxFunModule() {
    }
    ClxFunModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_fun_clx_fun_component__WEBPACK_IMPORTED_MODULE_4__["ClxFunComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _clx_fun_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClxFunRoutingModule"], _shared_clx_shared_module__WEBPACK_IMPORTED_MODULE_5__["ClxSharedModule"]]
        })
    ], ClxFunModule);
    return ClxFunModule;
}());



/***/ }),

/***/ "./src/app/fun/fun/clx-fun.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fun/fun/clx-fun.component.ts ***!
  \**********************************************/
/*! exports provided: ClxFunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClxFunComponent", function() { return ClxFunComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ClxFunComponent = /** @class */ (function () {
    function ClxFunComponent() {
    }
    ClxFunComponent.prototype.ngOnInit = function () { };
    ClxFunComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'clx-fun',
            template: "\n    <cui-snake></cui-snake>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClxFunComponent);
    return ClxFunComponent;
}());



/***/ })

}]);
//# sourceMappingURL=fun-clx-fun-module.js.map