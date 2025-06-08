import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-22">
          
          <Link to="/" className="text-2xl font-bold text-blue-300 hover:text-blue-800">
          <img to="/" src="/images/4.png" alt="School 1" className="rounded-xl w-34 h-24 object-cover" />
          </Link>

          <ul className="flex space-x-6 text-gray-800 font-medium">
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/admissions" className="hover:text-blue-500">Admissions</Link></li>

            {/* Academics with Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setIsAcademicsOpen(true)}
              onMouseLeave={() => setIsAcademicsOpen(false)}
            >
              <span className="hover:text-blue-500 cursor-pointer">Academics</span>
              {isAcademicsOpen && (
                <ul className="absolute left-0 mt-0 w-64 bg-blue-700 shadow z-50">
                  <li><Link to="/academic-programs" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">Academic Programs</Link></li>
                  <li><Link to="/lower-school" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">Lower School</Link></li>
                  <li><Link to="/lower-school-25" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">Lower School (2-5)</Link></li>
                  <li><Link to="/middle-school" className="block px-4 py-2 text-white font-semibold hover:bg-blue-600">Middle School (6-8)</Link></li>
                  
                </ul>

              )}
            </li>

            <li><Link to="/studentlife" className="hover:text-blue-500">Student Life</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact US</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
