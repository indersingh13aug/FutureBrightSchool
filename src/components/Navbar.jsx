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
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-22 py-2">

          {/* Left Section: Logo + Language Flags */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-300 hover:text-blue-800">
              <img
                src="/images/4.png"
                alt="School Logo"
                className="rounded-xl w-34 h-24 object-cover"
              />
            </Link>

            {/* Language Flags */}
            <div className="flex space-x-2">
              <img
                src="/images/en.png"
                alt="English"
                className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                onClick={() => changeLanguage('en')}
              />
              <img
                src="/images/hi.png"
                alt="हिंदी"
                className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                onClick={() => changeLanguage('hi')}
              />
            </div>
          </div>

          {/* Hamburger Button (for mobile) */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
            <ul className="flex space-x-6 items-center">
              <li><Link to="/about" className="hover:text-blue-500">{t('nav.about')}</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-500">{t('nav.admissions')}</Link></li>
              <li
                className="relative group"
                onMouseEnter={() => setIsAcademicsOpen(true)}
                onMouseLeave={() => setIsAcademicsOpen(false)}
              >
                <span className="hover:text-blue-500 cursor-pointer">{t('nav.academics')}</span>
                {isAcademicsOpen && (
                  <ul className="absolute left-0 mt-0 w-64 bg-blue-700 shadow z-50">
                    <li><Link to="/academic-programs" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">{t('nav.academic_programs')}</Link></li>
                    <li><Link to="/lower-school" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">{t('nav.lower_school')}</Link></li>
                    <li><Link to="/lower-school-25" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">{t('nav.lower_school_25')}</Link></li>
                    <li><Link to="/middle-school" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">{t('nav.middle_school')}</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/studentlife" className="hover:text-blue-500">{t('nav.studentlife')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-2 mt-2 text-gray-800 font-medium pb-4">
            <li><Link to="/about" className="block px-4 py-2 hover:bg-gray-100">{t('nav.about')}</Link></li>
            <li><Link to="/admissions" className="block px-4 py-2 hover:bg-gray-100">{t('nav.admissions')}</Link></li>
            <li>
              <details className="group">
                <summary className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
                  {t('nav.academics')}
                </summary>
                <ul className="pl-6 bg-blue-50">
                  <li><Link to="/academic-programs" className="block px-4 py-2 hover:bg-blue-100">{t('nav.academic_programs')}</Link></li>
                  <li><Link to="/lower-school" className="block px-4 py-2 hover:bg-blue-100">{t('nav.lower_school')}</Link></li>
                  <li><Link to="/lower-school-25" className="block px-4 py-2 hover:bg-blue-100">{t('nav.lower_school_25')}</Link></li>
                  <li><Link to="/middle-school" className="block px-4 py-2 hover:bg-blue-100">{t('nav.middle_school')}</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/studentlife" className="block px-4 py-2 hover:bg-gray-100">{t('nav.studentlife')}</Link></li>
            <li><Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">{t('nav.contact')}</Link></li>

            {/* Language Flags in Mobile */}
            <div className="flex space-x-2 px-4 pt-2">
              <img
                src="/images/en.png"
                alt="English"
                className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                onClick={() => changeLanguage('en')}
              />
              <img
                src="/images/hi.png"
                alt="हिंदी"
                className="w-7 h-5 cursor-pointer border border-gray-300 rounded"
                onClick={() => changeLanguage('hi')}
              />
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
}
