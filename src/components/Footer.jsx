import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* School Mission */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Future Bright School</h2>
          <p className="text-sm text-gray-300">
            We empower students to achieve academic excellence, develop character, and prepare for future success through innovation, compassion, and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/programs" className="hover:text-blue-400">Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-blue-400">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 123 Knowledge Lane, Amethi, UP</li>
            <li>📞 +91 12345 67890</li>
            <li>✉️ contact@futurebrightschool.edu.in</li>
          </ul>
        </div>

        {/* Social Media */}
       <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500 transition"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Future Bright School. All rights reserved.
      </div>
    </footer>
  );
}
