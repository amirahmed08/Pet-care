import React, { Suspense } from 'react'
import Banner from '../Component/Banner/Banner'
import Services from '../Component/Services/Services'
import { useLoaderData } from 'react-router'
import Tips from '../Component/Tips/Tips'
import Expert from '../Component/Expert/Expert'

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <Services data={data}></Services>
      </Suspense>
      <Tips></Tips>
      <Expert></Expert>
    </div>
  )
}

export default Home