"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privado_iglesia-matriz_iglesia-matriz_module_ts"],{

/***/ 3782:
/*!*************************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaMatrizPageRoutingModule": () => (/* binding */ IglesiaMatrizPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia-matriz.page */ 2722);




const routes = [
    {
        path: '',
        component: _iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_0__.IglesiaMatrizPage
    }
];
let IglesiaMatrizPageRoutingModule = class IglesiaMatrizPageRoutingModule {
};
IglesiaMatrizPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IglesiaMatrizPageRoutingModule);



/***/ }),

/***/ 2733:
/*!*****************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaMatrizPageModule": () => (/* binding */ IglesiaMatrizPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _iglesia_matriz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia-matriz-routing.module */ 3782);
/* harmony import */ var _iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iglesia-matriz.page */ 2722);







let IglesiaMatrizPageModule = class IglesiaMatrizPageModule {
};
IglesiaMatrizPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _iglesia_matriz_routing_module__WEBPACK_IMPORTED_MODULE_0__.IglesiaMatrizPageRoutingModule
        ],
        declarations: [_iglesia_matriz_page__WEBPACK_IMPORTED_MODULE_1__.IglesiaMatrizPage]
    })
], IglesiaMatrizPageModule);



/***/ }),

/***/ 2722:
/*!***************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IglesiaMatrizPage": () => (/* binding */ IglesiaMatrizPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _iglesia_matriz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia-matriz.page.html?ngResource */ 1756);
/* harmony import */ var _iglesia_matriz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iglesia-matriz.page.scss?ngResource */ 772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let IglesiaMatrizPage = class IglesiaMatrizPage {
    constructor(route) {
        this.route = route;
    }
    salir() {
        this.route.navigate(['/login']);
    }
};
IglesiaMatrizPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
IglesiaMatrizPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-iglesia-matriz',
        template: _iglesia_matriz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_iglesia_matriz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IglesiaMatrizPage);



/***/ }),

/***/ 772:
/*!****************************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZ2xlc2lhLW1hdHJpei5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1756:
/*!****************************************************************************!*\
  !*** ./src/app/privado/iglesia-matriz/iglesia-matriz.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Iglesia de Gualaceo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privado_iglesia-matriz_iglesia-matriz_module_ts.js.map