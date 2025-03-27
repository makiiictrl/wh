"use strict";

const gulp          = require( "gulp" );
const sass          = require( "gulp-sass")(require("sass") );
const sourcemaps    = require( "gulp-sourcemaps" );
const browserSync   = require( "browser-sync" ).create();



const scssFiles = [
   "src/scss/nifty-admin/nifty.scss",
   "src/scss/nifty-admin/bootstrap.scss",
   //"src/scss/vendors/**/*.scss"
]


const buildExlude = [ "!src/scss/**", "!**/*.map" ];



// Create a server and watching the files
// ---------------------------------------------------------------------------------
function server() {
   browserSync.init({
      open: false,
      notify: false,
      server: "./src"
   });


   // Watch SCSS files
   gulp.watch( "src/scss/**/*.scss", devSass );


   // Watch HTML files and reload the browser
   gulp.watch( "src/**/*.html" ).on( "change", browserSync.reload );
};



// Compile SASS files into CSS files
// ---------------------------------------------------------------------------------
function devSass() {
   return gulp.src( scssFiles )
      .pipe( sourcemaps.init() )
      .pipe( sass({
         outputStyle: "expanded",
         errLogToConsole: true,
         quietDeps: true,
         sourceMap: true,
         includePaths: [ "./node_modules" ]
      }).on( "error", sass.logError) )
      .pipe( sourcemaps.write(".") )
      .pipe( gulp.dest( "src/assets/css" ) )
      .pipe( browserSync.stream() );
}



// Compile SASS files into CSS files for production
// ---------------------------------------------------------------------------------
function buildSass() {
   return gulp.src( scssFiles )
      .pipe( sass({
         outputStyle: "compressed",
         errLogToConsole: true,
         includePaths: [ "./node_modules" ]
      }).on( "error", sass.logError) )
      .pipe( gulp.dest( "dist/assets/css" ) );
}



// Copy all files to dist folder
// ---------------------------------------------------------------------------------
function dist() {
   return gulp.src( [ "src/**/*", ...buildExlude ] )
      .pipe( gulp.dest( "dist" ) );
}



exports.dev     = gulp.series( devSass, server );
exports.default = gulp.series( devSass, server );
exports.dist    = gulp.series( dist, buildSass );
