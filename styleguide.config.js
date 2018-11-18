const path = require('path')

const requireFiles = process.env.GH_PAGES ? [] : [
  path.join(__dirname, 'all.scss')
]

const links = !process.env.GH_PAGES ? [] : [
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: '../assets/css/madetech-frontend.min.css'
  }
]

module.exports = {
  title: 'Style Guide | Made Tech Frontend',
  components: 'src/components/**/index.{js,jsx,ts,tsx}',
  ignore: [
    '**/components/index.js',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts'
  ],
  require: requireFiles,
  styleguideDir: 'docs/styleguide',
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuideRenderer')
  },
  theme: {
    fontFamily: {
      base: '"neuzeit-gro-reg", Helvetica, Arial, sans-serif'
    },
    fontSize: {
      base: 18,
      text: 18,
      h5: 18,
      h6: 18
    }
  },
  styles: {
    TableOfContents: {
    	search: {
    		padding: 0,
    	}
    }
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
