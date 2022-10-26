import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import logo from '../Login/assets/logo.svg'
import eye from '../Login/assets/eye.svg'
import noneye from '../Login/assets/noneye.svg'

import EmailFormat from './errors/EmailFormat'
import InvalidEmail from './errors/InvalidEmail'
import PasswordNotMatch from './errors/PasswordNotMatch'

const SignUpComponent = () => {
  const [passVisible, setPassVisible] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

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

        <div className={styles.passwordContainer}>
          <div>Confirm Password</div>
          <div className={styles.row}>
            <input type={confirmation == false ? 'password' : 'text'} className={styles.passwordInput} />
            <div className={styles.eyeContainer} onClick={() => setConfirmation(!confirmation)}>
              <Image src={confirmation == false ? eye : noneye} alt='Show' />
            </div>
          </div>
          <div className={styles.line}/>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            Sign up
          </div>
        </div>

        <EmailFormat />
        <InvalidEmail />
        <PasswordNotMatch />

        <div className={styles.loginContainer}>
          Already have an account? <span onClick={() => window.open('/login', '_self')}>Login</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUpComponent