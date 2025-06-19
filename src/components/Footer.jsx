import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* School Mission */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t("footer.schoolName")}</h2>
          <p className="text-sm text-gray-300">{t("footer.mission")}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-blue-400">{t("footer.links.home")}</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">{t("footer.links.about")}</Link></li>
            <li><Link to="/programs" className="hover:text-blue-400">{t("footer.links.programs")}</Link></li>
            <li><Link to="/admissions" className="hover:text-blue-400">{t("footer.links.admissions")}</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">{t("footer.links.contact")}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t("footer.contactUs")}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 {t("footer.address")}</li>
            <li>📞 +91 12345 67890</li>
            <li>✉️ contact@futurebrightschool.edu.in</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t("footer.followUs")}</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-500 transition">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 space-y-2">
        <div>
          &copy; {new Date().getFullYear()} {t("footer.schoolName")}. {t("footer.rightsReserved")}
        </div>
        <div>
          Developed by{" "}
          <a
            href="https://webcoreai.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            WebCore AI Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
