import { router } from '@/router'

export function checkStatus(status: number, msg: string): void {
  switch (status) {
    case 400:
      console.log(msg)
      break
    case 401:
      console.log('未登录')
      router.push({
        name: 'root',
      })
      break
    case 403:
      console.log('禁止访问')
      break
    case 404:
      console.log('网络请求错误, 未找到资源')
      break
    case 405:
      console.log('网络请求错误,请求方法未允许')
      break
    case 408:
      console.log('网络请求超时')
      break
    case 500:
      console.log('服务器错误,请联系管理员')
      break
    case 501:
      console.log('网络未实现')
      break
    case 502:
      console.log('网络错误')
      break
    case 503:
      console.log('服务不可用，服务器暂时过载或维护')
      break
    case 504:
      console.log('网络超时')
      break
    case 505:
      console.log('http版本不支持该请求')
      break
    default:
      console.log('未知错误')
  }
}
