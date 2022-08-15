import axios from 'axios'
import { ElLoading } from 'element-plus'
class Request {
	constructor(config) {
		this.instance = axios.create(config)
		this.instance.interceptors.request.use(
			(config) => {
				// if (config.method === 'post' && !(config.data instanceof FormData)) {
				// 	config.headers = {
				// 		'Content-Type': 'application/x-www-form-urlencoded'
				// 	}
				// }
				// this.loading = ElLoading.service({
				// 	lock: true,
				// 	text: '正在请求数据...',
				// 	background: 'rgba(0, 0 ,0, 0.1)'
				// })
				return config
			},
			(err) => {
				return err
			}
		)
		this.instance.interceptors.response.use(
			(res) => {
				// this.loading.close()
				return res.data
			},
			(err) => {
				return err
			}
		)
	}
	request(config) {
		return new Promise((resolve, reject) => {
			this.instance.request(config).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})

	}
	get(config) {
		return this.request({ ...config, methods: 'GET' })
	}
	post(config) {
		return this.request({ ...config, methods: 'POST' })
	}
}
export default Request