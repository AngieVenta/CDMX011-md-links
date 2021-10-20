module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': ['off'],
    'linebreak-style': ['error', 'windows'],
    'object-shorthand': ['off'],
    'max-len': ['off'],
    'consistent-return': ['off'],
    'no-else-return': ['off'],
    'no-return-await': ['off'],
  },
};

