import request from '@/utils/axios'

export function getList() {
  return request.get({
    url: '/slimePoolRecord/setting',
  })
}
