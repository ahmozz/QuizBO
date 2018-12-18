var express = require('express');
var router = express.Router();
fs = require('fs');

router.get('/', function(req, res, next){
    res.render('index.html');
});
router.get('/client/app/image/aide.jpg',function(req, res, next){
   console.log("bien entrer");
    var img = fs.readFileSync('./client/app/image/aide.jpg');
    res.writeHead(200, {'Content-Type': 'image/gif' });
    res.end(img, 'binary');
});

module.exports = router;

/*
C:\Users\yahya\Downloads\S7 yahya\CAI\Angular\mean_mytasklist-master\mean_mytasklist-masterAdmin\client\app\image

C:\Users\yahya\Downloads\S7 yahya\CAI\Angular\mean_mytasklist-master\client\app\image\cour.jpg/*/
/*
C:\Users\yahya\Downloads\S7 yahya\CAI\Angular\mean_mytasklist-master\mean_mytasklist-masterAdmin\client\app\image\cour.jpg*/