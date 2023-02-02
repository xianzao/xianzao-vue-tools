// 获取环境变量
const ENV = import.meta.env
// 配置文件
let config = {}
// 默认配置文件
const configSource = {
  appCode: ENV.VITE_APP_CODE,
  // 项目标识代码
  projectCode: `${ENV.VITE_APP_CODE}_${ENV.VITE_APP_ENV}`,
  // 项目名
  projectName: ENV.VITE_APP_NAME,
  // 项目描述
  projectDesc: ENV.VITE_APP_DESCRIPTION,
  // 资源base地址
  base: ENV.VITE_BASE,
  // 接口代理URL路径
  baseUrl: ENV.VITE_BASE_URL,
  // 模拟数据接口路径
  mockBaseUrl: ENV.VITE_BASE_MOCK_URL,
  // 服务端接口路径
  serverUrl: ENV.VITE_BASE_SERVER_URL,
  // GitHub地址
  github: 'https://github.com/xianzao/xianzao-vue-tools',
  // 备案号
  icp: '京ICP备2022xxxxxxx号',
  // 个人配置
  me: {
    name: 'xianzao',
    // github
    github: 'https://github.com/xianzao'
  }
}

const setConfig = cfg => {
  config = Object.assign(config, cfg)
  return config
}

const resetConfig = () => {
  config = { ...configSource }
  return config
}
resetConfig()

const getConfig = key => {
  if (typeof key === 'string') {
    const arr = key.split('.')
    if (arr && arr.length) {
      let data = config
      arr.forEach(v => {
        if (data && typeof data[v] !== 'undefined') {
          data = data[v]
        } else {
          data = null
        }
      })
      return data
    }
  }
  if (Array.isArray(key)) {
    const data = config
    if (key && key.length > 1) {
      let res = {}
      key.forEach(v => {
        if (data && typeof data[v] !== 'undefined') {
          res[v] = data[v]
        } else {
          res[v] = null
        }
      })
      return res
    }
    return data[key]
  }
  return { ...config }
}

export { getConfig, setConfig, resetConfig }
