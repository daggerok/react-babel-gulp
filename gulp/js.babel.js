import {gulp, live, buildDir, srcDir, mainJs, browserify, babelify, source, log} from './common.babel'

gulp.task('js', () => {
  return browserify({
      entries: srcDir + mainJs, 
      extensions: ['.js'], 
      debug: true
    })
    .on('error', log)
    .transform(babelify)
    .on('error', log)
    .bundle()
    .on('error', log)
    .pipe(source(mainJs))
    .on('error', log)
    .pipe(live.reload())
    .pipe(gulp.dest(buildDir))
})