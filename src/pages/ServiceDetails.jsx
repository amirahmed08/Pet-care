import React, { useEffect, useState } from 'react'

import { useLoaderData, useParams } from 'react-router';
import SingleCardDetails from './SingleCardDetails';

const ServiceDetails = () => {
   const services = useLoaderData();
   const {serviceId} = useParams();
   const [singleServices, setSingleServices] = useState({})
  //  console.log(services, serviceId, singleServices);

   useEffect(() =>{
    const serviceDetails = services.find((service)=> service.serviceId ===parseInt(serviceId));
    setSingleServices(serviceDetails);
   }, [services, serviceId])
   
  return (
     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <SingleCardDetails singleServices={singleServices}></SingleCardDetails>
    </div>
  )
}

export default ServiceDetails