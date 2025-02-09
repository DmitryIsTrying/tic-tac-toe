import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});
const eslintConfig = [
  ...compat.config({
    extends: [
      "eslint:recommended",
      "next",
      "next/core-web-vitals",
      "next/typescript",
    ],
    plugins: [
      "react", // Подключаем eslint-plugin-react
      "react-hooks", // Подключаем eslint-plugin-react-hooks
    ],
    rules: {
      // Правила из eslint-plugin-react
      "react/jsx-key": "error", // Проверка key в map
      "react/jsx-uses-react": "error", // Предупреждает, если React не используется
      "react/jsx-uses-vars": "error", // Предупреждает, если переменные JSX не используются

      // Правила из eslint-plugin-react-hooks
      "react-hooks/rules-of-hooks": "error", // Проверяет правила использования хуков
      "react-hooks/exhaustive-deps": "warn", // Проверяет зависимости useEffect и других хуков
    },
  }),
];

export default eslintConfig;
