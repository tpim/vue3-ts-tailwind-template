module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      files: ["src/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],

  parser: "vue-eslint-parser",
  plugins: ["vue","@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },

  rules: {
    // 解决ESLint和Prettier的switch/case缩进冲突
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-unused-vars": "off",
    // vite打包时自动去除console和debugger,所以这里直接关掉检查
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 允许catch空着
    "no-empty": ["error", { allowEmptyCatch: true }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions":"off"
  },
};
