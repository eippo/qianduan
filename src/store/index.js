import Vuex from 'vuex'
import Vue from 'vue'
import account from './modules/account'
import shop from './modules/shop'
import takeout from './modules/takeout'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
    shop,
    takeout,
    auth
  }
})
