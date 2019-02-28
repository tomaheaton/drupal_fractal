# Base Fractal theme

## Summary
A Drupal starter theme using Fractal.

## Getting started
### Fractal setup
* Run `yarn install` to get the development dependencies.
* For the most part, you'll now want to run `yarn start` to start
  [Webpack][webpack] and [Fractal][fractal].

### Using Fractal with Drupal 
You'll need to install components so Drupal can access files in Fractal
```
lando composer require drupal/components
lando drush en components
lando drush cr
```

## Technical overview

### Static patterns

* Static pattern are developed in [Fractal][fractal] using the
  [Twig][twig] templating language.
* [Webpack][webpack] is used to compile assets into single files.


## Yarn scripts

The project provides an abundance of Yarn scripts to perform various tasks. They
are documented below.

Scripts can be run with the command `Yarn run SCRIPTNAME` with the exception of
`start` which can simply be run with `Yarn start`.

Common tasks are also documented below.

| Script              | Common | Task |
|-                    | -  |-  |
| `start:fractal`     | 🚫 | Start the [Fractal][fractal] server |
| `start:webpack`     | 🚫 | Start [Webpack][webpack] |
| `start`             | ✅ | Start [Fractal][fractal] and [Webpack][webpack] |
| `prebuild:fractal`  | 🚫 | Runs required tasks for the `build:fractal` task (i.e. Webpack) |
| `build:fractal`     | 🚫 | Builds a static [Fractal][fractal] artifact |
| `build:webpack`     | 🚫 | Runs a webpack build. |
| `prebuild`          | 🚫 | Runs pre build tasks (i.e. linting) |
| `build`             | 🚫 | Runs a [Webpack][webpack] and [Fractal][fractal] build. |
| `lint:styles`       | 🚫 | Lints all SCSS files using [Stylelint][stylelint] |
| `lint:scripts`      | 🚫 | Lints all vanilla JavaScript files using [ESLint][eslint] |
| `lint`              | ✅ | Lints all SCSS and JavaScript files |

## Internal Inviqa guideline divergences

### Stylesheet guidelines
> This divergence still needs discussing with a front end TTL or SEM.

We are using the [`stylelint-config-standard`][stylelint-config-standard] Stylelint
plugin.

### Airbnb code standards

> This is not a divergence, but there is currently no documented guideline for
> JavaScript and Typescript linting.

We are using the Airbnb rules for both JavaScript and TypeScript linting.
