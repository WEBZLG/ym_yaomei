import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}
// 首页banner
export function getBanner(params) {
  return request({
    url: api.HomeBanner,
    method: 'get',
    params,
    hideloading: true
  })
}
// 首页商品
export function yaomeiIndex(params) {
  return request({
    url: api.YaomeiIndex,
    method: 'get',
    params,
    hideloading: true
  })
}
// 首页商品详情
export function goodsInfo(params) {
  return request({
    url: api.GoodsInfo,
    method: 'get',
    params,
    hideloading: true
  })
}
// 首页商品更多
export function showMore(params) {
  return request({
    url: api.ShowMore,
    method: 'get',
    params,
    hideloading: true
  })
}

//用户信息
export function userInfo(params) {
  return request({
    url: api.UserInfo,
    method: 'get',
    params,
    hideloading: true
  })
}
//我的订单
export function myOrder(params) {
  return request({
    url: api.MyOrder,
    method: 'get',
    params,
    hideloading: true
  })
}
//我的团队导航
export function myTeamnav(params) {
  return request({
    url: api.MyTeamnav,
    method: 'get',
    params,
    hideloading: true
  })
}
//我的团队
export function myTeam(params) {
  return request({
    url: api.MyTeam,
    method: 'get',
    params,
    hideloading: true
  })
}
//商品库存
export function goodsStock(params) {
  return request({
    url: api.GoodsStock,
    method: 'get',
    params,
    hideloading: true
  })
}
//补货申请
export function replenishRequestlist(params) {
  return request({
    url: api.ReplenishRequestlist,
    method: 'get',
    params,
    hideloading: true
  })
}
//补货记录
export function replenishList(params) {
  return request({
    url: api.ReplenishList,
    method: 'get',
    params,
    hideloading: true
  })
}
//补货提交
export function replenishAction(params) {
  return request({
    url: api.ReplenishAction,
    method: 'get',
    params,
    hideloading: true
  })
}

//库存出货记录
export function shipmentListhome(params) {
  return request({
    url: api.ShipmentListhome,
    method: 'get',
    params,
    hideloading: true
  })
}

//出货记录
export function shipmentList(params) {
  return request({
    url: api.ShipmentList,
    method: 'get',
    params,
    hideloading: true
  })
}
//出货详情
export function shipmentDetails(params) {
  return request({
    url: api.ShipmentDetails,
    method: 'get',
    params,
    hideloading: true
  })
}

//兑换码列表
export function cdkeyList(params) {
  return request({
    url: api.CdkeyList,
    method: 'get',
    params,
    hideloading: true
  })
}
//生成兑换码
export function buyCdkey(params) {
  return request({
    url: api.BuyCdkey,
    method: 'get',
    params,
    hideloading: true
  })
}
//我的地址
export function myAddress(params) {
  return request({
    url: api.MyAddress,
    method: 'get',
    params,
    hideloading: true
  })
}
//添加地址
export function addressInc(params) {
  return request({
    url: api.AddressInc,
    method: 'get',
    params,
    hideloading: true
  })
}
//编辑地址
export function addressEdit(params) {
  return request({
    url: api.AddressEdit,
    method: 'get',
    params,
    hideloading: true
  })
}
//删除地址
export function addressDel(params) {
  return request({
    url: api.AddressDel,
    method: 'get',
    params,
    hideloading: true
  })
}
//推荐人弹窗
export function seeReferrer(params) {
  return request({
    url: api.SeeReferrer,
    method: 'get',
    params,
    hideloading: true
  })
}
//体现记录
export function withdrawalRecord(params) {
  return request({
    url: api.WithdrawalRecord,
    method: 'get',
    params,
    hideloading: true
  })
}
//消息列表
export function userMessage(params) {
  return request({
    url: api.UserMessage,
    method: 'get',
    params,
    hideloading: true
  })
}
//收益明细
export function userProfit(params) {
  return request({
    url: api.UserProfit,
    method: 'get',
    params,
    hideloading: true
  })
}
//在线升级
export function upLevelpage(params) {
  return request({
    url: api.UpLevelpage,
    method: 'get',
    params,
    hideloading: true
  })
}
//确认收货
export function confirmReceipt(params) {
  return request({
    url: api.ConfirmReceipt,
    method: 'get',
    params,
    hideloading: true
  })
}
//取消订单
export function orderCancel(params) {
  return request({
    url: api.OrderCancel,
    method: 'get',
    params,
    hideloading: true
  })
}
//判断支付方式
export function payRetnow(params) {
  return request({
    url: api.PayRetnow,
    method: 'get',
    params,
    hideloading: true
  })
}
//微信支付
export function goPay(params) {
  return request({
    url: api.GoPay,
    method: 'get',
    params,
    hideloading: true
  })
}
//补货详情
export function replenishDetails(params) {
  return request({
    url: api.ReplenishDetails,
    method: 'get',
    params,
    hideloading: true
  })
}
//补货详情
export function replenishRequest(params) {
  return request({
    url: api.ReplenishRequest,
    method: 'get',
    params,
    hideloading: true
  })
}
//上传图片
export function qiniuUpload(params) {
  return request({
    url: api.QiniuUpload,
    method: 'POST',
    params,
    hideloading: true
  })
}
//精品礼包
export function giftIndex(params) {
  return request({
    url: api.GiftIndex,
    method: 'POST',
    params,
    hideloading: true
  })
}
