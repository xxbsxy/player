import myRequest from "./api"
// 获得评论信息
export function getComment(data) {
	return myRequest.request({
		url: '/comment/new',
		params: data
	})
}
