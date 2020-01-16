module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-underscore-dangle": "off",
    "camelcase": 'off',
    'max-len': [
      'warn',
      {
        code: 130
      }
    ],
    'prefer-destructuring': 'error',
    'radix': 'off',
    'default-case': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'import/no-named-as-default-member': 'off',
    'no-bitwise': 'off',
    'no-multi-str': 'off',
    'no-return-assign': 'off'
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  }
};