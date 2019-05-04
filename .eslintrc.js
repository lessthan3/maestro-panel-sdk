
module.exports = {
  overrides: [{
    env: {
      jest: true
    },
    files: [
      '**/*.test.ts'
    ],
    settings: {
      'import/core-modules': [
        'jest',
      ],
    },
  }],
  env: {
    "browser": true,
    "node": true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser', // TODO: Remove once dynamic import() is supported by eslint
  plugins: ['@typescript-eslint'],
  rules: {
    /*
      This rule is great in theory, but causes a lot of unnecessary diffs/refactoring. Let the dev
      choose what looks best in each case.
    */
    'arrow-body-style': 'off',
    /*
      This rule gets in the way when writing a module that will contain multiple exports in the
      future.
    */
    'import/prefer-default-export': 'off',
    /*
      Typescript Indent
     */
    'indent': 'off',
    "@typescript-eslint/indent": ["error", 2],
    /*
      Seriously?
    */
    'no-confusing-arrow': 'off',
    /*
      This is stupid.
    */
    'no-continue': 'off',
    /*
      Can you imagine if they had to call it "C+=1"?
    */
    'no-plusplus': 'off',
    /*
      Reading from process.env in Node is SLOW! It's fine to disable this rule for one-time setup
      operations. The rule is enabled so we don't foolishly attempt to read from process.env inside
      of a request handler.
    */
    'no-process-env': 'error',
    /*
      AirBnB disables generators and async/await because of the runtime cost when transpiled to ES5,
      but this isn't a concern when running JavaScript in Node instead of a browser.
    */
    'no-restricted-syntax': 'off',
    'no-undef': 'off',
    /*
      We use Mongo.
    */
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    /*
      ESLint Semi
     */
    // TODO: add the following when the ts rule is added to the parser
    // "semi": "off",
    // "@typescript-eslint/semi": ["error"],
    'sort-keys': 'error',
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  }
};
