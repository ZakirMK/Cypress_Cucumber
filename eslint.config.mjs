import cypress from "eslint-plugin-cypress";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      cypress,
      prettier,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  {
    files: ["cypress/**/*.js", "cypress/**/*.ts"],
    plugins: {
      cypress,
    },
    rules: {
      "cypress/no-unnecessary-waiting": "error",
    },
  },
];
