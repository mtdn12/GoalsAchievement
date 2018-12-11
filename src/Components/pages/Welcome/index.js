import React from 'react'
import styles from './styles.module.scss'
import Template from 'src/Containers/Template'
const Welcome = () => {
  return (
    <Template>
      <div className={styles.welcomeWrap}>
        <h1>Welcome to Goal Achievement</h1>
        <h2>Please Login to continue</h2>
      </div>
    </Template>
  )
}

export default Welcome
