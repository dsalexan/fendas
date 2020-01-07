const gulp = require('gulp')
const git = require('gulp-git')
const clean = require('gulp-clean')

const TOOLS_DIRECTORY = 'D:/dsalexan/Code/rpg/TheGiddyLimit.github.io'
const TOOLS_SCHEMA_DIRECTORY = `${TOOLS_DIRECTORY}/test/schema`

function pull(cb) {
  git.pull('origin', 'master', { cwd: TOOLS_DIRECTORY }, function(err) {
    if (err) throw err
    cb()
  })
}

function clear_schema() {
  return gulp.src('schema/tools/*', { read: false }).pipe(clean())
}

function sync_schema() {
  return gulp.src([`${TOOLS_SCHEMA_DIRECTORY}/**/*`]).pipe(gulp.dest('schema/tools'))
}

const clear = gulp.parallel(clear_schema)
const sync = gulp.parallel(sync_schema)

exports.clear = clear
exports.sync = gulp.series(clear, sync)
exports.update = gulp.series(gulp.parallel(pull, clear), sync)
