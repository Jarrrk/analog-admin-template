import gulp from 'gulp';
import server from 'gulp-server-livereload';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sass from 'gulp-sass';
import watch from 'gulp-watch';
import livereload from 'gulp-livereload';
/* Setting up server for building
 *
 * SERVER ADDRESS: http://localhost:8000/
 *
 */

gulp.task('webserver', function() {
  gulp.src('./') // ('./') for source all folder
  .pipe(server({
    livereload: false,
    //directoryListing: true,
    open: true,
    //defaultFile: 'index.html'
  }));
});

gulp.task('styles', function() {
  return watch('./demos/scss/*.scss', function() {
    gulp.src('./demos/scss/styles.scss')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass())
    .pipe(notify({
      title: 'Gulp',
      subtitle: 'success',
      message: 'Demo Sass Task',
      sound: 'Pop',
    }))
    .pipe(livereload())
    .pipe(gulp.dest('./demos/css/'));
  });
});


/*
 *  Watch task.
 *  Watch all files that are mentioned in the folder
 *  and if the file change just run the coresponding task
 *
 */

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('./demos/sass/**/*.scss', ['styles']);
});


/* Gulp default task
 *
 * You can change the task with your development basis
 * it will perform faster if you use speciefic task for default
 *
 */

gulp.task('default', ['watch', 'styles',  'webserver']);

