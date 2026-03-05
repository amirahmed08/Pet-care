import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router';


const SingleServiceCard = ({service, index}) => {
  return (
    <div
                    data-aos="fade-down"
                    data-aos-delay={index * 150}
                    className="bg-gradient-to-br from-pink-200 via-purple-200 md:via-purple-100 to-blue-200 md:to-blue-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
                >
                    <img
                        className='bg-gray-200 h-48 w-full rounded-lg object-cover'
                        src={service.image}
                        alt=""
                    />

                    <h1 className='font-bold my-2 text-xl'>{service.serviceName}</h1>

                    <div className='flex justify-between items-center'>
                        <p>Rating</p>
                        <span>{service.rating}</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p>Price</p>
                        <span>{service.price}</span>
                    </div>

                    <Link to="/services"><motion.button
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.75 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className='border-2 font-semibold border-pink-500 text-pink-700 
               rounded-md px-4 py-2 flex justify-center items-center gap-2 
               hover:bg-pink-200 hover:font-bold w-full mt-2'
                    >
                        <span className=''>
                            View Details
                        </span>
                    </motion.button></Link>

                </div>
  )
}

export default SingleServiceCard