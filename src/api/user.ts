import request from '@/utils/axios'

export function getUserInfoApi() {
  return request.get({
    url: '/getUserInfo',
  })
}
