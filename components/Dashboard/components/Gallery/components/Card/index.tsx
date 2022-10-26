import { useState } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

import ball from './assets/ball.svg'
import ballActive from './assets/ballactive.svg'
import polygon from './assets/polygon.svg'
import ethereum from './assets/ethereum.svg'          

type nftProps = {
  title: string,
  image: any,
  network: string,
}

const Card = ({...props}: nftProps) => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>
          {props.title}
        </div>

        <div className={styles.nftContainer}>
          <Image src={props.image} alt='NFT' />
          <div className={styles.network}>
            <Image src={props.network == 'ethereum' ? ethereum : polygon} alt='Network' />
          </div>
        </div>

        <div className={active == false ? styles.checkboxContainer : styles.checkboxContainerActive}>
          <div className={styles.checkbox} onClick={() => setActive(!active)}>
            <div className={styles.checkball}>
              <div className={styles.imageContainer}>
                <Image src={active == false ? ball : ballActive} alt='Check'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card