'use strict';

const svgoConfig = {
  plugins: [{
    removeDoctype: true,
    removeComments: true,
    convertShapeToPath: false,
    convertStyleToAttrs: true,
    cleanupNumericValues: {
      floatPrecision: 1
    }
  }],
  datauri: 'enc',
  floatPrecision: 1
};

const fs = require('fs');
const SVGO = require('svgo');
const svgo = new SVGO(svgoConfig);
const path = require('path');

function generateSasssvg() {
  let sassvg = '';

  fs.readdirSync('./src/assets/svg/inline').filter(fn => fn.endsWith('.svg')).forEach((file, key, arr) => {
    const svgFile = fs.readFileSync('./src/assets/svg/inline/' + file, 'utf8');
    svgo.optimize(svgFile, { path: './src/assets/svg/inline/' + file }).then((result) => {
      sassvg += '@function ' + path.parse(file).name + '(){ @return unquote(\'url(' + result.data + ')\'); }\n';

      if (Object.is(arr.length - 1, key)) {
        // write sassvg
        fs.writeFile('./src/assets/scss/_sasssvg-data.scss', sassvg, 'utf8', (err) => {
          if (err) return console.log(err);
          console.log('\'_sasssvg-data.scss\' has been created');
        });
      }
    });
  });
}

//create sprites
if (fs.existsSync('./src/assets/svg/inline')){
  generateSasssvg();
} else {
  console.log('Sprite directory does not exist.');
}
