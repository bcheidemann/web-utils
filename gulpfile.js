const { series } = require('gulp');
const releaseScripts = require('./scripts/release');

module.exports.release = series(releaseScripts.main);
