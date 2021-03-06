'use strict';
/**
 * Отслеживание изменений проекта
 */
var gulp = require('gulp');

gulp.task('watch', function() {
	//gulp.watch(['src/sprite/*.png'], {debounceDelay: 2000}, ['sprite-normal']);
	gulp.watch(['src/sprite/*@2x.png'], {debounceDelay: 2000}, ['sprite-retina']);
	gulp.watch('src/stylus/**/*.styl', ['styles-main']);
	gulp.watch('src/js/**/*.js', ['scripts-main']);
	gulp.watch('src/resources/**/*', ['copy']);
});