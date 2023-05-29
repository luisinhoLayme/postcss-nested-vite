
export default {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-preset-env': { stage: 3, features: { 'nesting-rules': true } },
    cssnano: { preset: 'default' }
  }
}
