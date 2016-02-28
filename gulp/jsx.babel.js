import {gulp, livereload, buildDir, srcDir, mainJs, browserify, babelify, source, log, debug, bundle} from './common.babel'

gulp.task('jsx', () => {
  return browserify({
      entries: `${srcDir}/${mainJs}`,
      extensions: ['.jsx'], 
      debug: true
    })
    .on('error', log)
    .transform(babelify, {
        sourceMaps: debug,
        presets: [
          'es2015',
          'react'
        ],
        plugins: [
          'react-html-attrs',
          'transform-class-properties',
          'transform-decorators-legacy',
          'transform-runtime'
        ]
      })
    .on('error', log)
    .bundle()
    .on('error', log)
    .pipe(source(bundle))
    .pipe(gulp.dest(buildDir))
    .pipe(livereload())
})