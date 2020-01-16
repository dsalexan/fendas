const gulp = require('gulp')
const git = require('gulp-git')
const clean = require('gulp-clean')

const TOOLS_DIRECTORY = 'D:/dsalexan/Code/rpg/TheGiddyLimit.github.io'
const TOOLS_SCHEMA_DIRECTORY = `${TOOLS_DIRECTORY}/test/schema`

const DECEMBER_DIRECTORY = 'D:/dsalexan/Code/rpg/december'
const DECEMBER_DOMAIN_DIRECTORY = `${DECEMBER_DIRECTORY}/domain`
const DECEMBER_UTILS_DIRECTORY = `${DECEMBER_DIRECTORY}/utils`
const DECEMBER_SCHEMAS_DIRECTORY = `${DECEMBER_DIRECTORY}/schema/december`

// FUNCTIONS
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
  return gulp.src([`${TOOLS_SCHEMA_DIRECTORY}/**/*`]).pipe(gulp.dest('src/schema/tools'))
}

function sync_domain() {
  return gulp.src([`${DECEMBER_DOMAIN_DIRECTORY}/**/*`]).pipe(gulp.dest('src/domain'))
}

function sync_utils() {
  return gulp.src([`${DECEMBER_UTILS_DIRECTORY}/**/*`]).pipe(gulp.dest('src/utils'))
}

function sync_schemas() {
  return gulp.src([`${DECEMBER_SCHEMAS_DIRECTORY}/**/*`]).pipe(gulp.dest('src/schema/december'))
}
// TASKS

const clear = gulp.parallel(clear_schema)
const sync = gulp.parallel(sync_schema, sync_domain, sync_utils, sync_schemas)

exports.clear = clear
exports.sync = gulp.series(clear, sync)
exports.update = gulp.series(gulp.parallel(pull, clear), sync)
