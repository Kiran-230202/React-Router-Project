import React from 'react'
import '../Styles/Homestyle.css'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'

export default function Home() {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to='/menu'>
          <button>
            OREDER NOW
          </button>
          </Link>
         
        </div>

      </div>
    </Layout>
  )
}
