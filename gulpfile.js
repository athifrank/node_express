var gulp=require('gulp');
var jshint=require('gulp-jshint');
var jscs=require('gulp-jscs');

var jsFiles=['*.js','src/**/*.js'];

gulp.task('style',function(){
    return gulp.src(jsFiles)
       .pipe(jshint())
       .pipe(jshint.reporter('jshint-stylish',
                           { verbose:true}
                            ))
       .pipe(jscs());
});

// automatically insert the js and css files

gulp.task('inject',function(){
    var wiredep=require('wiredep').stream;
    var inject=require('gulp-inject');
    var options={
        bowerJson:require('./bower.json'),
        directory:'./public/lib',
        ignorePath:'../../public'
    };
    var injectSrc=gulp.src(['./public/css/*.css','./public/js/*.js'],{read:false});
    
    var injectOption={
        ignorePath:'/public'
    };
        
    return gulp.src('./src/view/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc,injectOption))
    .pipe(gulp.dest('./src/view'));
});

gulp.task('server',['style','inject'],function(){
    var nodemon=require('gulp-nodemon');
    var options={
        script:'app.js',
        delayTime:1,
        env:{
            'PORT':3000
        },
        watch:jsFiles
    };
    
    return nodemon(options)
        .on('restart',function(ev){
        console.log('Restarting....');
    });
});