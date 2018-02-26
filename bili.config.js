const { version } = require('./package')

const banner = `/**
 * vue-good-table v${version}
 * https://github.com/xaksis/vue-good-wizard
 * Released under the MIT License.
 */
`

module.exports = {
  banner,
  format: [
    "cjs",
    "es",
    "umd",
    "umd-min"
  ],
  compress: 'umd',
  plugins: ['vue'],
  vue: {
    css: true,
  }
}