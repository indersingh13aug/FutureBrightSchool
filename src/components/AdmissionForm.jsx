import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AdmissionForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    classApply: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-8">
        <motion.h2
          className="text-3xl font-bold text-center text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("admission.heading")}
        </motion.h2>

        {submitted ? (
          <motion.p
            className="text-green-600 font-medium text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {t("admission.success")}
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  {t("admission.fullName")}
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  {t("admission.dob")}
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  {t("admission.classApply")}
                </label>
                <input
                  type="text"
                  name="classApply"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.classApply}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  {t("admission.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  {t("admission.phone")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  {t("admission.address")}
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                {t("admission.message")}
              </label>
              <textarea
                name="message"
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("admission.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                {t("admission.submitButton")}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
