import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ProgramCard from "../components/ProgramCard";
import Modal from "../components/Modal";

const programsData = [
  {
    id: 1,
    title: "Science Stream",
    description: "Explore Physics, Chemistry, Biology with hands-on experiments.",
    image: "/images/program-science.jpg",
    details:
      "Our Science program nurtures curiosity and critical thinking. Students engage in labs, projects, and research opportunities to prepare for competitive exams and STEM careers.",
  },
  {
    id: 2,
    title: "Arts & Humanities",
    description: "Dive into literature, history, and social sciences.",
    image: "/images/program-arts.jpg",
    details:
      "The Arts program encourages creativity and cultural awareness, helping students develop strong communication and analytical skills.",
  },
  {
    id: 3,
    title: "Commerce & Business",
    description: "Learn economics, finance, accounting and business management.",
    image: "/images/program-commerce.jpg",
    details:
      "Prepare for careers in business, finance, and entrepreneurship with practical knowledge and internship opportunities.",
  },
  {
    id: 4,
    title: "Sports & Physical Education",
    description: "Focus on fitness, teamwork, and athletic development.",
    image: "/images/program-sports.jpg",
    details:
      "Our sports program fosters discipline and healthy living with coaching in multiple sports and fitness regimes.",
  },
];
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg"
];

export default function HomePage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (program) => setSelectedProgram(program);
  const closeModal = () => setSelectedProgram(null);
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };
  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Background Video Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-[500px] overflow-hidden">
          {/* Carousel Image */}
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full shadow"
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full shadow"
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section
        id="programs-section"
        className="py-20 px-6 max-w-7xl mx-auto bg-white rounded-t-3xl -mt-20 shadow-lg"
      >
        <motion.h2
          className="text-4xl font-bold text-center text-blue-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Explore Our Programs
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {programsData.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
              onClick={() => openModal(program)}
            />
          ))}
        </motion.div>

        {/* Modal */}
        {selectedProgram && (
          <Modal onClose={closeModal}>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-700">
                {selectedProgram.title}
              </h2>
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700">{selectedProgram.details}</p>
              <button
                onClick={closeModal}
                className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </Modal>
        )}
      </section>

      {/* Additional Content Sections */}
      <section className="max-w-5xl mx-auto py-20 px-6 space-y-16">
        <motion.div
          className="bg-blue-50 rounded-xl p-10 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To cultivate an environment where every student achieves their full potential academically, socially, and emotionally.
          </p>
        </motion.div>

        <motion.div
          className="bg-yellow-50 rounded-xl p-10 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-yellow-700 mb-4">
            Our Values
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Respect and Integrity</li>
            <li>Excellence in Education</li>
            <li>Inclusiveness and Diversity</li>
            <li>Creativity and Innovation</li>
            <li>Community Engagement</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-green-50 rounded-xl p-10 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-green-700 mb-4">
            Join Us
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Become part of a vibrant community that empowers students to thrive and make a positive impact on the world.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
