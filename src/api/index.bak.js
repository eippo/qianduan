import Vue from 'vue'
// import fetch from 'whatwg-fetch'
export const API_ROOT = 'http://rest.520wzk.com/index/index/'
export const API_LOCAL_ROOT = 'http://localhost:8088/'
export const VUEJWT_DEBUG = '&vuejwt=vuejwt'
export const API_SHOP_ROOT = 'http://wxshop.cmideal.cn/'
export const API_SHOP_ROOT_BASE = 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&'

export const API_SHOP_SUBMIT = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=order-create-submit'
export const API_SHOP_PAY = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=order-pay'
export const API_SHOP_ADDRESS = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=member-address-submit'
export const API_SHOP_ADDRESS_ID = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=member-address-fetchid'
export const FetchOrderLIST = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=order-get_list'
export const FetchOrderID = API_SHOP_ROOT + API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=order-detail'
export const FetchOrderCancel = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=order-op-cancel'
export const FetchMemberUrl = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=member'
export const FetchCartUrl = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=member-cart'
export const FetchCartSelect = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=member-cart-select'
export const FetchCatGoods = API_SHOP_ROOT + API_SHOP_ROOT_BASE + 'k=goods-get_list'

export const fetchall = (params) => {
    return Vue.http.post(API_ROOT + '/fetchall', params).then((response) => {
        return response.body
    })
}
export const FetchAllByParams = (options) => {
    return Vue.http.post(API_ROOT + '/jwt', {}, options).then((response) => {
        return response.body
    })
}

export const updateOne = (params) => {
    return Vue.http.post(API_ROOT + '/addfee', params).then((response) => {
        return response.body
    })
}
export const deleteOne = (params) => {
    return Vue.http.post(API_ROOT + '/dalacc', params).then((response) => {
        return response.body
    })
}
export const FetchBase = (url, params) => {
    return Vue.http.get(url, params, {
            emulateJSON: true
        }).then((response) => {
            return response.json()
        }).then((response) => {
            return response
    })
}
export const FetchPostBase = (url, params) => {
    return Vue.http.post(url, params, {
            emulateJSON: true
        }).then((response) => {
            return response.json()
        }).then((response) => {
            return response
    })
}
export const FetchPostBaseThen = (url, params) => {
    return Vue.http.post(url, params, {
            emulateJSON: true
        }).then((response) => {
            return response.json()
        })
}

export const FetchIndex = () => {
    return FetchBase(API_SHOP_ROOT + '/app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&do=shop&m=ewei_shop&p=index&', {})
}
export const FetchAddress = () => {
    return FetchBase(API_SHOP_ROOT + '/data/china_address.json', {})
}

export const FetchIndexGoods = () => {
    return FetchBase(API_SHOP_ROOT + '/app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&do=shop&m=ewei_shop&p=index&&op=goods&page=1', {})
}
export const FetchCatGoodsList = () => {
    return FetchBase(API_SHOP_ROOT + '/app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=goods-get_list&mid=2190&keywords=&isrecommand=&ishot=&isnew=&isdiscount=&issendfree=&istime=&cate=&order=&by=&merchid=&page=1', {})
}
export const FetchGoodsDetail = (goodsid) => {
    return FetchBase(API_SHOP_ROOT + '/app/index.php?i=41&c=entry' + VUEJWT_DEBUG + '&m=wzk_mall&do=mobile&k=goods-detail&id=' + goodsid)
}
export const FetchGoodsSpecs = (goodsid) => {
    return FetchBase(API_SHOP_ROOT + '/app/index.php?i=41&c=entry&m=wzk_mall' + VUEJWT_DEBUG + '&do=mobile&k=goods-picker&id=' + goodsid)
}
export const FetchAddressLIST = () => {
    return FetchBase(API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=member-address-selector')
}
