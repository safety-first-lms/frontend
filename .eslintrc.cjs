module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': ['error'],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'vue/no-unused-vars': 0,
    '@typescript-eslint/ban-types': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': 0,
    'no-console': 0,
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-multiple-template-root': 0,
    'vue/no-lone-template': 'off'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
};
