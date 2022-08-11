import Request from './request/request'

const myRequest = new Request({
	withCredentials: true,
	baseURL: 'https://netease-cloud-music-lsmkrmu4h-cgdcgd.vercel.app/',
	timeout: 10000,
})
export default myRequest