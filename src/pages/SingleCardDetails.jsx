import React from 'react'
import { FaStar, FaEnvelope, FaTag } from "react-icons/fa";

const SingleCardDetails = ({ singleServices }) => {
    // console.log(singleServices);
  return (
   <div>
     <div className="max-w-4xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 transition-all duration-500 hover:scale-[1.02]">

        {/* Left Image Section */}
        <div className="relative group">
          <img
            src={singleServices.image}
            alt=""
            className="w-full h-full object-cover md:rounded-l-3xl"
          />

          {/* Category Tag */}
          <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-4 py-1 rounded-full flex items-center gap-2">
            <FaTag /> {singleServices.category}
          </div>

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-yellow-400 text-white font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <FaStar /> {singleServices.rating}
          </div>
        </div>

        {/* Right Content Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {singleServices.serviceName}
            </h2>

            <p className="text-gray-600 mb-6">{singleServices.description}</p>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Provider:</span> {singleServices.providerName}
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" />
                {singleServices.providerEmail}
              </p>

               <p>
                <span className="font-semibold">Available Slots:</span>{" "}
                <span
                  className={`font-bold ${
                    singleServices.availableSlots > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {singleServices.availableSlots}
                </span>
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex items-center justify-between">
            <h3 className="text-3xl font-extrabold text-indigo-600">
              ${singleServices.price}
            </h3>

            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className='text-2xl font-bold text-white text-center mt-10'>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">Back to Home</button>
      </div>
   </div>
  )
}

export default SingleCardDetails