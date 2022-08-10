import Request from './request/request'

const myRequest = new Request({
	withCredentials: true,
	baseURL: 'http://www.codeman.ink/api/',
	timeout: 10000,
})
export default myRequest