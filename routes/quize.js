//ce fichier à pour objectif la liaison avec la base de donné et d'effectuer les differents requetes necessair
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ahmed:ahmozz17@ds217002.mlab.com:17002/cai_web_project', ['courses']);

// Get All quizez
router.get('/quizes', function(req, res, next){
    db.courses.find(function(err, quize){
        if(err){
            res.send(err);
        }
        res.json(quize);
    });
});

//Save quize
router.post('/quizes', function(req, res, next){
    var cour = req.body;
        db.courses.save(cour, function(err, quiz){
            if(err){
                res.send(err);
            }
            res.json(quiz);
        });
});

// Get Single Task
router.get('/cour/:id', function(req, res, next){
    db.courses.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Delete Task
router.delete('/cour/:id', function(req, res, next){
    db.courses.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});




// Update Task
router.put('/cour/:id', function(req, res, next){
    var cour = req.body;
    var updCour = {};
    if(cour.nom){
        updCour.nom = cour.nom;
    }

    if(cour.description){
        updCour.description = cour.description;
    }

    if(cour.parties){
        updCour.parties = cour.parties;
    }
    if(cour.quizes){
        updCour.quizes = cour.quizes;
    }


    if(!updCour){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.courses.update({_id: mongojs.ObjectId(req.params.id)},updCour, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});



module.exports = router;
