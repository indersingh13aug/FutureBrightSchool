import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProgramCard from "../components/ProgramCard";
import Modal from "../components/Modal";

export default function ProgramsPage() {
  const { t } = useTranslation();
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (program) => setSelectedProgram(program);
  const closeModal = () => setSelectedProgram(null);

  const programsData = [
    {
      id: 1,
      key: "science",
      title: t("programsp.science.title"),
      description: t("programsp.science.description"),
      image: "/images/program-science.jpg",
      details: t("programsp.science.details"),
    },
    {
      id: 2,
      key: "arts",
      title: t("programsp.arts.title"),
      description: t("programsp.arts.description"),
      image: "/images/program-arts.jpg",
      details: t("programsp.arts.details"),
    },
    {
      id: 3,
      key: "commerce",
      title: t("programsp.commerce.title"),
      description: t("programsp.commerce.description"),
      image: "/images/program-commerce.jpg",
      details: t("programsp.commerce.details"),
    },
    {
      id: 4,
      key: "sports",
      title: t("programsp.sports.title"),
      description: t("programsp.sports.description"),
      image: "/images/program-sports.jpg",
      details: t("programsp.sports.details"),
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          {t("programsp.title")}
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          {t("programsp.description")}
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
              {t("programsp.close")}
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
