import myRequest from "./api"
//获得搜素详情
export function getSearchResult(data) {
	return myRequest.request({
		url: '/cloudsearch',
		params: data
	})
}