"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privado_acueducto_acueducto_module_ts"],{

/***/ 8558:
/*!***************************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcueductoPageRoutingModule": () => (/* binding */ AcueductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _acueducto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acueducto.page */ 3499);




const routes = [
    {
        path: '',
        component: _acueducto_page__WEBPACK_IMPORTED_MODULE_0__.AcueductoPage
    }
];
let AcueductoPageRoutingModule = class AcueductoPageRoutingModule {
};
AcueductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcueductoPageRoutingModule);



/***/ }),

/***/ 3846:
/*!*******************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcueductoPageModule": () => (/* binding */ AcueductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _acueducto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acueducto-routing.module */ 8558);
/* harmony import */ var _acueducto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acueducto.page */ 3499);







let AcueductoPageModule = class AcueductoPageModule {
};
AcueductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _acueducto_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcueductoPageRoutingModule
        ],
        declarations: [_acueducto_page__WEBPACK_IMPORTED_MODULE_1__.AcueductoPage]
    })
], AcueductoPageModule);



/***/ }),

/***/ 3499:
/*!*****************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcueductoPage": () => (/* binding */ AcueductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _acueducto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acueducto.page.html?ngResource */ 2754);
/* harmony import */ var _acueducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acueducto.page.scss?ngResource */ 4136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AcueductoPage = class AcueductoPage {
    constructor() { }
    ngOnInit() {
    }
};
AcueductoPage.ctorParameters = () => [];
AcueductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-acueducto',
        template: _acueducto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_acueducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AcueductoPage);



/***/ }),

/***/ 4136:
/*!******************************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3VlZHVjdG8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2754:
/*!******************************************************************!*\
  !*** ./src/app/privado/acueducto/acueducto.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>acueducto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privado_acueducto_acueducto_module_ts.js.map