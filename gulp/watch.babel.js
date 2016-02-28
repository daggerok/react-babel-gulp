import {gulp, srcDir, livereload} from './common.babel'

gulp.task('watch', ['default'], () => {
  livereload.listen({
    basePath: srcDir
  })
  gulp.watch(`${srcDir}/**/*.jsx`, ['jsx'])
  gulp.watch(`${srcDir}/**/*.css`, ['css'])
  gulp.watch(`${srcDir}/**/*.html`, ['html'])
})