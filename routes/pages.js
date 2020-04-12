var express = require('express');
var router = express.Router();


router.get('/' , function(req,res){
    res.render('index',{
         title : 'Home'
    });
})

// router.get('/test' , function(req,res){
//     res.send('user test');
//  })
 

// Exports
module.exports = router;