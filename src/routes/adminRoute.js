var express=require('express');
var adminRouter=express.Router();
var mongodb=require('mongodb').MongoClient;

var router=function(nav){

adminRouter.route('/addBook')
     .get(function(req,res){
    var url = 'mongodb://localhost:27017/library';
     mongodb.connect(url,function(err,db){
             var books=[
    {
        'title':'Enenmy attack',
        'author':'Athi',
        'read':false
    },{
        'title':'Heaven to hell',
        'author':'Ravi',
        'read':false
    },{
        'title':'Blood Diamond',
        'author':'Frank',
        'read':false
    },{
        'title':'Exam',
        'author':'mani',
        'read':false
    },{
        'title':'Enenmy',
        'author':'Athi',
        'read':false
    },{
        'title':'Aravind',
        'author':'Frank',
        'read':false
    }
];
         var collection=db.collection('books');
         collection.insertMany(books,function(err,results){
             res.send(results);
         });
     });
    });

    return adminRouter;
};

module.exports=router;
