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
var quize_service_1 = require('../../services/quize.service');
var QuizeComponentc = (function () {
    function QuizeComponentc(quizeService) {
        var _this = this;
        this.quizeService = quizeService;
        this.quizeService.getQuize()
            .subscribe(function (tasks) {
            _this.cours = tasks;
        });
    }
    QuizeComponentc.prototype.addCour = function () {
        var _this = this;
        console.log("je suis toto");
        console.log(this.nom);
        var newCour = {
            nom: this.nom,
            description: this.description
        };
        this.quizeService.addCour(newCour)
            .subscribe(function (task) {
            _this.cours.push(task);
            _this.nom = '';
            _this.description = '';
        });
    };
    QuizeComponentc.prototype.ajouterquize = function () {
        console.log("Ajouter Quize");
        var CourUpdate = {
            nom: this.nom,
            description: this.description
        };
    };
    QuizeComponentc = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quize',
            templateUrl: 'quizec.component.html'
        }), 
        __metadata('design:paramtypes', [quize_service_1.QuizeService])
    ], QuizeComponentc);
    return QuizeComponentc;
}());
exports.QuizeComponentc = QuizeComponentc;
//# sourceMappingURL=quizec.component.js.map