import Image from 'next/image'
import styles from './page.module.css'

import variables from './variables.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
      </div>

      <div className={styles.center}>
        <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      </div>

      <div className={styles.grid}></div>
    </main>
  )
}
