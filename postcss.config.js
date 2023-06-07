export default {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-custom-media': {},
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 4,
      preserve: true,
      features: {
        'nesting-rules': true,
      }
    },
    cssnano: { preset: 'default' }
  }
}
