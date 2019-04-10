module.exports = {
  env: {
    node: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended'],
  rules: {
    'node/prefer-global/console': ['warning', 'always']
  }
};
