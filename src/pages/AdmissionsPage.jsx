import { motion } from "framer-motion";
import AdmissionForm from "../components/AdmissionForm";

export default function AdmissionsPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          Admissions Open 2025-26
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We welcome new students to join our vibrant community. Explore our admission process, eligibility criteria, and start your journey towards excellence.
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
        {[
          {
            title: "Easy Application Process",
            description:
              "Apply online quickly and securely with our streamlined admission form.",
          },
          {
            title: "Scholarships Available",
            description:
              "Merit-based and need-based scholarships to support your education.",
          },
          {
            title: "Experienced Faculty",
            description:
              "Learn from highly qualified and passionate teachers committed to your success.",
          },
        ].map(({ title, description }, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-default"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
