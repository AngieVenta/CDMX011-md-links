module.exports = {
<<<<<<< HEAD
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
    'max-len': ['off'], // off or warn
    'consistent-return': ['off'],
    'no-else-return': ['off'],
  },
=======
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "no-console": ["off"],
        "linebreak-style": ["error", "windows"],
        "object-shorthand": ["off"],
        "max-len": ["off"],
        "arrow-body-style": ["off"],
        "no-return-await": ["off"],
        "consistent-return": ["off"],
        "no-else-return": ["off"]
    }
>>>>>>> a1bfeefd27ade047531c68ad3f239457f9b16487
};
