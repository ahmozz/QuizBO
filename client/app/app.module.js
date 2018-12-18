"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var tasks_component_1 = require('./components/tasks/tasks.component');
var NotFound_component_1 = require('./NotFound.component');
var quize_component_1 = require('./components/quize/quize.component');
var quizec_component_1 = require('./components/quize/quizec.component');
var product_component_1 = require('./product.component');
var passage_id_1 = require('./passage.id');
var Home_component_1 = require('./Home.component');
var passage_idC_1 = require('./passage.idC');
var Inventory_component_1 = require('./Inventory.component');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var appRoutes = [
    { path: 'Product/:id', component: passage_id_1.PassageID },
    { path: 'Product', component: product_component_1.Appproduct },
    { path: 'Inventory', component: Inventory_component_1.AppInventory },
    { path: 'Tasks', component: tasks_component_1.TasksComponent },
    { path: 'Sujet', component: quize_component_1.QuizeComponent },
    { path: 'SujetC', component: quizec_component_1.QuizeComponentc },
    { path: 'SujetC/:id', component: passage_idC_1.PassageIDC },
    { path: '', component: Home_component_1.Home },
    { path: '#', component: Home_component_1.Home },
    { path: '**', component: NotFound_component_1.PageNotFoundComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, tasks_component_1.TasksComponent, product_component_1.Appproduct, Inventory_component_1.AppInventory, NotFound_component_1.PageNotFoundComponent, quize_component_1.QuizeComponent, passage_id_1.PassageID, Home_component_1.Home, quizec_component_1.QuizeComponentc, passage_idC_1.PassageIDC],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map