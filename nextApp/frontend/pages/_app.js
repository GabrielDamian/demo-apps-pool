import '../styles/globals.css'

//_app wrap around all app's pages andd components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
