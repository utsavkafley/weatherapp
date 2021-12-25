import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Daily() {
    return(
      <Layout>
        <Head>
          <title>Daily Weather</title>
        </Head>
        <h1>Daily Forecast</h1>
        <h4>
          <Link href="/">
            <a>Home</a>
          </Link>
        </h4>
      </Layout>
    ) 
  }