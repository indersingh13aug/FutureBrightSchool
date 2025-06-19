import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // Optional: use any icons

export default function Navbar() {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-22 py-2">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-300 hover:text-blue-800">
            <img src="/images/4.png" alt="School 1" className="rounded-xl w-34 h-24 object-cover" />
          </Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium items-center">
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
            <li>
              <select
                onChange={changeLanguage}
                defaultValue={i18n.language}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="en">EN</option>
                <option value="hi">हिंदी</option>
              </select>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-2 mt-2 text-gray-800 font-medium">
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
            <li className="px-4 py-2">
              <select
                onChange={changeLanguage}
                defaultValue={i18n.language}
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="en">EN</option>
                <option value="hi">हिंदी</option>
              </select>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
