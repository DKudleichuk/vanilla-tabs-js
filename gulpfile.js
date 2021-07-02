// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const gulp = require( 'gulp');
const { src, dest, watch, series, parallel } = gulp;

// Importing all the Gulp-related packages we want to use
const sourcemaps = require( 'gulp-sourcemaps'),
sass = require( 'gulp-sass')( require('sass')),
babel = require( 'gulp-babel'),
rename = require( 'gulp-rename'),
minifyjs = require( 'gulp-uglify-es').default,
autoPrefixer = require( 'gulp-autoprefixer'),
plumber = require( 'gulp-plumber');

const jsFiles = [
	'source/js/*.js',
];

const scssFiles = [
	'source/scss/*.scss',
];

// JS Task: compile and minify scripts
function jsTask() {

	return src( jsFiles, { base: './'} )
		.pipe( babel({
			presets: [
				['@babel/env', {
					modules: 'commonjs'
				}]
			]
		}))
		.pipe( minifyjs())
		.pipe( rename( function( path) {
			path.dirname = '/';
			path.basename += '.min';
			path.extname = '.js';
		}))
		.pipe( dest( 'dist/' ));

}

// Sass task: compiles the responsive-tabs.scss file into responsive-tabs.min.scss
function scssTask() {

	return src( scssFiles, { base: './'} )
		.pipe( autoPrefixer({
			cascade: false
		}))
		.pipe( plumber())
		.pipe( sourcemaps.init())
		.pipe( sass({
			outputStyle: 'compressed'
		}))
		.pipe( rename( function( path) {
			path.dirname = '/';
			path.basename += '.min';
			path.extname = '.css';
		}))
		.pipe( sourcemaps.write( '.'))
		.pipe( dest( 'dist/' ));

}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
	watch( [...scssFiles, ...jsFiles ], series( parallel( scssTask, jsTask ) ) );
}

// Runs the scss and js tasks simultaneously
exports.default = series(
	parallel( scssTask, jsTask ),
	watchTask
);