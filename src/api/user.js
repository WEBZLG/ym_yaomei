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

