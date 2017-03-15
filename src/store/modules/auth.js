import * as types from '../mutation-types'
// import * as apis from '../../api'
const state = {
  authenticated: false,
  jwttoken: ''
}

const mutations = {
  [types.AUTH_CHECK] (state) {
    state.authenticated = !!window.localStorage.getItem('id_token')
    // if (!state.authenticated) {
    //   window.location.href = apis.API_ROOT + 'jwtoauth'
    // }
  },
  [types.AUTH_LOGIN_OUT] (state) {
    state.authenticated = false
    state.jwttoken = ''
    window.localStorage.setItem('id_token', null)
  },
  [types.JWT_AUTH_LOGIN] (state, router) {
    if (!state.authenticated) {
      // console.log(router)
      // window.location.href = apis.API_ROOT + 'jwtoauth?cb=' + encodeURI(router)
    }
  },
  [types.JWT_AUTH_LOGIN_CALLBACK] (state, jwttoken) {
    state.jwttoken = jwttoken
    window.localStorage.setItem('id_token', jwttoken)
  }
}

const actions = {
  checkAuthentication({commit}) {
    commit(types.AUTH_CHECK)
  },
  jwtauthlogin({ commit }, router) {
    commit(types.JWT_AUTH_LOGIN, router)
  },
  jwtloginback({ commit }, jwttoken) {
    commit(types.JWT_AUTH_LOGIN_CALLBACK, jwttoken)
  },
  loginout({ commit }) {
    commit(types.AUTH_LOGIN_OUT)
  }
}
const getters = {
  jwttoken: state => state.jwttoken
}

export default {
  state,
  mutations,
  getters,
  actions
}
