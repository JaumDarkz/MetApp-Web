import type { NextPage } from 'next'
import Head from 'next/head'
import DashboardComponent from '../components/Dashboard'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetApp</title>
        <meta name='description' content='Manage your nfts!' />
        <link rel='icon' href='../public/icon.png' />
      </Head>

      <DashboardComponent />
    </>
  )
}

export default Dashboard
