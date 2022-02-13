import { Instance, types } from 'mobx-state-tree'
import { Cats } from './cats'

export default types.model('API', {
	cats: types.optional(Cats, () => Cats.create()),
})

export type APIType = Instance<{
	cats: Instance<typeof Cats>
}>
