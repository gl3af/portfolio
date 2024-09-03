/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    createDefaultProgram: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  rules: {
    "sort-imports": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type",
        ],
      },
    ],
    "import/no-duplicates": "error",
    "import/export": "error",
    "import/prefer-default-export": "off",
    "import/no-cycle": "error",

    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",

    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-non-null-assertion": "error",

    "no-console": ["error", { allow: ["warn", "error"] }],
    "react-hooks/exhaustive-deps": "error",
  },
};

module.exports = config;
