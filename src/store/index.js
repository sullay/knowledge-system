import Vuex from 'vuex'
import modules from './modules'

export default Vuex.createStore({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
