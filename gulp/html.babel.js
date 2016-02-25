import {gulp, live, buildDir, srcDir} from './common.babel'

gulp.task('html', () => {
  return gulp.src([
      `${srcDir}**/*.html`
    ], {base: srcDir})
    .pipe(live.reload())
    .pipe(gulp.dest(buildDir))
})