// Project build with Gulp
var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins();

gulp.task('js',function(){
  gulp.src('')
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('default'))
});

gulp.task('watch',function(){
	gulp.watch([''], function(event){
		gulp.run('js');
	});	
})

gulp.task('default',['js','watch']); 
