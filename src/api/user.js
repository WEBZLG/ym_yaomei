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
// 首页商品
export function goodsInfo(params) {
  return request({
    url: api.GoodsInfo,
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
//出货记录
export function shipmentListhome(params) {
  return request({
    url: api.ShipmentListhome,
    method: 'get',
    params,
    hideloading: true
  })
}
//出货记录
export function cdkeyList(params) {
  return request({
    url: api.CdkeyList,
    method: 'get',
    params,
    hideloading: true
  })
}
//出货记录
export function buyCdkey(params) {
  return request({
    url: api.BuyCdkey,
    method: 'get',
    params,
    hideloading: true
  })
}
