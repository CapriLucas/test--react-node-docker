import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{props.message}</h1>
    </div>
  )
}

export async function getStaticProps() {
  let res = await fetch(`http://localhost:5000/sahara`);
  let message = await res.json();

  return {
    props: {
      message
    }
  }
}