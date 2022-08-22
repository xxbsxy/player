import myRequest from "./api"
// 登录并获得用户信息
export function getUserMessages(account) {
	return myRequest.request({
		url: '/login/cellphone',
		method: 'post',
		data: account
	})
}
// 获得用户歌单
export function getUserSongList(uid) {
	return myRequest.request({
		url: '/user/playlist',
		params: {
			uid
		}
	})
}
// 获得用户详情
export function getUserDetail(uid) {
	return myRequest.request({
		url: '/user/detail',
		params: {
			uid
		}
	})
}
//退出登录
export function UserLogout() {
	return myRequest.request({
		url: '/logout',
	})
}
//用户关注列表
export function getUserFollows(uid) {
	return myRequest.request({
		url: '/user/follows',
		params: {
			uid
		}
	})
}
//用户粉丝列表
export function getUserFolloweds(uid) {
	return myRequest.request({
		url: '/user/followeds',
		params: {
			uid
		}
	})
}
//获得验证码
export function getCaptcha(phone) {
	return myRequest.request({
		url: '/captcha/sent',
		params: {
			phone
		}
	})
}
//验证码登录
export function captchaLogin(phone, captcha) {
	return myRequest.request({
		url: '/captcha/verify',
		params: {
			phone,
			captcha
		}
	})
}
//登录状态
export function loginStatus() {
	return myRequest.request({
		url: '/login/status',
	})
}
