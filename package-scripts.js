const npsUtils = require('nps-utils');

const series = npsUtils.series;
const concurrent = npsUtils.concurrent;
const rimraf = npsUtils.rimraf;
const crossEnv = npsUtils.crossEnv;

module.exports = {
  scripts: {
    build: {
      description: 'delete the dist directory and run all builds',
      default: series(rimraf('dist'), concurrent.nps('build.es', 'build.cjs')),
      es: {
        description: 'run the build with rollup (uses rollup.config.js)',
        script: 'rollup --config --environment FORMAT:es'
      },
      cjs: {
        description: 'run rollup build with CommonJS format',
        script: 'rollup --config --environment FORMAT:cjs'
      }
    }
  }
};
