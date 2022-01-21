module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".ts"],
      },
    },
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "tailwindcss",
    "import",
    "unused-imports",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": "off",
    "sort-imports": 0,
    "import/order": [2, { alphabetize: { order: "asc" } }],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
  },
};
