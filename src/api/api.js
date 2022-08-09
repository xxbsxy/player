import Request from './request/request'

const myRequest = new Request({
	withCredentials: true,
	baseURL: 'https://netease-cloud-music-api-six-navy.vercel.app/',
	timeout: 5000,
})
export default myRequest