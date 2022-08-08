import Request from './request/request'

const myRequest = new Request({
	baseURL: 'http://localhost:3000',
	timeout: 5000,
})
export default myRequest