import { useState } from "react";
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

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (program) => setSelectedProgram(program);
  const closeModal = () => setSelectedProgram(null);

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          Our Programs
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          We offer a wide range of academic and extracurricular programs designed to nurture talents and build skills for the future.
        </p>
      </motion.div>

      {/* Programs Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
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

      {/* Modal for Program Details */}
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
  );
}
