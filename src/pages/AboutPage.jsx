import { useState } from "react";
import { motion } from "framer-motion";


export default function AboutPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Hero Intro */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">About FutureBright School</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          At FutureBright School, we nurture young minds to become confident, compassionate, and creative global citizens. Our mission is to provide holistic education through innovative teaching, community engagement, and a safe, inclusive environment.
        </p>
      </motion.div>

      {/* Photo Collage */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {[
          "/images/school1.jpg",
          "/images/school2.jpg",
          "/images/school3.jpg",
          "/images/school4.jpg",
        ].map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`School photo ${idx + 1}`}
            className="rounded-xl object-cover w-full h-48 shadow-lg cursor-pointer hover:scale-105 transition-transform"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          />
        ))}
      </motion.div>

      {/* History & Values + Video */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Integrity and Respect</li>
            <li>Academic Excellence</li>
            <li>Inclusivity and Diversity</li>
            <li>Creativity and Innovation</li>
            <li>Community Engagement</li>
          </ul>
        </div>

        {/* Video Thumbnail */}
        <div className="relative">
          <img
            src="/images/video-thumbnail.jpg"
            alt="Core Values Video"
            className="w-full h-auto rounded-xl cursor-pointer shadow-lg hover:scale-105 transition-transform"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </motion.div>

      {/* Modal Video Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsPopupOpen(false)} // Close on background click
        >
          <div
            className="bg-white rounded-lg shadow-lg p-4 relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>
            <video
              src="/videos/school_video.mp4"
              controls
              autoPlay
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}


      {/* Team Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              name: "Dr. Anjali Singh",
              role: "Principal",
              img: "/images/principal.jpg",
              bio: "With over 20 years of experience, Dr. Singh leads the school with a vision for innovation and inclusivity."
            },
            {
              name: "Mr. Rajesh Kumar",
              role: "Vice Principal",
              img: "/images/viceprincipal.jpg",
              bio: "Committed to fostering student success and supporting faculty development."
            },
            {
              name: "Mrs. Meera Joshi",
              role: "Head of Admissions",
              img: "/images/admissions_head.jpg",
              bio: "Ensures a smooth and welcoming admission process for all prospective families."
            }
          ].map(({ name, role, img, bio }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-center">
              <img
                src={img}
                alt={`${name} photo`}
                className="mx-auto mb-4 w-32 h-32 object-cover rounded-full border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
              <p className="text-sm text-gray-500 mb-3">{role}</p>
              <p className="text-gray-700 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
