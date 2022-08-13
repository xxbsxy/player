import myRequest from "./api"

export function getSingerDescription(id) {
	return myRequest.request({
		url: '/artist/detail',
		params: {
			id
		}
	})
}
export function getHotSong(id) {
	return myRequest.request({
		url: '/artists',
		params: {
			id
		}
	})
}

export function getHotMv(id) {
	return myRequest.request({
		url: '/artist/mv',
		params: {
			id
		}
	})
}

export function getSingerSimilar(id) {
	return myRequest.request({
		url: '/simi/artist',
		params: {
			id
		}
	})
}

export function getSingerIntroduce(id) {
	return myRequest.request({
		url: '/artist/desc',
		params: {
			id
		}
	})
}