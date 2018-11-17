const path = require('path')

const requireFiles = process.env.GH_PAGES ? [] : [
  path.join(__dirname, 'src/styleguide/all.scss')
]

const links = !process.env.GH_PAGES ? [] : [
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: '../assets/css/madetech-frontend.min.css'
  }
]

module.exports = {
  components: 'src/components/**/index.{js,jsx,ts,tsx}',
  ignore: [
    '**/components/index.js',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts'
  ],
  require: requireFiles,
  sections: [
    {
      name: 'Getting Started',
      href: '..'
    },
    {
      name: 'Components',
      components: 'src/components/**/index.{js,jsx,ts,tsx}'
    }
  ],
  styleguideDir: 'docs/styleguide',
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuideRenderer')
  },
  template: {
    favicon: '../assets/images/favicon.ico',
    head: {
      links: links,
      scripts: [
        {
          src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'
        },
        {
          src: '../assets/js/madetech-frontend.js'
        }
      ]
    }
  }
}
