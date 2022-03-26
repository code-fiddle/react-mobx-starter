import { flow, types } from 'mobx-state-tree'
import { request } from '../../helpers/api'

export const CATS_API_V1 = import.meta.env.VITE_CATS_API_V1

export enum CatRoute {
	IMAGES = 'images',
	SEARCH = 'search',
}

export const Cat = types.model('Cat', {
	id: types.identifier,
	url: types.string,
	width: types.number,
	height: types.number,
})

export const Cats = types
	.model('Cats', {
		cats: types.array(Cat),
		cache: types.frozen<{ [key: string]: any }>(),
		state: types.optional(
			types.enumeration('State', ['pending', 'done', 'failure']),
			'done',
		),
		lastSuccessfulFetch: types.optional(types.number, -Infinity),
	})
	.actions((self) => ({
		search: flow(function* () {
			const url = `${CATS_API_V1}/${CatRoute.IMAGES}/${CatRoute.SEARCH}`
			self.cats = yield request({
				url,
				method: 'get',
			})
		}),
	}))
