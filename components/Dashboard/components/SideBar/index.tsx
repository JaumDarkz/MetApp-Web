import Image from 'next/image'

import styles from './styles.module.scss'

import detail from './assets/detail.svg'
import gallery from './assets/gallery.svg'
import disconnect from './assets/disconnect.svg'
import settings from './assets/settings.svg'

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryImage}>
            <Image src={gallery} alt='Gallery' />
          </div>

          <div className={styles.text}>
            Gallery
          </div>
        </div>

        <div className={styles.optionsContainer}>
          <div className={styles.settingsContainer}>
            <div className={styles.settingsImage}>
              <Image src={settings} alt='Settings' />
            </div>

            <div className={styles.text}>
              Settings
            </div>
          </div>

          <div className={styles.disconnectContainer}>
            <div className={styles.disconnectImage}>
              <Image src={disconnect} alt='Disconnect' />
            </div>

            <div className={styles.text}>
              Disconnect
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detail}>
        <Image src={detail} alt='Detail' />
      </div>
    </div>
  )
}

export default SideBar