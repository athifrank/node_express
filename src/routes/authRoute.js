var express=require('express');
var authRouter=express.Router();
var mongodb=require('mongodb').MongoClient;

var router=function(){
    authRouter.route('/signUp')
       .post(function(req,res){
        console.log(req.body);
        req.login(req.body,function(){
            res.redirect('/Auth/profile');
        });
    });
    
    authRouter.route('/profile')
    .get(function(req,res){
        res.json(req.user);
    })
   return authRouter;
};

module.exports=router;