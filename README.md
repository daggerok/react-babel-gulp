react-babel-gulp [![build](https://travis-ci.org/daggerok/react-babel-gulp.svg?branch=master)](https://travis-ci.org/daggerok/react-babel-gulp)
==========

quit boilerplate with simple example using: react, gulp, bower, browserify, babel, babrlify, es6, jquery, bootstrap

```shell
npm start
open http://localhost:3000
```

**Note (for Linux users)**

*if on you got same error:*

```shell
$ npm start
...
[22:42:37] 'watch' errored after 6.92 ms
[22:42:37] Error: watch /home/mak/code/test/js/react-babel-gulp/src/ ENOSPC
    at exports._errnoException (util.js:856:11)
    at FSWatcher.start (fs.js:1313:19)
    at Object.fs.watch (fs.js:1341:11)
    at Gaze._watchDir (/home/mak/code/test/js/react-babel-gulp/node_modules/gaze/lib/gaze.js:289:30)
    at /home/mak/code/test/js/react-babel-gulp/node_modules/gaze/lib/gaze.js:358:10
    at iterate (/home/mak/code/test/js/react-babel-gulp/node_modules/gaze/lib/helper.js:52:5)
    at Object.forEachSeries (/home/mak/code/test/js/react-babel-gulp/node_modules/gaze/lib/helper.js:66:3)
    at Gaze._initWatched (/home/mak/code/test/js/react-babel-gulp/node_modules/gaze/lib/gaze.js:354:10)
    at Gaze.add (/home/mak/code/test/js/react-babel-gulp/node_modules/gaze/lib/gaze.js:177:8)
    at new Gaze (/home/mak/code/test/js/react-babel-gulp/node_modules/gaze/lib/gaze.js:74:10)
```

*run following command for fix:*

```shell
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
fs.inotify.max_user_watches=524288
fs.inotify.max_user_watches = 524288
```
