var gulp = require('gulp'),
	sass = require('gulp-sass'),
	del = require('del'),
	concat = require('gulp-concat'),
	copy = require('gulp-copy'),
	image = require('gulp-image'),
	uglify = require('gulp-uglify'),
	templateCache = require('gulp-angular-templatecache'),
	stringReplace = require('gulp-string-replace'),
	concatCSS = require('gulp-concat-css');



gulp.task('compile-js',function () {
    del('./build/js/**/*.js').then(function () {
        return gulp
            .src(['./src/js/libs/angular.min.js',
            			'./src/js/libs/angular-date-picker.js',
            			'./src/js/templates.js',
            			'./src/js/app.js',
            			'./src/js/config/**/*.js',
            			'./src/js/constants/**/*.js',
            			'./src/js/factories/**/*.js',
            			'./src/js/services/**/*.js',
            			'./src/js/components/**/*.js',
									'./src/js/controllers/**/*.js'
						])
						// .pipe(uglify())
            .pipe(concat('app.min.js'))
            .pipe(gulp.dest('./build/js/'));
    });
});

gulp.task('compile-css', function(){
	del('./build/css/**/*.css').then(function(){
		return gulp
			.src('./src/scss/app.scss')
			.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
			.pipe(concatCSS('app.min.css'))
			.pipe(gulp.dest('./build/css/'));
	});
});

gulp.task('html-watch', function(){
	gulp.watch('./src/index.html', ['copy-html']);
});


gulp.task('copy-html', function(){
	del('./build/**/*.html').then(function () {
		return gulp
			.src('./src/index.html')
			.pipe(gulp.dest('./build/'));
	})
});

gulp.task('copy-fonts', function(){
	return gulp
		.src('./src/fonts/**/*')
		.pipe(gulp.dest('./build/fonts/'));
});

gulp.task('js', function(){
	gulp.watch('./src/js/**/*.js', ['compile-js']);
});


gulp.task('optimize-images', function () {
	return gulp
		.src('./src/images/**/*')
		.pipe(image())
		.pipe(gulp.dest('./build/images/'));
});

gulp.task('sass', function(){
	gulp.watch('./src/scss/**/*.scss',['compile-css']);
});

gulp.task('template-cache', function(){
	del('./build/js/**/*.js').then(function(){
		return gulp.src('./src/js/views/**/*.html')
			.pipe(templateCache())
			.pipe(stringReplace(/angular\.module\(\'templates\'\)/,'angular.module(\'templates\',[])'))
			.pipe(gulp.dest('./src/js/'));
	});
});	


gulp.task('watch-template-cache', function(){
	gulp.watch('./src/js/views/**/*.html', ['template-cache']);
});


gulp.task('default',['compile-css','sass','copy-html','copy-fonts',
	'copy-html','html-watch','optimize-images','template-cache','watch-template-cache','js']);
