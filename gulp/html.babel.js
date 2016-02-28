import {gulp, livereload, buildDir, srcDir} from './common.babel'

gulp.task('html', () => {
  return gulp.src(`${srcDir}/**/*.html`, {base: srcDir})
    .pipe(gulp.dest(buildDir))
    .pipe(livereload())
})