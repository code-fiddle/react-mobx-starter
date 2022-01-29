import { observer } from "mobx-react-lite"
import { Link } from "mobx-router"
import { useMst } from "../models/root"
import routes from "../routes"

export default observer(() => {
	const {
		router,
		root: {},
	} = useMst()

	return (
		<div>
			<h1 className="text-3xl font-bold">react mobx starter</h1>
			<div>
				<Link className="underline" route={routes.home} router={router}>
					Test
				</Link>
			</div>
		</div>
	)
})
