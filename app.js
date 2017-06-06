var express =require('express');
var bodyParser=require('body-parser');
var app =express();
var passport=require('passport');
var session=require('express-session');
var cookieParser=require('cookie-parser');

var port=process.env.PORT || 4444;
var nav=[{
        Link:'/Books',
        Text:'Book'},
         {
         Link:'/Author',
         Text:'Author'
         }];

var bookRouter=require('./src/routes/bookRoute')(nav);
var adminRouter=require('./src/routes/adminRoute')(nav);
var authRouter=require('./src/routes/authRoute');

app.use(express.static('public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
//app.use(session({secret:'library'}));
//require('./src/config/passport')(app);


app.use('/Books',bookRouter);
app.use('/Admin',adminRouter);
app.use('/Auth',authRouter);

app.set('views','./src/view');

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index',{title:'Hello World',nav:nav
                       });
});


app.listen(port,function(err){
    console.log('Server running on: '+ port);
});