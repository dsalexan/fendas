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
    "camelcase": "off"
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  }
};