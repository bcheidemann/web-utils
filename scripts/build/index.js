const gulp = require('gulp');
const { exec } = require('child_process');

const clean = function () {
    return exec('rm -rf dist');
}

const tsc = function () {
    return exec('tsc -d');
}

const copyPackageJson = function () {
    return exec('cp package.json dist/package.json');
}

module.exports = gulp.series(clean, tsc, copyPackageJson);