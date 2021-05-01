const gulp = require('gulp');
const { exec } = require('child_process');
const clean = require('gulp-clean');
const fs = require('fs');
const { resolve } = require('path');

const createDist = function (cb) {
    const distDir = resolve('./dist');
    const distDirExists = fs.existsSync(resolve('./dist'));
    if (!distDirExists) {
        return exec('mkdir dist');
    }
    cb();
}

const cleanDist = function () {
    return gulp.src('dist/**/*', { read: false }).pipe(clean());
}

const tsc = function () {
    return exec('tsc');
}

module.exports = gulp.series(createDist, cleanDist, tsc);