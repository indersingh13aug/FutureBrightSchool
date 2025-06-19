import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Form */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            {t("contact.title")}
          </h2>
          {submitted ? (
            <p className="text-green-600 font-medium">{t("contact.thankYou")}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  {t("contact.message")}
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                {t("contact.submit")}
              </button>
            </form>
          )}
        </motion.div>

        {/* Right - Info & Map */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {t("contact.infoTitle")}
            </h3>
            <p className="text-gray-700 mb-2">
              📍 {t("contact.address")}
            </p>
            <p className="text-gray-700 mb-2">📞 {t("contact.phone")}</p>
            <p className="text-gray-700">📧 {t("contact.emailText")}</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9168398240414!2d81.8023126154318!3d26.46611388330983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995c1dd4d6dbdb%3A0x82f5551e9e39dc2c!2sAmethi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680600478211"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
