import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  const arrowRef = useRef(null);

  // Scroll to next section
  const scrollToSection = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const animateArrow = () => {
      if (arrowRef.current) {
        arrowRef.current.classList.add("animate-bounce");
      }
    };
    animateArrow();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
      >
        <source src="/school_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white min-h-screen px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Future Bright School
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A vibrant place of learning, growth, and endless possibilities. Step inside the future of education.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to="/admissions"
            className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold shadow-md hover:bg-blue-100 transition"
          >
            Apply Now
          </Link>
          <Link
            to="/programs"
            className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Photo Collage */}
        <motion.div
          className="grid grid-cols-3 gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img src="/photos/pic1.jpg" alt="School 1" className="rounded-xl w-24 h-24 object-cover" />
          <img src="/photos/pic2.jpg" alt="School 2" className="rounded-xl w-24 h-24 object-cover" />
          <img src="/photos/pic3.jpg" alt="School 3" className="rounded-xl w-24 h-24 object-cover" />
        </motion.div>

        {/* Scroll Arrow */}
        <button
          onClick={scrollToSection}
          className="mt-6 text-white text-2xl opacity-80 hover:opacity-100 transition"
          aria-label="Scroll to next section"
          ref={arrowRef}
        >
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
}
