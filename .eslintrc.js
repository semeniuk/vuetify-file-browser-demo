module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ],
    'quotes': 'off',
    'semi': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
