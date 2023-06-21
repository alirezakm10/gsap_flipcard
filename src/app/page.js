import Image from 'next/image'
import styles from './page.module.css'
import FlipCard from '@/components/FlipCard'

export default function Home() {
  return (
    <main className={styles.main}>
  <FlipCard />
    </main>
  )
}
