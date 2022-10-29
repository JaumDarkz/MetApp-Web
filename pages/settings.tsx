import type { NextPage } from 'next'
import Head from 'next/head'
import Settings from '../components/Settings'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>
      
      <Settings />
    </>
  )
}

export default Home
