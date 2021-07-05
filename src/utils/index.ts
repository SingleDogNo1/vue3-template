import { isObject } from '@/utils/is'

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&'
  }
  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

/**
 * 返回查询对象的具体类型
 * @param val 需要判断的值
 * @returns 传入对象的数据类型
 */
export function typeOf(val: any): string {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}

/**
 * 解析 url 参数,转化为对象
 * @param url {string} url地址
 * @returns 包含参数 key-value 的对象,如果有 key,没有定义 value,赋值为 true
 * eg:
 *  parseParam('www.xxx.com/?name=%E5%BC%A0%E4%B8%89&sex=0&addr')
 *  => { name: '张三', sex: 0, addr: true }
 */
export function parseParam(url: string) {
  const paramsStr = /.+\?(.+)$/.exec(url)?.[1]
  const paramsArr = paramsStr?.split('&')
  const paramsObj: { [index: string]: string | boolean | string[] } = {}
  // 将 params 存到对象中
  paramsArr?.forEach((param) => {
    if (/=/.test(param)) {
      // eslint-disable-next-line prefer-const
      let [key, val] = param.split('=')
      val = decodeURIComponent(val)
      val = (/^\d+$/.test(val) ? parseFloat(val) : val) as string

      if (paramsObj.hasOwnProperty(key)) {
        paramsObj[key] = ([] as string[]).concat(paramsObj[key] as string, val)
      } else {
        paramsObj[key] = val
      }
    } else {
      paramsObj[param] = true
    }
  })
  return paramsObj
}

/**
 * 对象按照某个键值排序
 * @param {*} property 比对的参数
 * @param {number} mode 升序 1 or 降序 -1
 * @return {Function}
 * eg:
 *  const res = [{name: 'a', age: 20},{name: 'b', age: 10}]
 *  res.sort(compare('age')) => [{name: 'b', age: 10},{name: 'a', age: 20}]
 */
export function compare(property: string, mode: -1 | 1 = -1) {
  return function (obj1: { [index: string]: number }, obj2: { [index: string]: number }) {
    const [value1, value2] = [obj1[property], obj2[property]]
    if (mode === 1) {
      return value1 - value2
    } else {
      return value2 - value1
    }
  }
}
