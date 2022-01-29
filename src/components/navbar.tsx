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
			<div>Navbar</div>
			<div>
				<Link route={routes.home} router={router}>
					Test
				</Link>
			</div>
		</div>
	)
})
