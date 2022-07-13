"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registrar_registrar_module_ts"],{

/***/ 8542:
/*!*******************************************************!*\
  !*** ./src/app/registrar/registrar-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPageRoutingModule": () => (/* binding */ RegistrarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar.page */ 7395);




const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_0__.RegistrarPage
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrarPageRoutingModule);



/***/ }),

/***/ 7811:
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPageModule": () => (/* binding */ RegistrarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-routing.module */ 8542);
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar.page */ 7395);







let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registrar_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrarPageRoutingModule
        ],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_1__.RegistrarPage]
    })
], RegistrarPageModule);



/***/ }),

/***/ 7395:
/*!*********************************************!*\
  !*** ./src/app/registrar/registrar.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPage": () => (/* binding */ RegistrarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registrar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar.page.html?ngResource */ 8341);
/* harmony import */ var _registrar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar.page.scss?ngResource */ 4887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _domain_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/usuario */ 7793);
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/usuarios.service */ 1209);








let RegistrarPage = class RegistrarPage {
    constructor(route, usuarioService, router, menu) {
        this.route = route;
        this.usuarioService = usuarioService;
        this.router = router;
        this.menu = menu;
        this.usuario = new _domain_usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        route.queryParams.subscribe(params => {
            this.nombre = params.nombre;
        });
    }
    ngOnInit() {
        this.usuarios = this.usuarioService.getUsuarios();
    }
    registrar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.usuario.rol = "cliente";
            let user = this.usuarioService.save(this.usuario);
            if (user == true) {
                let params = {
                    queryParams: {
                        usr: this.usuario
                    }
                };
                this.router.navigate(['login'], params);
            }
        });
    }
    regresar() {
        this.router.navigate(['login']);
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
};
RegistrarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__.UsuariosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
RegistrarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registrar',
        template: _registrar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registrar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrarPage);



/***/ }),

/***/ 4887:
/*!**********************************************************!*\
  !*** ./src/app/registrar/registrar.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  background: #FFFFFF;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(45deg, #3d967b 0%, rgba(74, 171, 150, 0.8) 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n\n#imagen {\n  width: 15%;\n}\n\n#botonEnviar {\n  float: left;\n  width: 35%;\n  margin-left: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0RBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFHQSw0RUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoicmVnaXN0cmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkMSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5jb250YWllci1sb2dpbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5cclxuLnJvdzEge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg2MSwgNjYsIDE1MCwgMSkgMCUsIHJnYmEoODQsIDc0LCAxNzEsIDAuOCkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg2MSwgNjYsIDE1MCwgMSkgMCUsIHJnYmEoODQsIDc0LCAxNzEsIDAuOCkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYig2MSwgMTUwLCAxMjMpIDAlLCByZ2JhKDc0LCAxNzEsIDE1MCwgMC44KSAxMDAlKTtcclxufVxyXG5cclxuLnJvdzIge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiAge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jaW1hZ2VuIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbiNib3RvbkVudmlhciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG59Il19 */";

/***/ }),

/***/ 8341:
/*!**********************************************************!*\
  !*** ./src/app/registrar/registrar.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid class=\"grid1\">\r\n  \r\n      <ion-row class=\"row1\">\r\n          <ion-col>\r\n  \r\n          </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"row2\">\r\n          <ion-col>\r\n  \r\n          </ion-col>\r\n      </ion-row>\r\n  \r\n  </ion-grid>\r\n  \r\n  <ion-slide>\r\n      <div class=\"contaier-login\">\r\n          <ion-grid>\r\n              <ion-row>\r\n                  <ion-col>\r\n                      <img src=\"../../assets/icon/GIP4C.jpeg\" id=\"imagen\">\r\n                      <h1 style=\"color: black;\">Registrar Usuario</h1>\r\n                  </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                  <ion-col>\r\n                      <ion-list>\r\n                        <ion-item>\r\n                            <ion-icon name=\"id-card\" class=\"icon-login\"></ion-icon>\r\n                            <ion-input name=\"id\" type=\"text\" required placeholder=\"Cedula\" [(ngModel)]=\"usuario.cedula\"></ion-input>\r\n                        </ion-item>\r\n                        <br />\r\n                          <ion-item>\r\n                            <ion-icon name=\"person\" class=\"icon-login\"></ion-icon>\r\n                            <ion-input name=\"name\" type=\"text\" required placeholder=\"Nombre\" [(ngModel)]=\"usuario.nombre\"></ion-input>\r\n                        </ion-item>\r\n                        <br />\r\n                          <ion-item>\r\n                            <ion-icon name=\"person\" class=\"icon-login\"></ion-icon>\r\n                            <ion-input name=\"lastname\" type=\"text\" required placeholder=\"Apellido\" [(ngModel)]=\"usuario.apellido\"></ion-input>\r\n                        </ion-item>\r\n                        <br />\r\n                          <ion-item>\r\n                              <ion-icon name=\"mail\" class=\"icon-login\"></ion-icon>\r\n                              <ion-input name=\"user\" type=\"text\" required placeholder=\"Correo\" [(ngModel)]=\"usuario.correo\"></ion-input>\r\n                          </ion-item>\r\n                          <br />\r\n                          <ion-item>\r\n                              <ion-icon name=\"lock-closed\" class=\"icon-login\"></ion-icon>\r\n                              <ion-input name=\"password\" type=\"password\" required placeholder=\"Contraseña\" [(ngModel)]=\"usuario.clave\"></ion-input>\r\n                          </ion-item>\r\n                          <br />\r\n                          <ion-item>\r\n                            <ion-icon name=\"call\" class=\"icon-login\"></ion-icon>\r\n                            <ion-input name=\"phone\" type=\"text\" required placeholder=\"Telefono\" [(ngModel)]=\"usuario.telefono\"></ion-input>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                  </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                  <ion-col>\r\n                      <ion-label>\r\n                        <ion-button id=\"botonEnviar\" color=\"primary\" shape=\"round\" fill=\"solid\"(click)=\"registrar()\">Registrarse</ion-button>\r\n                        <!--<ion-button id=\"botonEnviar\" color=\"primary\" shape=\"round\" fill=\"solid\"(click)=\"regresar()\">Log In</ion-button>-->\r\n                      </ion-label>\r\n                  </ion-col>\r\n              </ion-row>\r\n          </ion-grid>\r\n        \r\n      </div>\r\n  </ion-slide>";

/***/ })

}]);
//# sourceMappingURL=src_app_registrar_registrar_module_ts.js.map