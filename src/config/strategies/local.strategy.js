var passport=require('passport'),
    
    localStrategy=require('passport-local');

module.exports=function(){
    passport.use(new localStrategy({
        userNameField:'userName',
        passwordField:'password'
    },function(username,password,done){
        var user={
            username:username,
            password:password
        }
        done(null,done);
    }));
};