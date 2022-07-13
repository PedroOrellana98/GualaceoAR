"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _domain_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/usuario */ 7793);
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/usuarios.service */ 1209);









let LoginPage = class LoginPage {
    constructor(usuarioService, route, afAuth, menu) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.afAuth = afAuth;
        this.menu = menu;
        this.usuario = new _domain_usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        this.usuario2 = new _domain_usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        this.newUsuario = new _domain_usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        this.valUsr = new _domain_usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
    }
    ngOnInit() {
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const correo = this.usuario.correo;
            const clave = this.usuario.clave;
            this.usuarioService.findUser(correo, clave).subscribe(data => {
                this.usuario2 = data[0];
                try {
                    if (this.usuario2.correo == correo && this.usuario2.clave == clave && this.usuario2.rol == 'administrador') {
                        let params = {
                            queryParams: {
                                usuario2: this.usuario2
                            }
                        };
                        this.route.navigate(['privado/iglesia'], params);
                    }
                    else if (this.usuario2.correo == correo && this.usuario2.clave == clave && this.usuario2.rol == 'cliente') {
                        let params = {
                            queryParams: {
                                usuario2: this.usuario2
                            }
                        };
                        this.route.navigate(['privado/iglesia'], params);
                    }
                }
                catch (error) {
                    console.log('Error: ->', error);
                    this.route.navigate(['login']);
                }
            });
        });
    }
    registrar() {
        this.route.navigate(['registrar']);
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__.UsuariosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  background: #FFFFFF;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(45deg, #3d967b 0%, rgba(74, 171, 150, 0.8) 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n\n#imagen {\n  width: 20%;\n}\n\n#botonEnviar {\n  float: left;\n  width: 70%;\n  margin-left: 65%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxnREFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUdBLDRFQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uY29udGFpZXItbG9naW4ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuXHJcbi5yb3cxIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNjEsIDY2LCAxNTAsIDEpIDAlLCByZ2JhKDg0LCA3NCwgMTcxLCAwLjgpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNjEsIDY2LCAxNTAsIDEpIDAlLCByZ2JhKDg0LCA3NCwgMTcxLCAwLjgpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoNjEsIDE1MCwgMTIzKSAwJSwgcmdiYSg3NCwgMTcxLCAxNTAsIDAuOCkgMTAwJSk7XHJcbn1cclxuXHJcbi5yb3cyIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jaW1hZ2VuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbiNib3RvbkVudmlhciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n<ion-content>\r\n\r\n  <ion-grid class=\"grid1\">\r\n  \r\n      <ion-row class=\"row1\">\r\n          <ion-col>\r\n  \r\n          </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"row2\">\r\n          <ion-col>\r\n  \r\n          </ion-col>\r\n      </ion-row>\r\n  \r\n  </ion-grid>\r\n  \r\n  <ion-slide>\r\n      <div class=\"contaier-login\">\r\n          <ion-grid>\r\n              <ion-row>\r\n                  <ion-col>\r\n                      <img src=\"../../assets/icon/GIP4C.jpeg\" id=\"imagen\">\r\n                      <h1 style=\"color: black;\">Iniciar Sesión</h1>\r\n                  </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                  <ion-col>\r\n                      <ion-list>\r\n                          <ion-item>\r\n                              <ion-icon name=\"person\" class=\"icon-login\"></ion-icon>\r\n                              <ion-input name=\"user\" type=\"text\" required placeholder=\"Usuario\" [(ngModel)]=\"usuario.correo\"></ion-input>\r\n                          </ion-item>\r\n                          <br />\r\n                          <ion-item>\r\n                              <ion-icon name=\"lock-closed\" class=\"icon-login\"></ion-icon>\r\n                              <ion-input name=\"password\" type=\"password\" required placeholder=\"Contraseña\" [(ngModel)]=\"usuario.clave\"></ion-input>\r\n                          </ion-item>\r\n\r\n                      </ion-list>\r\n                  </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                  <ion-col>\r\n                      <ion-label>\r\n                        <ion-button id=\"botonEnviar\" color=\"primary\" shape=\"round\" fill=\"solid\"(click)=\"login()\">Login</ion-button>\r\n                        <!--<ion-button id=\"botonEnviar\" color=\"primary\" shape=\"round\" fill=\"solid\"(click)=\"registrar()\">Registrarse</ion-button>-->\r\n                      </ion-label>\r\n                  </ion-col>\r\n                   <ion-col>\r\n                      <ion-label>                       \r\n                      </ion-label>\r\n                  </ion-col>\r\n                  \r\n              </ion-row>\r\n          </ion-grid>\r\n      </div>\r\n  </ion-slide>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map