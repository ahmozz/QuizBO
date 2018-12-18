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
var router_1 = require('@angular/router');
var quize_service_1 = require('./services/quize.service');
var Cour_1 = require('./Cour');
var Cour_2 = require('./Cour');
var Cour_3 = require('./Cour');
var Cour_4 = require('./Cour');
var Cour_5 = require('./Cour');
var PassageIDC = (function () {
    function PassageIDC(_Activatedroute, _router, quizeService) {
        var _this = this;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.quizeService = quizeService;
        this.comptre = 0;
        this.Qui = new Cour_3.Quize("toto", "tata", "1");
        this.part = new Cour_2.Partie("part1", "desc part1");
        this.listre = [];
        this.id = this._Activatedroute.snapshot.params['id'];
        // console.log("id :"+this.id);
        this.envoie = new Cour_1.Cour("ttto", "tiii");
        this.quizeService.getCour(this.id)
            .subscribe(function (tasks) {
            _this.envoie = tasks;
        });
    }
    PassageIDC.prototype.addCour = function () {
        var _this = this;
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
    PassageIDC.prototype.deleteCour = function (id) {
        var cours = this.cours;
        this.quizeService.deleteCour(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < cours.length; i++) {
                    if (cours[i]._id == id) {
                        cours.splice(i, 1);
                    }
                }
            }
        });
    };
    PassageIDC.prototype.updateCour = function () {
        var _this = this;
        if (this.updescription1 && this.upnom) {
            this._cour = new Cour_1.Cour(this.upnom, this.updescription1);
        }
        else if (!this.updescription1) {
            this._cour = new Cour_1.Cour(this.upnom, this.envoie.description);
        }
        else if (!this.upnom) {
            this._cour = new Cour_1.Cour(this.envoie.nom, this.updescription1);
        }
        this._cour._id = this.envoie._id;
        if (this.envoie.parties) {
            this._cour.parties = this.envoie.parties;
        }
        if (this.envoie.quizes) {
            this._cour.quizes = this.envoie.quizes;
        }
        this.quizeService.updateCour(this._cour).subscribe(function (data) {
            _this.quizeService.getQuize()
                .subscribe(function (tasks) {
                _this.cours = tasks;
            });
        });
    };
    PassageIDC.prototype.f = function (cour) {
        this.envoie = cour;
        this.envoie_to_add = cour;
    };
    PassageIDC.prototype.g = function (cour, ti) {
        this.envoie_to_add = cour;
        this.titre_a_modifier = ti;
    };
    PassageIDC.prototype.dima = function (cour, ti, text) {
        this.envoie_to_add = cour;
        this.titre_a_modifier = ti;
        this.text = text;
        console.log("yaaaa ");
        console.log(this.text);
    };
    PassageIDC.prototype.addContenue = function () {
        var _this = this;
        this._cour = new Cour_1.Cour(this.envoie_to_add.nom, this.envoie_to_add.description);
        this._cour._id = this.envoie_to_add._id;
        this.tmp = new Cour_2.Partie(this.up_partie_titre, this.up_partie_description);
        if (this.envoie_to_add.parties) {
            this._cour.parties = this.envoie_to_add.parties;
            this._cour.parties.push(this.tmp);
        }
        else {
            this._cour.parties[0] = this.tmp;
        }
        if (this.envoie_to_add.quizes) {
            this._cour.quizes = this.envoie_to_add.quizes;
        }
        this.quizeService.addContenue(this._cour).subscribe(function (data) {
            _this.quizeService.getQuize()
                .subscribe(function (tasks) {
                _this.cours = tasks;
                _this.up_partie_description = '';
                _this.up_partie_titre = '';
            });
        });
    };
    PassageIDC.prototype.addQuize = function () {
        var _this = this;
        this._cour = new Cour_1.Cour(this.envoie_to_add.nom, this.envoie_to_add.description);
        this._cour._id = this.envoie_to_add._id;
        this.tmp1 = new Cour_3.Quize(this.up_quize_titre, this.up_quize_description, this.up_quize_niveau);
        if (this.envoie_to_add.quizes) {
            this._cour.quizes = this.envoie_to_add.quizes;
            this._cour.quizes.push(this.tmp1);
        }
        else {
            this._cour.quizes[0] = this.tmp1;
        }
        if (this.envoie_to_add.parties) {
            this._cour.parties = this.envoie_to_add.parties;
        }
        this.quizeService.addContenue(this._cour).subscribe(function (data) {
            _this.quizeService.getQuize()
                .subscribe(function (tasks) {
                _this.cours = tasks;
                _this.up_quize_description = '';
                _this.up_quize_titre = '';
            });
        });
    };
    PassageIDC.prototype.addQuestion = function () {
        var _this = this;
        this._cour = new Cour_1.Cour(this.envoie_to_add.nom, this.envoie_to_add.description);
        this._cour._id = this.envoie_to_add._id;
        this.tmpq = new Cour_4.Question(this.up_question_text);
        var i = 0;
        var j = 0;
        for (var _i = 0, _a = this.envoie_to_add.quizes; _i < _a.length; _i++) {
            var q = _a[_i];
            if (this.envoie_to_add.quizes[i].titre.localeCompare(this.titre_a_modifier) === 0) {
                j = i;
            }
            i++;
        }
        this.toto = new Cour_3.Quize(this.envoie_to_add.quizes[j].titre, this.envoie_to_add.quizes[j].description, this.envoie_to_add.quizes[j].niveau);
        if (this.envoie_to_add.quizes) {
            this._cour.quizes = this.envoie_to_add.quizes;
        }
        if (this.envoie_to_add.quizes[j].questions) {
            this._cour.quizes[j].questions = this.envoie_to_add.quizes[j].questions;
            this.toto = this.envoie_to_add.quizes[j];
        }
        this.toto.questions.push(this.tmpq);
        this._cour.quizes[j] = this.toto;
        if (this.envoie_to_add.parties) {
            this._cour.parties = this.envoie_to_add.parties;
        }
        console.log("Voici Cour object");
        console.log(this._cour);
        this.quizeService.addContenue(this._cour).subscribe(function (data) {
            _this.quizeService.getQuize()
                .subscribe(function (tasks) {
                _this.cours = tasks;
                _this.up_quize_description = '';
                _this.up_quize_titre = '';
            });
        });
    };
    PassageIDC.prototype.addChoie = function () {
        var _this = this;
        if (!this.up_choie_status) {
            this.up_choie_status = "false";
        }
        this.titi = new Cour_5.Choie(this.up_choie_text, this.up_choie_status);
        this._cour = new Cour_1.Cour(this.envoie_to_add.nom, this.envoie_to_add.description);
        this._cour._id = this.envoie_to_add._id;
        if (this.envoie_to_add.quizes) {
            this._cour.quizes = this.envoie_to_add.quizes;
        }
        if (this.envoie_to_add.parties) {
            this._cour.parties = this.envoie_to_add.parties;
        }
        var i = 0;
        var j = 0;
        for (var _i = 0, _a = this.envoie_to_add.quizes; _i < _a.length; _i++) {
            var q = _a[_i];
            if (this.envoie_to_add.quizes[i].titre.localeCompare(this.titre_a_modifier) === 0) {
                j = i;
            }
            i++;
        }
        var ii = 0;
        var jj = 0;
        for (var _b = 0, _c = this.envoie_to_add.quizes[j].questions; _b < _c.length; _b++) {
            var ques = _c[_b];
            if (this.envoie_to_add.quizes[j].questions[ii].text.localeCompare(this.text) === 0) {
                jj = ii;
            }
            ii++;
        }
        this.tata = new Cour_4.Question(this.text);
        if (this._cour.quizes[j].questions[jj].choies) {
            this.tata.choies = this._cour.quizes[j].questions[jj].choies;
        }
        this.tata.choies.push(this.titi);
        this._cour.quizes[j].questions[jj] = this.tata;
        this.quizeService.addContenue(this._cour).subscribe(function (data) {
            _this.quizeService.getQuize()
                .subscribe(function (tasks) {
                _this.cours = tasks;
                _this.up_quize_description = '';
                _this.up_quize_titre = '';
            });
        });
    };
    PassageIDC.prototype.question = function (quepar) {
        console.log(this.Qui);
        this.Qui = quepar;
        console.log("******************************************");
        console.log(this.Qui);
    };
    PassageIDC.prototype.partie = function (part1) {
        this.part = part1;
        console.log("******************************************");
        console.log(this.part);
    };
    PassageIDC.prototype.score = function (Qui) {
        console.log("******************************************");
        console.log(this.listre);
    };
    /* Using snapshot */
    PassageIDC.prototype.ngOnInit = function () {
        /*  this.id=this._Activatedroute.snapshot.params['id'];
          */
    };
    PassageIDC.prototype.onBack = function () {
    };
    PassageIDC = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'passage.idC.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, quize_service_1.QuizeService])
    ], PassageIDC);
    return PassageIDC;
}());
exports.PassageIDC = PassageIDC;
//# sourceMappingURL=passage.idC.js.map