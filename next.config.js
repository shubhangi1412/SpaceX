
const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');

module.exports = imagemin(['images/*.png'], 'build/images', {use: [imageminOptipng()]}).then(() => {
	console.log('Images optimized');
});
