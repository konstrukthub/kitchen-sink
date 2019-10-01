'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const sherpa = require('style-sherpa');

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

const { PATHS } = loadConfig();

if (!fs.existsSync(PATHS.temp)){
  fs.mkdirSync(PATHS.temp);
}

// compile html from .md
sherpa('./src/index.md', {
  output: PATHS.temp + '/index.html',
  template: './src/template.html'
}, () => {console.log('Style template created successfully.')});
