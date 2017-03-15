import * as types from '../mutation-types'
import * as apis from '../../api'
// import isEmptyObj from 'common/js/util'
const state = {
  advIndex: [],
  SysConfig: {'header': false},
  indexGoods: [],
  CatGoods: [],
  GoodsDetail: [],
  GoodsParams: [],
  AddressJson: [],
  AddressOne: [],
  AddressLIST: [],
  GoodsSpecs: [],
  GoodsCategory: [],
  GoodsSpecsOptions: [],
  ConfirmData: [],
  CartData: [],
  RouterisLoading: false,
  MemberInfo: [],
  DiyPage: []
}

const mutations = {
  [types.FETCH_SHOP_INDEX] (state, {advIndex}) {
    state.advIndex = advIndex
  },
  [types.FETCH_SHOP_INDEX_GOODS] (state, {indexGoods}) {
    state.indexGoods = indexGoods
  },
  [types.FETCH_SHOP_CAT_GOODS] (state, {CatGoods}) {
    state.CatGoods = CatGoods
  },
  [types.FETCH_SHOP_GOODS_DETAIL] (state, {GoodsDetail, GoodsParams}) {
    state.GoodsDetail = GoodsDetail
    state.GoodsParams = GoodsParams
  },
  [types.FETCH_SHOP_GOODS_SPECS] (state, {GoodsSpecs}) {
    state.GoodsSpecs = GoodsSpecs
  },
  [types.FETCH_SHOP_GOODS_SPECS_SET] (state, {GoodsSpecs}) {
    state.GoodsSpecs = GoodsSpecs
  },
  [types.FETCH_SHOP_ADDRESS] (state, {AddressJson}) {
    state.AddressJson = AddressJson
  },
  [types.FETCH_SHOP_ADDRESS_ID] (state, {AddressOne}) {
    state.AddressOne = AddressOne
  },
  [types.FETCH_SHOP_ADDRESS_LIST] (state, {AddressLIST}) {
    state.AddressLIST = AddressLIST
  },
  [types.FETCH_SHOP_CONFIRM_DATA] (state, {ConfirmData}) {
    state.ConfirmData = ConfirmData
  },
  [types.FETCH_SHOP_MEMBER] (state, {MemberInfo}) {
    state.MemberInfo = MemberInfo
  },
  [types.FETCH_SHOP_CART] (state, {CartData}) {
    state.CartData = CartData
  },
  [types.FETCH_ROUTER_LOADING] (state, {RouterisLoading}) {
    state.RouterisLoading = RouterisLoading
  },
  [types.FETCH_DIY_PAGE] (state, {DiyPage}) {
    state.DiyPage = DiyPage
  },
  [types.FETCH_SHOP_GOODS_CATEGORY] (state, {GoodsCategory}) {
    state.GoodsCategory = GoodsCategory
  }

}

