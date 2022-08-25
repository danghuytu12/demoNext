import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export const getStaticProps = async()=>{
  const res=await fetch('https://62e9e38d3a5f1572e87056f4.mockapi.io/api/users')
  const data=await res.json()
  return{
    props:{
      users:data
    }
  }
}
function Home ({users}:{users:any})  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
    </div>
  )
}

export default Home


