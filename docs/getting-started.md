---
layout: docs
---

# Getting Started

<p class="lead">
  Made Tech Frontend is a collection of components and resources for creating Made Tech branded sites and applications.
</p>

We created this library to make it easier for teams to create their own sites, whether that be for careers, events or learning materials. It has been created to handle a number of use cases including GitHub Pages powered sites and React powered web apps.

## Quick start

The quickest way to get going with Made Tech Frontend is with the compiled assets including CSS, fonts, images and JavaScript. All you need to do is download the [latest release](https://github.com/madetech/frontend/releases) and then start using the assets.

Presuming you are starting from scratch:

1. Download latest copy of [Made Tech Frontend](https://github.com/madetech/frontend/releases)
2. Create a new directory for your project
3. Create an `index.html` file in that directory and copy the contents of [this example](https://github.com/madetech/frontend/blob/master/examples/static/index.html) into it
4. Now create an `assets/` directory and put the contents of `dist/` in it

Now view the `index.html` in your browser. Cool huh?

## Using with GitHub Pages

If you are creating a documentation site using GitHub Pages, we again recommend using a similar route to the above.

We recommend the following steps are take with a themeless install of Jekyll:

1. Download latest copy of [Made Tech Frontend](https://github.com/madetech/frontend/releases)
2. Create or replace `_layouts/default.html` with [this example](https://github.com/madetech/frontend/blob/master/examples/static/index.html)
3. Now create an `assets/` directory and put the contents of `dist/` in it

If you have installed `github-pages` gem locally you can now run `bundle exec jekyll s` and you will see a Made Tech theme.

Made Tech Frontend's documentation site is built with GitHub Pages so take a look at the [`docs/`](https://github.com/madetech/frontend/tree/master/docs) directory for another example.
