import React from "react";

const experts = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Senior Veterinary Surgeon",
    img: "https://i.pravatar.cc/300?img=5",
    experience: "12+ Years Experience",
    specialty: "Preventive Care & Small Animal Surgery",
  },
  {
    name: "Michael Carter",
    role: "Certified Pet Behavior Specialist",
    img: "https://i.pravatar.cc/300?img=12",
    experience: "9+ Years Experience",
    specialty: "Behavioral Training & Anxiety Management",
  },
  {
    name: "Emily Rodriguez",
    role: "Pet Nutrition & Wellness Consultant",
    img: "https://i.pravatar.cc/300?img=20",
    experience: "7+ Years Experience",
    specialty: "Customized Diet Plans & Weight Management",
  },
];

const Experts = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Meet Our Professional Experts
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500"
          >
            {/* Pink Glow Circle */}
            <div className="absolute top-9 left-34 w-28 h-28 bg-pink-400 rounded-full opacity-30 
                            scale-0 group-hover:scale-150 transition-transform duration-500"></div>

            {/* Profile Image */}
            <div className="relative w-30 h-30 mx-auto mb-6">
              <img
                src={expert.img}
                alt={expert.name}
                className="w-full h-full rounded-full object-cover border-4 border-white 
                           group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold">{expert.name}</h3>
              <p className="text-pink-500 font-semibold">{expert.role}</p>
              <p className="text-gray-600 text-sm">{expert.experience}</p>
              <p className="text-gray-500 text-sm">{expert.specialty}</p>
            </div>

            {/* Bottom Gradient Line */}
            <div className="mt-6 h-1 w-0 bg-gradient-to-r from-pink-400 to-purple-500 
                            group-hover:w-full transition-all duration-500 mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
