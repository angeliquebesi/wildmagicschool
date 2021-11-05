module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": [0, "error"],
    "linebreak-style": 0,
    endOfLine: 0,
    "object-curly-newline": ["error", { consistent: true }],
    "max-len": 0,
    "react/prop-types": 0,
    "jsx-a11y/anchor-is-valid": [
      0,
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],

  },
};
