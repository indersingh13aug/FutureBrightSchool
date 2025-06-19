import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProgramCard from "../components/ProgramCard";
import Modal from "../components/Modal";
import EnquiryModal from './EnquiryModal';



const programsData = [
  {
    id: 1,
    titleKey: "programs.science.title",
    descriptionKey: "programs.science.description",
    detailsKey: "programs.science.details",
    image: "/images/program-science.jpg",
  },
  {
    id: 2,
    titleKey: "programs.arts.title",
    descriptionKey: "programs.arts.description",
    detailsKey: "programs.arts.details",
    image: "/images/program-arts.jpg",
  },
  {
    id: 3,
    titleKey: "programs.commerce.title",
    descriptionKey: "programs.commerce.description",
    detailsKey: "programs.commerce.details",
    image: "/images/program-commerce.jpg",
  },
  {
    id: 4,
    titleKey: "programs.sports.title",
    descriptionKey: "programs.sports.description",
    detailsKey: "programs.sports.details",
    image: "/images/program-sports.jpg",
  },
];

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

export default function HomePage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const { t } = useTranslation();
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const openModal = (program) => setSelectedProgram(program);
  const closeModal = () => setSelectedProgram(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-[500px] overflow-hidden">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full shadow"
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full shadow"
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Programs Section */}
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
          {t("explore_programs")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {programsData.map((program) => (
            <ProgramCard
              key={program.id}
              title={t(program.titleKey)}
              description={t(program.descriptionKey)}
              image={program.image}
              onClick={() => openModal(program)}
            />
          ))}
        </motion.div>

        {selectedProgram && (
          <Modal onClose={closeModal}>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-700">
                {t(selectedProgram.titleKey)}
              </h2>
              <img
                src={selectedProgram.image}
                alt={t(selectedProgram.titleKey)}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700">{t(selectedProgram.detailsKey)}</p>
              <button
                onClick={closeModal}
                className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {t("close")}
              </button>
            </div>
          </Modal>
        )}
      </section>

      {/* Additional Content */}
      <section className="max-w-5xl mx-auto py-20 px-6 space-y-16">
        <motion.div
          className="bg-blue-50 rounded-xl p-10 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            {t("mission_title")}
          </h3>
          <p className="text-gray-700 leading-relaxed">{t("mission_text")}</p>
        </motion.div>

        <motion.div
          className="bg-yellow-50 rounded-xl p-10 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-yellow-700 mb-4">
            {t("values_title")}
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {t("value_list", { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
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
            {t("join_title")}
          </h3>
          <p className="text-gray-700 leading-relaxed">{t("join_text")}</p>
        </motion.div>
      </section>

      {/* Vertical Enquire Now Button */}
      <button
        onClick={() => setShowEnquiry(true)}
        className="fixed top-1/2 left-4 font-bold text-indigo-700 transform -translate-y-1/2 -rotate-90 origin-left bg-yellow-400 text-black px-3 h-12 rounded-r shadow-lg z-50 flex items-center justify-center"
      >
        Enquire Now
      </button>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </main>
  );
}
