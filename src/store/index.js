/*
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-29 14:46:47
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-29 15:05:40
 */
import Vuex from 'vuex'
import modules from './modules'

export default Vuex.createStore({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
