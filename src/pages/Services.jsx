import React from 'react'
import { useLoaderData } from 'react-router'
import ServiceCardPage from './ServiceCardPage'

const Services = () => {
  const data = useLoaderData()
  // console.log(data)
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      {
        data.map((service,index)=>(<ServiceCardPage key={service.serviceId} service={service} index={index}></ServiceCardPage>))
      }
    </div>
  )
}

export default Services