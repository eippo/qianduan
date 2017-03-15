import * as types from '../mutation-types'
import * as apis from '../../api'
const state = {
  TakeIndex: []
}

const mutations = {
  [types.FETCH_TAKEOUT_INDEX] (state, {TakeIndex}) {
    state.TakeIndex = TakeIndex
  }
}

const actions = {
  FetchTakeoutIndex({commit}) {
    apis.FetchPostBaseThen(apis.API_TAKEOUT_ROOT_BASE)
      .then(res => {
        commit(types.FETCH_TAKEOUT_INDEX, {
        TakeIndex: res.errmsg
      })
    })
  }
}

const getters = {
  TakeIndex: state => state.TakeIndex
}

export default {
  state,
  mutations,
  getters,
  actions
}
