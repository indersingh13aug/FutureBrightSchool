import { motion } from "framer-motion";
import AdmissionForm from "../components/AdmissionForm";
import { useTranslation } from "react-i18next";

export default function AdmissionsPage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          {t("admissions.title")}
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          {t("admissions.description")}
        </p>
      </motion.div>

      {/* Admission Form */}
      <AdmissionForm />

      {/* Admission Highlights */}
      <motion.div
        className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {t("admissions.highlights", { returnObjects: true }).map(
          ({ title, description }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-default"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {title}
              </h3>
              <p className="text-gray-700">{description}</p>
            </div>
          )
        )}
      </motion.div>
    </section>
  );
}
