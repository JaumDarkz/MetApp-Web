import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import logo from './assets/logo.svg'
import eye from './assets/eye.svg'
import noneye from './assets/noneye.svg'
import markedsvg from './assets/marked.svg'
import nonmarkedsvg from './assets/nonmarked.svg'

const LoginComponent = () => {
  const [passVisible, setPassVisible] = useState(false)
  const [marked, setMarked] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.centerContainer} onClick={() => window.open('/', '_self')}>
            <Image src={logo} alt='Logo' />
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.emailContainer}>
            <div>Email</div>
            <input type="text" className={styles.emailInput} />
            <div className={styles.line}/>
          </div>

          <div className={styles.passwordContainer}>
            <div>Password</div>
            <div className={styles.row}>
              <input type={passVisible == false ? 'password' : 'text'} className={styles.passwordInput} />
              <div className={styles.eyeContainer} onClick={() => setPassVisible(!passVisible)}>
                <Image src={passVisible == false ? eye : noneye} alt='Show' />
              </div>
            </div>
            <div className={styles.line}/>
          </div>

          <div className={styles.checkContainer}>
            <div className={styles.checkBoxContainer} onClick={() => setMarked(!marked)}>
              <Image src={marked == false ? nonmarkedsvg : markedsvg} alt='Stay Logged' />
            </div>

            <div className={styles.text}>Stay logged in</div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              Log in
            </div>
          </div>

          <div className={styles.centerForgot}>
            <div className={styles.forgot}>
              I forgot my password
            </div>
          </div>

          <div className={styles.registerContainer}>
            You don&apos;t have an account? <span onClick={() => window.open('/signup', '_self')}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent