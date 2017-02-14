// PostCSS
// -------

'use strict';

module.exports = {

  default: {
    options: {
      map: true,
      processors: [
        require('postcss-import'),
        require('pixrem')({rootValue: 16}), // rem -> px fallback
        require('autoprefixer')({browsers: 'last 2 versions'}), // pridani prefixu
      ]
    },
    src: 'src/css/index.css',
    dest: 'dist/css/index.css'
  },

  post: {
    options: {
      map: true,
      processors: [
        require('pixrem')({rootValue: 16}), // rem -> px fallback
        require('autoprefixer')({browsers: 'last 2 versions'}), // pridani prefixu
      ]
    },
    dist: {
      src: 'dist/css/index.css'
    }
  }

}; // module.exports