const actions = {
  fetchShopIndex({commit}) {
    apis.FetchIndex()
      .then(res => {
        commit(types.FETCH_SHOP_INDEX, {
          advIndex: res.result
        })
      })
  },
  fetchShopIndexGoods({commit}) {
    apis.FetchIndexGoods()
      .then(res => {
        commit(types.FETCH_SHOP_INDEX_GOODS, {
          indexGoods: res.result
        })
      })
  },
  fetchShopCatGoods({commit}, catid) {
    apis.FetchCatGoodsList(catid)
      .then(res => {
        commit(types.FETCH_SHOP_CAT_GOODS, {
          CatGoods: res.result.list
        })
    })
  },
  fetchShopCategory({commit}) {
    apis.FetchPostBaseThen(apis.FetchCategory, {})
      .then(res => {
        commit(types.FETCH_SHOP_GOODS_CATEGORY, {
          GoodsCategory: res.result
        })
    })
  },
  fetchShopGoodsDetail({commit}, goodsid) {
    if (goodsid > 0) {
      var record = false
      if (state.GoodsDetail) {
        record = state.GoodsDetail.id === goodsid
      }
      if (!record) {
        apis.FetchGoodsDetail(goodsid)
        .then(res => {
          commit(types.FETCH_SHOP_GOODS_DETAIL, {
            GoodsDetail: res.result.goods,
            GoodsParams: res.result.params
          })
        })
      }
    }
  },
  fetchShopGoodsSpecs({commit}, goodsid) {
    if (goodsid > 0) {
      var record = false
      if (state.AddressOne) {
          record = state.AddressOne.id === goodsid
      }
      if (!record) {
        apis.FetchGoodsSpecs(goodsid)
        .then(res => {
          commit(types.FETCH_SHOP_GOODS_SPECS, {
            GoodsSpecs: res.result
          })
        })
      }
    }
  },
  fetchShopAddressId({commit}, params) {
    // if (params.addid > 0) {
      var record = false
      // if (state.GoodsDetail) {
      //   record = state.GoodsDetail.id === addid
      // }
      if (!record) {
        apis.FetchPostBase(apis.API_SHOP_ADDRESS_ID, params)
        .then(res => {
          commit(types.FETCH_SHOP_ADDRESS_ID, {
            AddressOne: res.result
          })
        })
      }
    // }
  },
  fetchShopAddress({commit}) {
    // if (! state.AddressJson) {
        apis.FetchAddress()
        .then(res => {
          commit(types.FETCH_SHOP_ADDRESS, {
            AddressJson: res
          })
        })
      // }
  },
  FetchAddressLIST({commit}) {
    // if (! state.AddressJson) {
        apis.FetchAddressLIST()
        .then(res => {
          commit(types.FETCH_SHOP_ADDRESS_LIST, {
            AddressLIST: res.result.address
          })
        })
      // }
  },
  ConfirmDataSave({commit}, ConfirmData) {
    commit(types.FETCH_SHOP_CONFIRM_DATA, {
      ConfirmData: ConfirmData
    })
  },
  FetchMemberInfo({commit}) {
    apis.FetchBase(apis.FetchMemberUrl)
        .then(res => {
          commit(types.FETCH_SHOP_MEMBER, {
            MemberInfo: res.result
          })
    })
  },
  FetchCart({commit}) {
    apis.FetchBase(apis.FetchCartUrl)
        .then(res => {
          commit(types.FETCH_SHOP_CART, {
            CartData: res.result
          })
    })
  },
  UpdateCart({commit}, CartItem) {
    state.CartData.list.find(arr => {
      if (arr.id === CartItem.id) {
            arr = CartItem
      }
    })
    commit(types.FETCH_SHOP_CART, {
      CartData: state.CartData
    })
    apis.FetchPostBase(apis.FetchCartSelect, {id: CartItem.id, select: CartItem.selected})
  },
  updateLoadingStatus({commit}, payload) {
    commit(types.FETCH_ROUTER_LOADING, {
      RouterisLoading: payload.isLoading
    })
  },
  fetchDiyPage({commit}, DiyPage) {
    // if (isEmptyObj(state.DiyPage)) {
      apis.FetchPostBaseThen(apis.API_SHOP_ROOT_BASE_COM)
        .then(res => {
          commit(types.FETCH_DIY_PAGE, {
            DiyPage: res.result
          })
      })
    // }
  }
}

const getters = {
  advIndex: state => state.advIndex,
  indexGoods: state => state.indexGoods,
  CatGoods: state => state.CatGoods,
  GoodsDetail: state => state.GoodsDetail,
  GoodsParams: state => state.GoodsParams,
  GoodsSpecs: state => state.GoodsSpecs,
  AddressJson: state => state.AddressJson,
  AddressOne: state => state.AddressOne,
  AddressLIST: state => state.AddressLIST,
  ConfirmData: state => state.ConfirmData,
  MemberInfo: state => state.MemberInfo,
  GoodsSpecsOptions: state => state.GoodsSpecs.options,
  SysConfig: state => state.SysConfig,
  CartData: state => state.CartData,
  RouterisLoading: state => state.RouterisLoading,
  DiyPage: state => state.DiyPage,
  GoodsCategory: state => state.GoodsCategory,
  GoodsSpecsModel: state => {
    let SpecModel = []
    if (state.GoodsSpecs.specs) {
      for (var i = 0; i < state.GoodsSpecs.specs.length; i++) {
        SpecModel[state.GoodsSpecs.specs[i]['id']] = 0
      }
    }
    return SpecModel
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
