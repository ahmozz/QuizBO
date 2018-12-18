"use strict";
var Choie = (function () {
    function Choie(var1, vor1) {
        this.text = var1;
        this.status = vor1;
    }
    return Choie;
}());
exports.Choie = Choie;
var Question = (function () {
    function Question(var1) {
        this.text = var1;
        this.choies = [];
    }
    return Question;
}());
exports.Question = Question;
var Quize = (function () {
    function Quize(var1, vor1, vir1) {
        this.titre = var1;
        this.description = vor1;
        this.niveau = vir1;
        this.questions = [];
    }
    return Quize;
}());
exports.Quize = Quize;
var Partie = (function () {
    function Partie(var1, vor1) {
        this.titre = var1;
        this.description = vor1;
    }
    return Partie;
}());
exports.Partie = Partie;
var Cour = (function () {
    function Cour(var1, vor1) {
        this.nom = var1;
        this.description = vor1;
        this.parties = [];
        this.quizes = [];
    }
    return Cour;
}());
exports.Cour = Cour;
//# sourceMappingURL=Cour.js.map