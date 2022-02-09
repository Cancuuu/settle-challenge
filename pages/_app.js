import '../styles/globals.css'
import StateProvider from '../context/StateProvider'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
    <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
