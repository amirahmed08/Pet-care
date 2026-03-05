import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SingleServiceCard from "../singleServiceCard/singleServiceCard";



const Services = ({ data }) => {
  const displayService = data.slice(0,4);


  return (
    <section className="w-11/12 mx-auto md:bg-white/70 backdrop-blur-md rounded-3xl p-8 md:shadow-lg lg:shadow-lg my-10">
      <h3  data-aos="fade-down" className="text-3xl font-bold text-center mb-2">Our Services</h3>
      <p className="text-xl font-semibold text-center mb-6 text-gray-600">
        For more service visit Services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayService.map((service, index) => (
          <SingleServiceCard
            key={service.serviceId}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};


export default Services;