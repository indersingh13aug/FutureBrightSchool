import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProgramCard({ image, title, description, link }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {link && (
          <Link
            to={link}
            className="text-blue-600 font-medium hover:underline text-sm"
          >
            Learn more →
          </Link>
        )}
      </div>
    </motion.div>
  );
}
