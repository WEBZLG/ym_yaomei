import axios from 'axios'
import {
  Toast
} from 'vant'
// 根据环境不同引入不同api地址
import {
  baseApi
} from '@/config'

function upLoaderImg(file) {
  let params = new FormData()
  params.append('file', file)
  let config = {
    headers: { 
      'Content-Type': 'multipart/form-data'
    }
  }
  return new Promise((resolve, reject) => {
    axios.post(baseApi + '/qiniuUpload', params, config).then(res => {
      if ( res.code === 1) { 
        resolve(res.data)
      } else {
        Toast.fail(res.msg)
        reject(res.msg)
      }
    }).catch(err => {
      Toast.fail('系统异常')
      reject(err)
    });
  })
}
export default upLoaderImg
