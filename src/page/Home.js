import React from 'react'
import Header from '../components/Header'
import Resume from '../components/Resume'
import Section1 from '../components/Section1'

const Home = () => {
  return (
    <div className='container__fluid'>
      <div>
        <Header/>
      </div>
      <div>
        <Resume/>
      </div>
<Section1/>


    </div>
  )
}

export default Home