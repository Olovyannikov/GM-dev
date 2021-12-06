'use strict';

const {src, dest, series, watch, parallel} = require('gulp');
const babel = require('gulp-babel');
const mjml = require('gulp-mjml');
const newer = require('gulp-newer');
const browserSync = require('browser-sync');
const del = require('del');
const image = require('gulp-image');

// Simple config: just set up paths for everything
const basePaths = {
    src: './src/',
    dist: './dist/',
};

const paths = {
    html: {
        src: basePaths.src + '*.mjml',
    },
    images: {
        src: basePaths.src + 'img/*',
        dist: basePaths.dist + 'img/'
    },
    dist: "./dist/"
};

//
// `generateHtml` function:
// Transform the MJML files using `gulp-mjml` into HTML files
// Waiting for the process to be `done` before reloading the browsers
//
const generateHtml = async () => {
    return src(paths.html.src)
        .pipe(mjml())
        .pipe(dest(basePaths.dist));
};

//
// `images` function:
// Get all the new images (gulp-newer), compress them through imagemin,
// throw them in the `dist` folder & then inject them with BrowserSync
//
const images = () => {
    return src(paths.images.src)
        // .pipe(newer(paths.images.dist))
        // .pipe(image())
        .pipe(dest(paths.images.dist))
}

//
// `watch` function:
// Start a BrowserSync server on the `dist` folder which will listen
// to the changes on html & images generated
//
const watchFiles = () => {
    browserSync.init({
        server: {baseDir: `${basePaths.dist}`}
    });
    watch(`${paths.html.src}`, generateHtml);
    watch(`${paths.html.dist}`, generateHtml);
    watch(`${paths.images.src}`, images);
};

// Simple clean task, deleting the `dist` folder
const clean = () => del("./dist/");

exports.default = series(clean, parallel(generateHtml, images), watchFiles);
exports.watch = watchFiles;