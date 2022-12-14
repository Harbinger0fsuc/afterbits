const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpif = require("gulp-if");
const config = require("../config");

function creds() {
	return gulp.src(config.paths.src.creds)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.creds), gulp.dest(config.paths.build.creds)));
}

module.exports = creds;
