import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FourDay() {

   return (
      <Layout>
         <Head>
            <title>Four-day weather</title>
         </Head>
         <h1>4-day Forecast</h1>
         <h4>
          <Link href="/">
            <a>Home</a>
          </Link>
        </h4>
      </Layout>
   )
}