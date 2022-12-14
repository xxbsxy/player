const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
	transpileDependencies: true,
	//不会生成map文件
	productionSourceMap: false,
	configureWebpack: {
		plugins: [
			require('unplugin-vue-components/webpack')({ /* options */
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
		devServer: {
			proxy: { //目的是解决跨域，若测试环境不需要跨域，则不需要进行该配置
				'/api': {
					target: 'http://43.142.179.253:3030', // 目标 API 地址
					changeOrigin: true, //开启跨域
					ws: true,
					pathRewrite: {
						'^/api': ''
					}
				}
			}
		}
	}
})

