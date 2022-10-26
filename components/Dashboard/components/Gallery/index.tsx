import Card from './components/Card'

import styles from './styles.module.scss'

import test2 from './components/Card/assets/test2.svg'

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.text}>
          Activate your NTFs to appear in your application <br />
          if you have not yet downloaded the application <span>click here</span> <br />
          or enter the download tab
        </div>

        <div className={styles.gridContainer}>
          <Card title='Bored Ape #4372' image={test2} network='ethereum' />
          <Card title='Bored Ape #4372' image={test2} network='ethereum' />
          <Card title='Bored Ape #4372' image={test2} network='polygon' />
          <Card title='Bored Ape #4372' image={test2} network='ethereum' />
          <Card title='Bored Ape #4372' image={test2} network='polygon' />
          <Card title='Bored Ape #4372' image={test2} network='ethereum' />
          <Card title='Bored Ape #4372' image={test2} network='polygon'/>
          <Card title='Bored Ape #4372' image={test2} network='polygon'/>
        </div>
      </div>
    </div>
  )
}

export default Gallery