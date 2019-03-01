/*
 * Require the path module
 */
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@frctl/fractal').create()); // eslint-disable-line

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Startup');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components/src'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'components/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'assets/dist'));
fractal.web.set('static.mount', '/assets');

/* BROWSERSYNC */
fractal.web.set('server.sync', true);
fractal.web.set('builder.dest', path.join(__dirname, '/build'));

/*
 * Set the path for the styleguide
 */
fractal.web.set('builder.dest', path.join(__dirname, 'styleguide'));

/*
 * Require the Twig adapter
 */
const twigAdapter = require('@frctl/twig')();

fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

/*
 * Default preview
 */
fractal.components.set('default.preview', '@preview');
