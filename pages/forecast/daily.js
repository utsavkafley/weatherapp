import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Daily() {
  const handleClick = (e)=>{
    e.preventDefault()
    fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d32dba32430bbbec389b490a3d9daa1f")
    .then(response => response.json())
    .then(data => console.log(data));
  }
    return(
      <Layout>
        <Head>
          <title>Daily Weather</title>
        </Head>
        <h1>Daily Forecast</h1>

        <label>
          City
        </label>
        <input type="text"></input>
        <button onClick={handleClick}>Go</button>
      </Layout>
    ) 
  }