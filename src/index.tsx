import { Box, ChakraProvider } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { MobxRouter, startRouter } from 'mobx-router'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import Navbar from './components/navbar'
import events, { LogLevel } from './events/events'
import './index.scss'
import { Provider, rootStore, useMst } from './models/root'
import routes from './routes'

export const LOGLEVEL = import.meta.env.VITE_LOGLEVEL
	? (String(import.meta.env.VITE_LOGLEVEL) as LogLevel)
	: 'off'
events.init(LOGLEVEL)

const App = observer(() => {
	const {
		root: {},
	} = useMst()

	startRouter(routes, rootStore, {
		notfound: () => rootStore.router.goTo(routes.notFound),
	})

	return (
		<ChakraProvider>
			<Navbar />
			<Box p={4} minHeight={{ md: 'calc(100vh - 415px)' }}>
				<MobxRouter store={rootStore} />
			</Box>
		</ChakraProvider>
	)
})

render(
	<StrictMode>
		<Provider value={rootStore}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById('root'),
)
