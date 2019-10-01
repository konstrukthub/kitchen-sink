'use strict';

const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/konstrukthub/kitchen-sink.git',
  message: 'Update ' + new Date().toDateString()
}, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Deployed to github!');
  }
});
