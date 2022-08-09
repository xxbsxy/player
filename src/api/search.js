import myRequest from "./api"

export function getSearchResult(data) {
	return myRequest.request({
		url: '/cloudsearch',
		params: data
	})
}