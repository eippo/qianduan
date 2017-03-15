import { AjaxPlugin } from 'vux'
import qs from 'qs'
import * as util from 'common/js/util'
// import fetch from 'whatwg-fetch'

// shop
let HrefUrl = util.urlParseUri(window.location.href)
export const API_ROOT = 'http://wx.520wzk.com/index/index/'
export const API_LOCAL_ROOT = 'http://localhost:8088/'
export const API_UNIACID = 41
// export const API_UNIACID = 194
export const VUEJWT_DEBUG = process.env.NODE_ENV === 'production' ? '&vuejwt=vuejwt' : '&vuejwt=vuejwt&vuejwtdebug=vuejwtdebug'
export const uniacid = process.env.NODE_ENV === 'production' ? (HrefUrl['i'] > 0 ? HrefUrl['i'] : API_UNIACID) : API_UNIACID
export const API_SHOP_BASR_URL = 'http://wxshop.cmideal.cn/'
export const API_SHOP_ROOT = process.env.NODE_ENV === 'production' ? ('http://' + window.location.host + '/') : API_SHOP_BASR_URL
export const API_SHOP_ROOT_BASE = 'app/index.php?i=' + uniacid + VUEJWT_DEBUG + '&c=entry&m=wzk_mall&do=mobile&'
export const API_SHOP_ORG_BASE = API_SHOP_BASR_URL + 'app/index.php?i=' + uniacid + '&c=entry&m=wzk_mall&do=mobile&'
export const API_SHOP_ROOT_BASE_COM = API_SHOP_ROOT + API_SHOP_ROOT_BASE
export const API_SHOP_SUBMIT = API_SHOP_ROOT_BASE_COM + 'k=order-create-submit'
export const API_SHOP_PAY = API_SHOP_ROOT_BASE_COM + 'k=order-pay'
export const API_SHOP_ADDRESS = API_SHOP_ROOT_BASE_COM + 'k=member-address-submit'
export const API_SHOP_ADDRESS_ID = API_SHOP_ROOT_BASE_COM + 'k=member-address-fetchid'
export const FetchOrderLIST = API_SHOP_ROOT_BASE_COM + 'k=order-get_list'
export const FetchOrderID = API_SHOP_ROOT_BASE_COM + 'k=order-detail'
export const FetchOrderCancel = API_SHOP_ROOT_BASE_COM + 'k=order-op-cancel'
export const FetchMemberUrl = API_SHOP_ROOT_BASE_COM + 'k=member'
export const FetchCartUrl = API_SHOP_ROOT_BASE_COM + 'k=member-cart'
export const FetchCartSelect = API_SHOP_ROOT_BASE_COM + 'k=member-cart-select'
export const FetchCartAdd = API_SHOP_ROOT_BASE_COM + 'k=member-cart-add'
export const FetchCatGoods = API_SHOP_ROOT_BASE_COM + 'k=goods-get_list'
export const FetchCategory = API_SHOP_ROOT_BASE_COM + 'k=shop-category'
export const FetchWxsdk = API_SHOP_ROOT_BASE_COM + 'k=mall-wxsdk'
export const FetchDiyPage = API_SHOP_ROOT_BASE_COM + 'k=diypage&id=19'
export const FetchGoodComment = API_SHOP_ROOT_BASE_COM + 'k=goods-detail-get_comments'
export const FetchGoodCommentList = API_SHOP_ROOT_BASE_COM + 'k=goods-detail-get_comment_list'
export const FetchHomePage = API_SHOP_ROOT_BASE_COM
export const FetchOrderCaculate = API_SHOP_ROOT_BASE_COM + 'k=order-create-caculate'

// takeout
export const API_TAKEOUT_BASE = 'app/index.php?i=' + uniacid + VUEJWT_DEBUG + '&c=entry&m=wzk_takeout&do=index&'
export const API_TAKEOUT_ROOT_BASE = API_SHOP_ROOT + API_TAKEOUT_BASE
export const FetchTakeOut = API_TAKEOUT_ROOT_BASE

export const fetchall = (params) => {
    return AjaxPlugin.$http.post(API_ROOT + '/fetchall', params).then((response) => {
        return response.data
    })
}
export const FetchAllByParams = (options) => {
    return AjaxPlugin.$http.post(API_ROOT + '/jwt', {}, options).then((response) => {
        return response.data
    })
}

export const updateOne = (params) => {
    return AjaxPlugin.$http.post(API_ROOT + '/addfee', qs.stringify(params)).then((response) => {
        return response.data
    })
}
export const deleteOne = (params) => {
    return AjaxPlugin.$http.post(API_ROOT + '/dalacc', qs.stringify(params)).then((response) => {
        return response.data
    })
}
export const FetchBase = (url, params) => {
    return AjaxPlugin.$http.get(url, qs.stringify(params), {
            emulateJSON: true
        }).then(response => response.data)
}
export const FetchPostBase = (url, params) => {
    return AjaxPlugin.$http.post(url, qs.stringify(params)).then(response => response.data)
}
export const FetchPostBaseThen = (url, params) => {
    return AjaxPlugin.$http.post(url, qs.stringify(params)).then((response) => {
            return response.data
        })
}

export const FetchIndex = () => {
    return FetchBase(API_SHOP_ROOT_BASE_COM, {})
}
export const FetchAddress = () => {
    return FetchBase(API_SHOP_ROOT + '/data/china_address.json', {})
}

export const FetchIndexGoods = () => {
    return FetchBase(API_SHOP_ROOT + '/app/index.php?i=41' + VUEJWT_DEBUG + '&c=entry&do=shop&m=ewei_shop&p=index&&op=goods&page=1', {})
}
export const FetchCatGoodsList = () => {
    return FetchBase(API_SHOP_ROOT_BASE_COM + 'k=goods-get_list&mid=2190&keywords=&isrecommand=&ishot=&isnew=&isdiscount=&issendfree=&istime=&cate=&order=&by=&merchid=&page=1', {})
}
export const FetchGoodsDetail = (goodsid) => {
    return FetchBase(API_SHOP_ROOT_BASE_COM + 'k=goods-detail&id=' + goodsid)
}
export const FetchGoodsSpecs = (goodsid) => {
    return FetchBase(API_SHOP_ROOT_BASE_COM + 'k=goods-picker&id=' + goodsid)
}
export const FetchAddressLIST = () => {
    return FetchBase(API_SHOP_ROOT_BASE_COM + 'k=member-address-selector')
}
