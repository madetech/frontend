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
  require: [
    path.join(__dirname, 'src/styleguide/all.scss')
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
    LogoRenderer: path.join(
      __dirname,
      'src/styleguide/LogoRenderer'
    )
  },
  template: {
    favicon: 'favicon.ico'
  }
}
