import { HStack } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { Link } from 'mobx-router'
import { useMst } from '../models/root'
import routes from '../routes'

export default observer(() => {
	const {
		router,
		root: {},
	} = useMst()

	return (
		<div>
			<h1 className="text-3xl font-bold">react mobx starter</h1>
			<div>
				<HStack gap={3}>
					<Link className="underline" route={routes.home} router={router}>
						Home
					</Link>
					<Link className="underline" route={routes.cats} router={router}>
						Cats
					</Link>
				</HStack>
			</div>
		</div>
	)
})
