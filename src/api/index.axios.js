import { AjaxPlugin } from 'vux'
// AjaxPlugin.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
// import fetch from 'whatwg-fetch'
export const API_ROOT = 'http://rest.520wzk.com/index/index/'
export const API_LOCAL_ROOT = 'http://localhost:8088/'
export const VUEJWT_DEBUG = '&vuejwt=vuejwt'
export const API_SHOP_ROOT = 'http://wxshop.cmideal.cn/'
export const API_SHOP_SUBMIT = API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=order-create-submit'
export const API_SHOP_PAY = API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=order-pay'
export const API_SHOP_ADDRESS = API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=member-address-submit'
export const API_SHOP_ADDRESS_ID = API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=member-address-fetchid'
export const FetchOrderLIST = API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=order-get_list'
export const FetchOrderID = API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=order-detail'
export const FetchOrderCancel = API_SHOP_ROOT + 'app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&k=order-op-cancel'

export const fetchall = (params) => {
    console.log(params)
    return AjaxPlugin.$http.post(API_ROOT + '/fetchall?jwt=' + params.jwt, params).then((response) => {
        return response.data
    })
}
export const FetchAllByParams = (options) => {
    return AjaxPlugin.$http.post(API_ROOT + '/jwt', {}, options).then((response) => {
        return response.data
    })
}

export const updateOne = (params) => {
    return AjaxPlugin.$http.post(API_ROOT + '/addfee?jwt=' + params.jwt, params).then((response) => {
        return response.data
    })
}
export const deleteOne = (params) => {
    return AjaxPlugin.$http.post(API_ROOT + '/dalacc?jwt=' + params.jwt, params).then((response) => {
        return response.data
    })
}
export const FetchBase = (url, params) => {
    return AjaxPlugin.$http.get(url, params, {
            emulateJSON: true
        })
        // .then((response) => {
        //     return response.json()
        // })
.then((response) => {
            return response.data
    })
}
export const FetchPostBase = (url, params) => {
    return AjaxPlugin.$http.post(url, params)
    // .then((response) => {
    //         return response.json()
        // })
.then((response) => {
            return response.data
    })
}
export const FetchPostBaseThen = (url, params) => {
    return AjaxPlugin.$http.post(url, params).then((response) => {
        return response.data
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
