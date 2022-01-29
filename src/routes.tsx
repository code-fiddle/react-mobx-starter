import { Route } from "mobx-router"
import { RootStore } from "./models/root"
import CatsPage from "./pages/cats/page"

export default {
	home: new Route<RootStore>({
		path: "/",
		component: <CatsPage />,
		onEnter(_route, _parameters, { root: { pages } }) {
			pages.cats.initialisePage()
		},
	}),

	cats: new Route<RootStore>({
		path: "/cats",
		component: <CatsPage />,
		onEnter(_route, _parameters, { root: { pages } }) {
			pages.cats.initialisePage()
		},
	}),
}
