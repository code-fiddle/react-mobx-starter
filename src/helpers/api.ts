export async function get(url: string) {
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
		},
	})

	return response
}

export async function getJson(url: string) {
	return (await get(url)).json()
}

export async function post(url: string, body: Object) {
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	})

	return response
}

export async function patch(url: string, body: Object) {
	const response = await fetch(url, {
		method: "PATCH",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	})

	return response
}

export async function del(url: string) {
	const response = await fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})

	return response
}
