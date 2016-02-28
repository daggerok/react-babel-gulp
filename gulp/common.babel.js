import gulp         from 'gulp'
import browserify   from 'browserify'
import babelify     from 'babelify'
import source       from 'vinyl-source-stream'
import concat       from 'gulp-concat'
import livereload   from 'gulp-livereload'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps   from 'gulp-sourcemaps'
import {log}        from './log.babel'

export {
  gulp,
  browserify,
  babelify,
  source,
  concat,
  livereload,
  autoprefixer,
  sourcemaps,
  log
}

export let
debug     = true,
srcDir    = 'src',
buildDir  = 'dist',
vendorDir = 'node_modules',
mainCss   = 'main.css',
mainJs    = 'main.jsx',
bundle    = 'bundle.js'