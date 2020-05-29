/*
 * @Description: 
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-29 14:46:47
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-29 15:07:14
 */ 
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    'no-console': 'off',
    'no-debugger': 'off'
  }
}
