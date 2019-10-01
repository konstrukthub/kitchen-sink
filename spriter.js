'use strict';

const spriteConfig = {
  shape: {
    id: {
      generator: function(name, file) {
        return file.stem;
      }
    }
  },
  mode: {
    css: { // Activate the «symbol» mode
      dest: './src/assets/scss',
      sprite: '../img/sprite',
      bust: false,
      prefix: '%%svg-%s',
      layout: 'vertical',
      render: {
        css: false, // Activate CSS output (with default options)
        scss: {
          dest: './_sprite.scss'
        }
      }
    }
  }
};

const fs = require('fs');
const yaml = require('js-yaml');
const SVGSpriter = require('svg-sprite');
const sassExtract = require('sass-extract');
const filter = require('sass-extract/lib/plugins/filter');

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

function generateSprite() {
  const spriter = new SVGSpriter(spriteConfig);

  fs.readdirSync('./src/assets/svg/icons').filter(fn => fn.endsWith('.svg')).forEach(file => {
    spriter.add('./src/assets/svg/icons/' + file, null, fs.readFileSync('./src/assets/svg/icons/' + file, 'utf-8'));
  });

  // compile sprites
  spriter.compile((error, result) => {
    if (error) {
      return console.log(error);
    }
    if (result.css && result.css.sprite && result.css.scss) {
      fs.writeFile(result.css.sprite.path, result.css.sprite.contents, 'utf8', (err) => {
        if (err) return console.log(err);
        console.log('\'sprite.svg\' has been generated.');
      });
      fs.writeFile(result.css.scss.path, result.css.scss.contents, 'utf8', (err) => {
        if (err) return console.log(err);
        console.log('\'_sprite.scss\' with mixins has been generated.');
      });
    }
  });
}

const { EXTRACTSCSS } = loadConfig();

// load scss vars
// @todo filter does not work in plugin, to be examined!!
if (EXTRACTSCSS) {
  if (!fs.existsSync('./src/assets/scss/_sasssvg-data.scss')) {
    fs.writeFileSync('./src/assets/scss/_sasssvg-data.scss', '');
  }

  if (!fs.existsSync('./src/assets/scss/_sprite.scss')) {
    fs.writeFileSync('./src/assets/scss/_sprite.scss', '');
  }

  const rendered = sassExtract.renderSync({
    includePaths: [
      './src/assets/scss/',
      './node_modules/foundation-sites/scss',
      './node_modules/motion-ui/'
    ],
    file: './src/assets/scss/app.scss',
    plugins: [
      {
        plugin: 'filter',
        options: {
          only: {
            types: ['SassColor']
          }
        }
      }
    ]
  });

  console.log(rendered.vars.global['$icon-colors']);
}

//create sprites
if (fs.existsSync('./src/assets/svg/icons')){
  generateSprite();
} else {
  console.log('Sprite directory does not exist.');
}
