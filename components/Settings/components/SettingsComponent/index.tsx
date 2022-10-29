import Image from 'next/image'

import styles from './styles.module.scss'

import julia from './assets/julia.svg'

const SettingsComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.profile}>
            <div className={styles.imageContainer}>
              <Image src={julia} alt='Profile' />
            </div>

            <div className={styles.nameContainer}>
              Luan#0171
            </div>
          </div>

          <div className={styles.userSettings}>
            <div className={styles.userData}>
              <div className={styles.dataContainer}>
                <div className={styles.label}>
                  Username
                </div>

                <div className={styles.data}>
                  Luan#0171
                </div>

                <div className={styles.line}/>
              </div>

              <div className={styles.dataContainer}>
                <div className={styles.label}>
                  Email
                </div>

                <div className={styles.data}>
                  luanpkfr@gmail.com
                </div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainer}>
                <div className={styles.label}>
                  Password
                </div>

                <div className={styles.data}>
                  **************
                </div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainer}>
                <div className={styles.label}>
                  Wallet
                </div>
                
                <div className={styles.data}>
                  0x329487635g3u4t534u5634rt54g4
                </div>

                <div className={styles.line} />
              </div>
            </div>

            <div className={styles.accountOptionsContainer}>
              <div className={styles.closeAccount}>
                Close my account
              </div>

              <div className={styles.saveButton}>
                <div className={styles.button}>
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent