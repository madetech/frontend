# Made Tech Frontend

A collection of components and resources for creating Made Tech branded sites and applications.

## Quick start

You can get started by:

 - [Downloading madetech-frontend.zip](https://github.com/madetech/frontend/releases) from our latest release
 - Installing via NPM: `npm i --save @madetech/frontend`

Read our [Getting Started](https://madetech.github.com/frontend/getting-started) guide.

## Status

[![npm version](https://img.shields.io/npm/v/@madetech/frontend.svg)](https://www.npmjs.com/package/@madetech/frontend)

## What's included?

 - A Sass library that extends the Bootstrap front-end framework, start with [`src/all.scss`](https://github.com/madetech/frontend/blob/master/src/all.scss)
 - A React component library that builds on Reactstrap, take a look at [`src/components/`](https://github.com/madetech/frontend/tree/master/src/components) and [the style guide](https://madetech.github.io/frontend/styleguide/)
 - Made Tech branding kit (images and fonts) from [`@madetech/marketing-assets`](https://github.com/madetech/marketing-assets)
 - Compiled and minified assets for static sites, download from [madetech-frontend.zip](https://github.com/madetech/frontend/releases)

**Compiled and minified assets**

We provide the following assets for ease of use. If you're using GitHub Pages, the easiest way to get started is copying the compiled assets into your project. If you'd prefer a "cleaner" way, investigate using the component library instead.

The CSS and JavaScript includes Bootstrap so there is no need to pull that in separately, though you will need to include jQuery.

```
madetech-frontend.zip
└── dist/
    ├── css/
    │   ├── madetech-frontend.css
    │   ├── madetech-frontend.css.map
    │   ├── madetech-frontend.min.css
    │   └── madetech-frontend.min.css.map
    ├── fonts/
    │   ├── montserrat-bold.{eot,ttf,woff}
    │   ├── montserrat-reg.{eot,ttf,woff}
    │   └── poppins.{eot,ttf,woff}
    ├── images/
    │   ├── favicon.ico
    │   ├── made-tech-logo-blk.png
    │   ├── made-tech-logo-colour.png
    │   └── made-tech-logo-wht.png
    └── js/
        ├── madetech-frontend.js
        ├── madetech-frontend.js.map
        ├── madetech-frontend.min.js
        └── madetech-frontend.min.js.map
```

You can download [madetech-frontend.zip](https://github.com/madetech/frontend/releases) from our latest release.

## Documentation

 - [Get started](https://madetech.github.com/frontend/getting-started)
 - [View available components in our  Styleguide](https://madetech.github.com/frontend/styleguide/)

## Updating npm

Upon making changes to this repository, a new version will need to be published to npm.

Initially you will need to run `npm login` with credentials that have access to the @madetech packages.

Following this, you will need to use a Github API Key to run the following command: `env GITHUB_TOKEN=xxxx npm run release -- minor`
(Follow these instructions if you need to generate a token from Github: [Generating a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line))

## License

Copyright &copy; Made Tech 2020.
