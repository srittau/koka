import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: {
      "import/no-unresolved": "off",
      "import/first": ["warn"],
      "import/no-mutable-exports": ["error"],
      "import/no-self-import": ["error"],
      "import/no-unused-modules": ["warn"],
      "import/no-useless-path-segments": ["warn"],
      "import/order": [
        "warn",
        {
          groups: ["external", "internal", "parent", "sibling"],
          alphabetize: { order: "asc" },
          "newlines-between": "always",
        },
      ],
    },
  },
  prettier,
);
