import Head from 'next/head'
import { Inter } from 'next/font/google'
import axios from 'axios'
import styles from '@/styles/Home.module.css'
import TodoCard from '../../components/TodoCard'


const inter = Inter({ subsets: ['latin'] })

//fetch with "getServerSideProps"
export async function getServerSideProps() {

  //http request
  const req = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
  const res = await req.data

  return {
    props: {
      todos: res // <-- assign response
    },
  }
}

function Home(props: any) {

  //destruct
  const { todos } = props;

  return (
    <>
      <Head>
        <title>Bruh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2 className={inter.className}>
          Basic Todo Application in NextJs
        </h2>
        <div style={{paddingTop:'20px'}}>
          {
            todos.map((todo:any) => (
              <TodoCard todo={todo} />
            ) 
            )
          }
        </div>
      </main>
    </>
  )
}

export default Home