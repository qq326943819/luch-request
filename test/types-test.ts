import LuchRequest from "../src/lib/luch-request"
const luchRequest = new LuchRequest();

declare module '../src/lib/luch-request' {
  export interface HttpCustom {
    key?: string;
    options?: unknown;
  }
}

luchRequest.setConfig(config => {
  return config
})
luchRequest.post("url", { 123: 60 }, {
  baseURL: "/api",
  custom: {
    key: '123'
  }
}).then(response => {
  response.config
})
// LuchRequestAbstract
luchRequest

// LuchRequestConfig
luchRequest.config

const data = new FormData()
// LuchRequestAbstract.interceptors
luchRequest.interceptors.request.use(config => {
  return config
}, (config) => {
  return Promise.reject(config)
})
luchRequest.interceptors.response.use(
  response => {
    return response.data
  },
  (response) => {
    return Promise.reject(response)
  }
)

// mock request login
interface UserInfo {
  username: string;
  phone: string | number;
}
export const reqLogin = () => {
  return luchRequest.get<UserInfo>("/api/login")
}
  // mock get userInfo
  ; (async () => {
    const result = await reqLogin()
    // interface UserInfo
    result.data
  })

// mock request download
const url = "xxx/xxx/xxx/xxx"
  ; (async () => {
    const result = await luchRequest.download(url)
    result.tempFilePath
  })