import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

enum sex {
  woman = 0,
  man = 1,
}

export default [
  {
    url: '/getUserInfo',
    method: 'get',
    response: () =>
      Mock.mock({
        code: 0,
        message: 'success',
        data: {
          name: Mock.Random.cname(),
          age: Mock.Random.natural(20, 40),
          sex: Mock.Random.natural(sex.woman, sex.man),
        },
      }),
  },
  {
    url: '/getAvatar',
    method: 'get',
    response: () =>
      Mock.mock({
        code: 0,
        message: 'success',
        data: {
          url: 'http://q2.qlogo.cn/headimg_dl?dst_uin=1418291550&spec=100',
        },
      }),
  },
] as MockMethod[]
