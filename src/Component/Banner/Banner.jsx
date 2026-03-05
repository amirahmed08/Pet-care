import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import firstImg from '../../assets/imageOne.jpg'
import thirdImg from '../../assets/imageThree.jpg'
import secondImage from '../../assets/imageTwo.jpg'

const slides = [
  {
    id: 1,
    title: "Because Your Pet Deserves the Best Care",
    description:
      "We provide compassionate and professional pet care services.",
    image:
      firstImg,
  },
  {
    id: 2,
    title: "Professional Veterinary Services",
    description:
      "Experienced doctors and modern medical facilities for your pets.",
    image:
      thirdImg,
  },
  {
    id: 3,
    title: "Adopt a Loving Friend Today",
    description:
      "Find your perfect furry companion and give them a loving home.",
    image:
      secondImage,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt="slide"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="w-11/12 mx-auto text-white max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg">{slide.description}</p>

              <div className="mt-6 flex gap-4">
                <button className="bg-green-500 px-6 py-3 rounded-lg">
                  Book Appointment
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-lg">
                  Adopt Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
