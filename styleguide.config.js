const path = require('path')
module.exports = {
  components: 'src/components/**/index.{js,jsx,ts,tsx}',
  ignore: [
    '**/components/index.js',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts'
  ],
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
    favicon: '/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '../assets/css/madetech-frontend.min.css'
        }
      ],
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
