import Head from 'next/head'
import Navbar from '../components/Navbar'
import GlobalStyle from '../../styles/globalStyles';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
    </>
  )
}
