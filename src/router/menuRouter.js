import IconMaterialSymbolsCodeBlocksOutline from '~icons/material-symbols/code-blocks-outline'

export const menuRouter = [
  {
    path: 'devtools',
    name: 'DevTools',
    meta: {
      title: '开发工具',
      icon: markRaw(IconMaterialSymbolsCodeBlocksOutline)
    },
    redirect: { name: 'DemoPage' },
    children: [
      {
        path: 'demo',
        name: 'DemoPage',
        meta: {
          title: 'demo页面'
        },
        component: () => import('@/views/DemoPage.vue')
      }
    ]
  }
]

export const menuRouterFormat = (router, parentPath) => {
  return router.map(item => {
    // 拼接路由，例：'devtools' -> '/devtools'  'demo' -> '/devtools/demo'
    item.path = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`

    // 存在 children 属性，且 children 数组长度大于 0，开始递归
    if (item.children && item.children.length > 0) {
      item.children = menuRouterFormat(item.children, item.path)
    }

    return Object.assign({}, item, item.meta || {})
  })
}

// 解析后 路由菜单列表
export const menuRouterFormatList = menuRouterFormat([...menuRouter])
