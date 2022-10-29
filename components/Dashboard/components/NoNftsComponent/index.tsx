import Image from 'next/image'

import styles from './styles.module.scss'

import nonfts from './assets/nonfts.svg'
import SideBar from '../SideBar'

const NoNftsComponent = () => {
  return (
    <>
      <SideBar />

      <div className={styles.container}>
        <div className={styles.columnContainer}>
          <div className={styles.centerImage}>
            <div className={styles.image}>
              <Image src={nonfts} alt='No Nfts'/>
            </div>
          </div>

          <div className={styles.text}>
            You don&apos;t have NFTs in your wallet
          </div>
        </div>
      </div>
    </>
  )
}

export default NoNftsComponent