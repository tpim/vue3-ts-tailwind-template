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
  ],
  overrides: [
    {
      files: ["src/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", eslint({ lintOnStart: true, cache: false })],
  // 在.env.production文件中配置VITE_DROP_CONSOLE = true,
  // 打包时自动去除console和debugger
  esbuild: {
    drop: env?.VITE_DROP_CONSOLE === "true" ? ["console", "debugger"] : [],
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
  },
};
