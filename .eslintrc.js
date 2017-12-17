module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
      es6: true
    },
    plugins: [
        "html"
      ],
    extends: 'standard',
    'rules': {
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      "indent": ["error",2],
      "no-tabs": 0,
      "no-unneeded-ternary":"error",
      "no-nested-ternary":"error",
      "prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true,   
    }],
   
  }
   },
   {
    enforce: "pre",
    test: /\.(js|vue)$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  }