import Image from 'next/image'

import styles from './styles.module.scss'

import meta from './assets/meta.svg'
import SideBar from '../SideBar'

const MetamaskComponent = () => {
  return (
    <>
      <SideBar />

      <div className={styles.container}>
        <div className={styles.columnContainer}>
          <div className={styles.centerImage}>
            <div className={styles.image}>
              <Image src={meta} alt='Metamask'/>
            </div>
          </div>

          <div className={styles.text}>
            Connect to your wallet so that <br />
            your nft gallery is created.
          </div>

          <div className={styles.centerButton}>
            <div className={styles.buttonContainer} onClick={() => window.open('/nonfts', '_self')}>
              <div className={styles.button}>
                Connect Wallet
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MetamaskComponent