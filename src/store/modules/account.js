import * as types from '../mutation-types'
import * as apis from '../../api'

const state = {
  account: [],
  balance: 0,
  modifyTime: 0,
  showActions: false,
  apibase: 'http://rest.520wzk.com/index/index/',
  oneaccount: []
}

const mutations = {
  [types.FETCH_ALL] (state, {account, balance, modifyTime}) {
    state.account = account
    state.balance = balance
    state.modifyTime = modifyTime
  },
  [types.FETCH_ONE] (state, { oneaccount }) {
    state.oneaccount = oneaccount
  },
  [types.UPDATE_ONE] (state, {account, balance, modifyTime}) {
    state.account = account
    state.balance = balance
    state.modifyTime = modifyTime
  }
}

const actions = {
  fetchAll({commit}, params) {
    apis.fetchall(params)
      .then(res => {
        commit(types.FETCH_ALL, {
          account: res.account,
          balance: res.account_total,
          modifyTime: res.modify_time
        })
      })
  },
  fetchOne({commit}, params) {
    const record = state.account.find(p => p.id === params.accid)
    if (record) {
        commit(types.FETCH_ONE, {
          oneaccount: record
        })
    } else {
      apis.fetchall(params)
      .then(res => {
        commit(types.FETCH_ONE, {
            oneaccount: res.account
        })
      })
    }
  },
  updateOne({commit}, params) {
      apis.updateOne(params)
      .then(res => {
        commit(types.UPDATE_ONE, {
          account: res.account,
          balance: res.account_total,
          modifyTime: res.modify_time
        })
      })
  },
  deleteOne({commit}, params) {
      apis.deleteOne(params)
      .then(res => {
        commit(types.UPDATE_ONE, {
          account: res.account,
          balance: res.account_total,
          modifyTime: res.modify_time
        })
      })
  }
}

const getters = {
  account: state => state.account,
  balance: state => state.balance,
  modifyTime: state => state.modifyTime,
  oneaccount: state => state.oneaccount,
  showActions: state => state.showActions,
  apibase: state => state.apibase
}

export default {
  state,
  mutations,
  getters,
  actions
}
