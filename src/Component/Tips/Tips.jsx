import React from "react";
import tipsImage from "../../assets/petCareImg.jpg";

const Tips = () => {
  const tips = [
    "❄️ Make sure your pet has a warm sleeping area away from cold floors and drafts. Use cozy blankets or a soft bed.",
    "🧥 Small or short-haired pets may need sweaters or coats when going outside in cold weather.",
    "🐾 Cold pavement and salt can hurt paws. Clean their feet after walks and consider using pet-safe paw balm.",
    "🍖 Cold weather may increase energy needs. Provide balanced nutrition to keep them strong and healthy.",
    "🏠 Do not leave pets outside for long periods in cold weather.",
    "🩺 Winter can worsen joint pain or health issues. Visit your vet if you notice unusual behavior."
  ];

  return (
    <section className="w-11/12 mx-auto backdrop-blur-md rounded-3xl my-10 shadow-md hover:shadow-xl transition">

      <div className="md:h-70 lg:h-80 bg-white/70 card lg:card-side shadow-sm">

        {/*  IMAGE (Left to Right) */}
        <figure data-aos="fade-right" data-aos-duration="1000">
          <img
            className="object-cover"
              src={tipsImage}
              alt="Winter Pet Care"
          />
        </figure>

        <div className="card-body">

          {/*  TITLE (Top to Down) */}
          <h2
            data-aos="fade-down"
            data-aos-delay="200"
            className="card-title text-3xl font-bold mb-5"
          >
            Winter Care Tips for Pets
          </h2>

          {/* TIPS (Right to Left One by One) */}
          <ul>
            {tips.map((tip, index) => (
              <li
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 300}
                className="mb-2 ml-5"
              >
                {tip}
              </li>
            ))}
          </ul>

        </div>
      </div>

    </section>
  );
};

export default Tips;
