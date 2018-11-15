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
    path.join(__dirname, 'src/index.scss')
  ],
  styleguideDir: 'docs/styleguide',
  styleguideComponents: {
    LogoRenderer: path.join(
      __dirname,
      'src/styleguide/LogoRenderer'
    )
  }
}
