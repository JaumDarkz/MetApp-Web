import type { NextPage } from 'next'
import Head from 'next/head'
import NoNftsComponent from '../components/Dashboard/components/NoNftsComponent'

const NoNfts: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>

      <NoNftsComponent />
    </>
  )
}

export default NoNfts