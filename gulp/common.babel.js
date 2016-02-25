import 'colors'

export const
  srcDir    = './src/',
  buildDir  = './dist/',
  vendorDir = './node_modules/',
  mainCss   = 'main.css',
  mainJs    = 'main.js',
  port      = 3000,
  log       = (error) => {
    console.log([
      'BUILD FAILED'.red.underline,
      '\u0007', // beep
      error.stack.substring(0, error.stack.indexOf(' at ') || error.stack.length)
    ].join('\n'))
    //this.end()
  }

import gulp         from 'gulp'
import browserify   from 'browserify'
import babelify     from 'babelify'
import source       from 'vinyl-source-stream'
import concat       from 'gulp-concat'
import live         from 'gulp-connect'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps   from 'gulp-sourcemaps'

export {
  gulp,
  browserify,
  babelify,
  source,
  concat,
  live,
  autoprefixer,
  sourcemaps
}