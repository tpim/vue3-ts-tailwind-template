import axios from "axios"
import { ILoading } from "@/common/mount.ts"

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
})

// 正在请求的数量
let requestCount = 0

const showLoading = () => {
  if (requestCount === 0) {
    ILoading.start()
    // "拼命加载中，请稍后...",
  }
  requestCount++
}
const hideLoading = () => {
  requestCount--
  if (requestCount === 0) {
    // close
    ILoading.stop()
  }
}

service.interceptors.request.use(
  (config) => {
    showLoading()
    return config
  },
  async (error) => {
    console.error(error)
    return await Promise.reject(error)
  }
)

service.interceptors.response.use(
  async (res) => {
    hideLoading()
    const code = res.data.code || 200
    // const msg = errorCodeType(code) || errorCodeType("default")
    if (code === 200) {
      return await Promise.resolve(res.data)
    } else {
      // Toast
      return await Promise.reject(res.data)
    }
  },
  async (error) => {
    console.error(error)
    hideLoading()
    let { message } = error

    if (message === "Network Error") {
      message = "后端接口连接异常"
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时"
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常"
    }
    // Toast error
    return await Promise.reject(error)
  }
)

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = async (
  url: string,
  data: Record<string, undefined> = {},
  params: Record<string, undefined> = {}
) => {
  return await service({
    method: "post",
    url,
    data,
    params,
  })
}
/**
 * @param {string} url
 * @param {object} params
 */
export const get = async (url: string, params: Record<string, undefined>) => {
  Object.keys(params).forEach((key) => {
    url += "/" + params[key]
  })
  console.log(params)
  return await service({
    method: "get",
    url,
  })
}
