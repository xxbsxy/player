import Request from './request/request'

const myRequest = new Request({
	withCredentials: true,
	baseURL: '/api',
	timeout: 10000,
})
export default myRequest