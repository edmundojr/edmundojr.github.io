const postcssImport = require(`postcss-import`)
const postcssPresetEnv = require(`postcss-preset-env`)
const postcssNested = require(`postcss-nested`)
const postcssBrowserReporter = require(`postcss-browser-reporter`)
const postcssReporter = require(`postcss-reporter`)
module.exports = () => ({
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions'
    }),
    postcssNested(),
    postcssBrowserReporter(),
    postcssReporter(),
  ],
})
