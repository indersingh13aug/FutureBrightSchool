import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsMobileMenuOpen(false); // Close menu on language change in mobile
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-20 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo + Flags */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src="/images/4.png"
                alt="School Logo"
                className="w-24 h-12 object-contain rounded-xl"
              />
            </Link>

            {/* Language Flags */}
            <div className="flex space-x-2">
              {/* <img
                src="/images/en.png"
                alt="English"
                className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                onClick={() => changeLanguage("en")}
              /> */
               <button onClick={() => changeLanguage("en")} className={`hover:underline ${i18n.language === "en" ? "text-blue-600 font-semibold" : "text-gray-700"}`} >English</button>
                // src="/images/en.png"
                // alt="English"
                // className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                // onClick={() => changeLanguage("en")}
              // </a>
              } <button onClick={() => changeLanguage("hi")} className={`hover:underline ${i18n.language === "hi" ? "text-blue-600 font-semibold" : "text-gray-700"}`} >हिन्दी</button>
              {/* <img
                src="/images/hi.png"
                alt="हिंदी"
                className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                onClick={() => changeLanguage("hi")}
              /> */}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center">
            <ul className="hidden md:flex space-x-6 text-gray-800 font-medium items-center">
              <li><Link to="/about" className="hover:text-blue-500">{t("nav.about")}</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-500">{t("nav.admissions")}</Link></li>
              <li
                className="relative group"
                onMouseEnter={() => setIsAcademicsOpen(true)}
                onMouseLeave={() => setIsAcademicsOpen(false)}
              >
                <span className="hover:text-blue-500 cursor-pointer">{t("nav.academics")}</span>
                {isAcademicsOpen && (
                  <ul className="absolute left-0 mt-0 w-64 bg-blue-700 shadow z-50">
                    <li><Link to="/academic-programs" className="block px-4 py-2 text-white hover:bg-blue-600">{t("nav.academic_programs")}</Link></li>
                    <li><Link to="/lower-school" className="block px-4 py-2 text-white hover:bg-blue-600">{t("nav.lower_school")}</Link></li>
                    <li><Link to="/lower-school-25" className="block px-4 py-2 text-white hover:bg-blue-600">{t("nav.lower_school_25")}</Link></li>
                    <li><Link to="/middle-school" className="block px-4 py-2 text-white hover:bg-blue-600">{t("nav.middle_school")}</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/studentlife" className="hover:text-blue-500">{t("nav.studentlife")}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">{t("nav.contact")}</Link></li>
            </ul>

            {/* Hamburger Button (Mobile) */}
            <button className="md:hidden ml-4" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
            <ul className="flex flex-col text-gray-800 font-medium pb-4">
              <li>
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMobileMenu}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMobileMenu}>
                  {t("nav.admissions")}
                </Link>
              </li>
              <li>
                <details className="group">
                  <summary className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
                    {t("nav.academics")}
                  </summary>
                  <ul className="pl-6 bg-blue-50">
                    <li><Link to="/academic-programs" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>{t("nav.academic_programs")}</Link></li>
                    <li><Link to="/lower-school" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>{t("nav.lower_school")}</Link></li>
                    <li><Link to="/lower-school-25" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>{t("nav.lower_school_25")}</Link></li>
                    <li><Link to="/middle-school" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>{t("nav.middle_school")}</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/studentlife" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMobileMenu}>
                  {t("nav.studentlife")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMobileMenu}>
                  {t("nav.contact")}
                </Link>
              </li>

              {/* Language Flags (Mobile Menu) */}
              <div className="flex space-x-2 px-4 pt-2">
                <img
                  src="/images/en.png"
                  alt="English"
                  className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                  onClick={() => changeLanguage("en")}
                />
                <img
                  src="/images/hi.png"
                  alt="हिंदी"
                  className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                  onClick={() => changeLanguage("hi")}
                />
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
