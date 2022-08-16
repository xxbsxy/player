import myRequest from "./api"
// 获得用户信息
export function getUserMessages(account) {
	return myRequest.request({
		url: '/login/cellphone',
		method: 'post',
		data: account
	})
}
export function getUserSongList(uid) {
	return myRequest.request({
		url: '/user/playlist',
		params: {
			uid
		}
	})
}

export function getUserDetail(uid) {
	return myRequest.request({
		url: '/user/detail',
		params: {
			uid
		}
	})
}
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