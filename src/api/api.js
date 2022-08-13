import Request from './request/request'

const myRequest = new Request({
	withCredentials: true,
	baseURL: 'http://43.142.179.253/',
	timeout: 10000,
})
export default myRequest