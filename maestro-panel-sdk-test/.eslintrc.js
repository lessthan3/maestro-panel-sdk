
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    'arrow-body-style': 'off',
    curly: ['error', 'all'],
    'func-names': [
      'error',
      'never',
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'generator-star-spacing': [
      'error',
      { after: true, before: false },
    ],
    'id-blacklist': ['error', 'getDerivedStateFromProps'],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    'import/no-named-as-default': 'off', // TODO: Consider re-enabling when perf improves
    'import/no-named-as-default-member': 'off', // TODO: Consider re-enabling when perf improves
    'import/prefer-default-export': [
      'off',
    ],
    // This breaks our custom Link component. If/When we redo the Link component, we can revise this
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/click-events-have-key-events': [
      'off', // TODO: Revisit a11y concerns.
    ],
    'no-confusing-arrow': 'off',
    'no-console': ['error'],
    'no-continue': [
      'off',
    ],
    'no-debugger': [
      'off', // TODO: Find a way to enable this without "lint on save" removing them...
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'draft',
        ],
      },
    ],
    'no-plusplus': 'off',
    'no-restricted-syntax': [
      'off', // TODO: Only support browsers w generators?
    ],
    'no-underscore-dangle': [
      'error',
      { allow: ['_id'] },
    ],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'operator-linebreak': ['error', 'after'],
    'react/jsx-curly-spacing': [
      'error',
      {
        attributes: {
          allowMultiline: true,
          when: 'never',
        },
        // f u kam
        // children: {
        //   allowMultiline: true,
        //   when: 'always',
        // },
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-sort-props': [
      'error',
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never',
      },
    ],
    'react/jsx-wrap-multilines': 'warn', // TODO: Re-enable when this isn't all over the place
    'react/prefer-stateless-function': [
      'off', // TODO: Prefer classes, OR prefer functions if/when there is a perf benefit
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'sort-keys': [
      'error',
    ],
    yoda: [
      'off',
    ],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts", ".tsx"]
      }
    }
  }
};
