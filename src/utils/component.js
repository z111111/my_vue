import Vue from 'vue'
import upperFirst from 'lodash/upperFirst' // 使用 lodash 进行字符串处理
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    '../components',   // 其组件目录的相对路径
    false,   // 是否查询其子目录
    /[A-Z]\w+\.(vue|js)$/   // 匹配基础组件文件名的正则表达式
)
requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)
    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
        camelCase(
            // 剥去文件名开头的 `./` 和结尾的扩展名
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )
    // 全局注册组件
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
})