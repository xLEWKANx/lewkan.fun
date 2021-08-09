module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    indent: ["warn", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
    semi: ["error", "never"],
  },
}
