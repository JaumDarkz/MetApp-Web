import type { NextPage } from 'next'
import Head from 'next/head'
import MetamaskComponent from '../components/Dashboard/components/MetamaskComponent'

const Metamask: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>
      
      <MetamaskComponent />
    </>
  )
}

export default Metamask