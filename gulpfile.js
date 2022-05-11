/*!
 * CSS Framework Concept
 * Alexandra Gierer
 * May 2022
 *
 * Created as part of the Bachelor Thesis.
 */


const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const groupMq = require("gulp-group-css-media-queries");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-dart-sass");

const SASS_SOURCES = [
	"./style.scss", // This picks up our style.scss file at the root of the theme
	"scss/**/*.scss", // All other Sass files in the /scss directory
];

const JS_SOURCES = [
	"js/**/*.js", // All js files in the /js directory
];

const HTML_SOURCES = [
	"./**/*.html", // All html files
];

/**
 * Compile Sass files
 */
function compileSass(callback) {
	gulp
		.src(SASS_SOURCES, { base: "./" })
		.pipe(plumber()) // Prevent termination on error
		.pipe(
			sass({
				indentType: "tab",
				indentWidth: 1,
				outputStyle: "expanded", // Expanded so that our CSS is readable
			})
		)
		.on("error", sass.logError)
		.pipe(
			postcss([
				autoprefixer({
					cascade: false,
				}),
			])
		)
		.pipe(groupMq()) // Group media queries!
		.pipe(gulp.dest(".")) // Output compiled files in the same dir as Sass sources
		.pipe(browserSync.stream());

    callback()
}

/**
 * Start up browserSync and watch Sass files for changes
 */
function watch() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
	});

	gulp.watch([...SASS_SOURCES, ...JS_SOURCES, ...HTML_SOURCES]).on(
		'change',
		gulp.series(compileSass, browserSync.reload)
	);
}

/**
 * Start up browserSync to serve
 */
 function serve() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
	});
}

/**
 * Gulp Tasks
 */
exports.compileSass = compileSass;
exports.watch = watch;
exports.build = compileSass;
exports.serve = serve;
exports.default = watch;
