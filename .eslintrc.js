module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/attribute-hyphenation': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'always',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        endOfLine: 'auto',
        breakBeforeElse: true,
        vueIndentScriptAndStyle: true,
        printWidth: 128
      },
    ],
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
    'object-curly-spacing': ['error', 'never', {objectsInObjects: true}],
  },
};
