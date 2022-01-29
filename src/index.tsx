import { observer } from "mobx-react-lite"
import { MobxRouter } from "mobx-router"
import { StrictMode } from "react"
import { render } from "react-dom"
import Navbar from "./components/navbar"
import "./index.scss"
import { Provider, rootStore, useMst } from "./models/root"

const App = observer(() => {
	const {
		root: {},
	} = useMst()

	return (
		<>
			<Navbar />
			<div>
				<MobxRouter store={rootStore} />
			</div>
		</>
	)
})

render(
	<StrictMode>
		<Provider value={rootStore}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById("root"),
)
