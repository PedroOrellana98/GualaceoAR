"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privado_calle_calle_module_ts"],{

/***/ 204:
/*!*******************************************************!*\
  !*** ./src/app/privado/calle/calle-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallePageRoutingModule": () => (/* binding */ CallePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _calle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calle.page */ 4479);




const routes = [
    {
        path: '',
        component: _calle_page__WEBPACK_IMPORTED_MODULE_0__.CallePage
    }
];
let CallePageRoutingModule = class CallePageRoutingModule {
};
CallePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CallePageRoutingModule);



/***/ }),

/***/ 3338:
/*!***********************************************!*\
  !*** ./src/app/privado/calle/calle.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallePageModule": () => (/* binding */ CallePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _calle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calle-routing.module */ 204);
/* harmony import */ var _calle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calle.page */ 4479);







let CallePageModule = class CallePageModule {
};
CallePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calle_routing_module__WEBPACK_IMPORTED_MODULE_0__.CallePageRoutingModule
        ],
        declarations: [_calle_page__WEBPACK_IMPORTED_MODULE_1__.CallePage]
    })
], CallePageModule);



/***/ }),

/***/ 4479:
/*!*********************************************!*\
  !*** ./src/app/privado/calle/calle.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallePage": () => (/* binding */ CallePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _calle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calle.page.html?ngResource */ 5199);
/* harmony import */ var _calle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calle.page.scss?ngResource */ 7622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CallePage = class CallePage {
    constructor() { }
    ngOnInit() {
    }
};
CallePage.ctorParameters = () => [];
CallePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calle',
        template: _calle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CallePage);



/***/ }),

/***/ 7622:
/*!**********************************************************!*\
  !*** ./src/app/privado/calle/calle.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5199:
/*!**********************************************************!*\
  !*** ./src/app/privado/calle/calle.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>calle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privado_calle_calle_module_ts.js.map